import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Marvonix - AI Automation Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#f9f6f1",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: logo text */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              backgroundColor: "#b85c38",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 20, height: 20, backgroundColor: "#f9f6f1", borderRadius: "50%" }} />
          </div>
          <span style={{ fontSize: 28, fontWeight: 700, color: "#1a1a1a", letterSpacing: "-0.5px" }}>
            Marvonix
          </span>
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "#b85c38",
            }}
          >
            AI AUTOMATION AGENCY
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.05,
              letterSpacing: "-2.5px",
              maxWidth: 860,
            }}
          >
            Build, Automate, Scale With AI
          </div>
          <div style={{ fontSize: 22, color: "#6b6560", maxWidth: 600, lineHeight: 1.5 }}>
            Custom AI workflows that handle the work your team shouldn&apos;t have to do.
          </div>
        </div>

        {/* Bottom: stats strip */}
        <div style={{ display: "flex", gap: "48px" }}>
          {[
            { value: "24/7", label: "Always on" },
            { value: "75%", label: "Hours saved" },
            { value: "0", label: "Leads missed" },
          ].map(({ value, label }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: 32, fontWeight: 700, color: "#b85c38" }}>{value}</span>
              <span style={{ fontSize: 14, color: "#6b6560" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
