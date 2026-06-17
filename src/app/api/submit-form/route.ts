import { NextRequest, NextResponse } from "next/server";

// In-memory rate limiter: max 5 submissions per IP per 60 seconds
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

const MAX_LEN: Record<string, number> = {
  formType:    20,
  fullName:    100,
  companyName: 100,
  email:       254,
  message:     2000,
  service:     100,
  budget:      50,
  description: 2000,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const VALID_FORM_TYPES = new Set(["contact", "project"]);

interface ValidatedBody {
  formType: string;
  fullName: string;
  companyName?: string;
  email: string;
  message?: string;
  service?: string;
  budget?: string;
  description?: string;
}

function validate(raw: unknown): { data: ValidatedBody } | { error: string } {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return { error: "Invalid request body" };
  }

  const r = raw as Record<string, unknown>;

  // Check for unexpected keys
  const allowed = new Set(Object.keys(MAX_LEN));
  for (const key of Object.keys(r)) {
    if (!allowed.has(key)) return { error: `Unexpected field: ${key}` };
  }

  // formType
  const formType = r.formType;
  if (typeof formType !== "string" || !VALID_FORM_TYPES.has(formType)) {
    return { error: "Invalid formType" };
  }

  // fullName — required, string, max length
  const fullName = r.fullName;
  if (typeof fullName !== "string" || fullName.trim().length === 0) {
    return { error: "fullName is required" };
  }
  if (fullName.length > MAX_LEN.fullName) {
    return { error: "fullName is too long" };
  }

  // email — required, valid format, max length
  const email = r.email;
  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return { error: "Valid email is required" };
  }
  if (email.length > MAX_LEN.email) {
    return { error: "email is too long" };
  }

  // Optional string fields — just enforce type and length
  const optionalFields = ["companyName", "message", "service", "budget", "description"] as const;
  for (const field of optionalFields) {
    const val = r[field];
    if (val !== undefined) {
      if (typeof val !== "string") return { error: `${field} must be a string` };
      if (val.length > MAX_LEN[field]) return { error: `${field} is too long` };
    }
  }

  return {
    data: {
      formType,
      fullName: fullName.trim(),
      companyName: typeof r.companyName === "string" ? r.companyName.trim() : undefined,
      email: email.trim().toLowerCase(),
      message: typeof r.message === "string" ? r.message.trim() : undefined,
      service: typeof r.service === "string" ? r.service.trim() : undefined,
      budget: typeof r.budget === "string" ? r.budget.trim() : undefined,
      description: typeof r.description === "string" ? r.description.trim() : undefined,
    },
  };
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl || webhookUrl.includes("YOUR_DEPLOYMENT_ID")) {
    return NextResponse.json(
      { error: "Google Sheets webhook not configured." },
      { status: 503 }
    );
  }

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const result = validate(raw);
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: 422 });
  }

  try {
    // Google Apps Script returns a 302 redirect when Content-Type is application/json,
    // which Node fetch re-issues as GET — bypassing doPost entirely.
    // Sending as text/plain avoids the redirect; e.postData.contents still holds the
    // raw JSON string so JSON.parse() in the Apps Script works unchanged.
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(result.data),
      redirect: "follow",
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.error(`[submit-form] Apps Script returned ${response.status}:`, detail.slice(0, 300));
      return NextResponse.json({ error: "Failed to submit to Google Sheets" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[submit-form] fetch threw:", err);
    return NextResponse.json({ error: "Network error reaching Google Sheets" }, { status: 502 });
  }
}
