"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LockIcon, ArrowUpRightIcon, ZapIcon, MailIcon, BarChart3Icon, RefreshCwIcon } from "lucide-react";
import { fadeUp, viewport } from "@/lib/animations";

interface CaseStat {
  value: string;
  label: string;
}

interface CaseStudy {
  tag: string;
  client: string;
  title: string;
  description: string;
  stats: [CaseStat, CaseStat, CaseStat];
  logoSrc?: string;
  isAnonymous?: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    tag: "E-Commerce",
    client: "SLEIN",
    title: "Built a Full E-Commerce Platform with Smart Inventory Automation",
    description:
      "We designed and developed SLEIN's e-commerce platform from the ground up, then layered in inventory management automation. Stock levels stay accurate, restock alerts fire automatically, and the manual spreadsheet work that was slowing the team down is gone.",
    stats: [
      { value: "0", label: "Manual stock checks" },
      { value: "Real-time", label: "Inventory visibility" },
      { value: "Automated", label: "Restock alerts" },
    ],
    logoSrc: "/images/clients/slein-logo.webp",
  },
  {
    tag: "E-Commerce",
    client: "EXTOLMART",
    title: "AI Chat & Voice Bot Handling Customer Support Around the Clock",
    description:
      "We built EXTOLMART's e-commerce platform and integrated an AI-powered chatbot and call bot to handle incoming customer queries around the clock. Product questions, order status, returns all get answered without a human agent stepping in for routine requests.",
    stats: [
      { value: "24/7", label: "Support coverage" },
      { value: "Instant", label: "First response time" },
      { value: "Zero", label: "Missed routine queries" },
    ],
    logoSrc: "/images/clients/extolmart-logo.svg",
  },
  {
    tag: "Finance",
    client: "Finance Client",
    title: "Automated Reporting & Document Workflows for a Finance Firm",
    description:
      "Helped a finance business replace manual report generation with automated workflows. Data gets pulled, formatted, and delivered on schedule without anyone touching it. Confidential by client request.",
    stats: [
      { value: "Faster", label: "Report turnaround" },
      { value: "Less", label: "Manual data handling" },
      { value: "On-schedule", label: "Delivery every time" },
    ],
    isAnonymous: true,
  },
  {
    tag: "Healthcare",
    client: "Healthcare Client",
    title: "Patient Intake & Appointment Automation for a Healthcare Provider",
    description:
      "Streamlined patient intake forms, appointment reminders, and follow-up communication using AI automation. Admin load dropped and patient response rates improved. Confidential by client request.",
    stats: [
      { value: "Reduced", label: "Admin workload" },
      { value: "Faster", label: "Intake processing" },
      { value: "Improved", label: "Patient response rate" },
    ],
    isAnonymous: true,
  },
  {
    tag: "Real Estate",
    client: "Real Estate Client",
    title: "Lead Capture & Follow-Up Automation for a Real Estate Business",
    description:
      "Built an automated lead pipeline that captured enquiries from multiple channels, qualified them, and triggered personalised follow-up sequences. No lead went cold. Confidential by client request.",
    stats: [
      { value: "Faster", label: "Lead response time" },
      { value: "More", label: "Leads followed up" },
      { value: "Zero", label: "Leads gone cold" },
    ],
    isAnonymous: true,
  },
  {
    tag: "Lead Gen",
    client: "Lead Gen Client",
    title: "End-to-End Lead Generation System with AI Qualification",
    description:
      "Designed and deployed a lead generation automation that sourced, scored, and routed qualified leads to the right team members. Manual filtering is completely gone. Confidential by client request.",
    stats: [
      { value: "Higher", label: "Lead quality" },
      { value: "Zero", label: "Manual lead sorting" },
      { value: "Faster", label: "Sales handoff" },
    ],
    isAnonymous: true,
  },
];

const mailTantraFeatures = [
  { icon: MailIcon, label: "AI writes personalised emails per prospect. No templates, no copy-paste." },
  { icon: RefreshCwIcon, label: "Multi-step sequences that pause the moment someone replies" },
  { icon: BarChart3Icon, label: "Real-time campaign metrics, reply rates, and ROI dashboard" },
  { icon: ZapIcon, label: "Sending, follow-ups, and reply detection all automated, 24/7" },
];

// Navbar height. Each card pins 30px lower than the previous.
const STICKY_TOP_BASE = 88;
const STICKY_TOP_STEP = 30;
// Gap between cards (visible space at rest)
const CARD_GAP = 16;
// Scroll dwell per card — how long each card stays pinned before the next arrives.
const CARD_H = 500;
// Approximate rendered card height — accounts for taller mobile cards where text wraps.
const CARD_RENDERED_H = 450;

export function CaseStudiesSection() {
  const n = caseStudies.length;
  // Stop the sticky region just after the last card is fully in view.
  // Without this trim, scrolling past card 6 has a long dead zone before MailTantra.
  const containerH = (n - 1) * CARD_H + CARD_RENDERED_H + STICKY_TOP_BASE;

  return (
    <section id="case-studies" className="bg-muted pt-24 pb-24">
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 mb-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <p className="marvonix-label">CASE STUDIES</p>
          <h2 className="font-[family-name:var(--font-outfit)] text-[48px] md:text-[64px] font-semibold tracking-[-2px] text-foreground leading-[1.1] mt-3">
            Our Recent Work
          </h2>
        </motion.div>
      </div>

      {/* Stacking sticky container — only client case study cards */}
      <div
        className="relative max-w-[1200px] mx-auto px-5 md:px-10"
        style={{ height: containerH }}
      >
        {caseStudies.map((study, i) => (
          <div
            key={study.client}
            className="sticky"
            style={{
              top: STICKY_TOP_BASE + i * STICKY_TOP_STEP,
              zIndex: i + 1,
              marginBottom: CARD_GAP,
            }}
          >
            <CaseStudyCard study={study} />
          </div>
        ))}
      </div>

      {/* MailTantra — normal flow after the stack, not sticky */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 mt-4">
        <MailTantraCard />
      </div>
    </section>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="rounded-[20px] bg-card border border-border shadow-sm overflow-hidden">
      <div className="h-[3px] w-full" style={{ background: "oklch(0.6171 0.1375 39.0427)" }} />

      <div className="p-8 md:p-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
          <div className="flex items-center gap-3">
            {study.logoSrc ? (
              <div className="relative h-7 w-[110px] shrink-0">
                <Image
                  src={study.logoSrc}
                  alt={study.client}
                  fill
                  style={{ objectFit: "contain", objectPosition: "left" }}
                />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-muted border border-border flex items-center justify-center">
                  <LockIcon className="w-3.5 h-3.5 text-muted-foreground" />
                </div>
                <span className="text-[13px] font-medium text-muted-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>
                  Confidential client
                </span>
              </div>
            )}
          </div>
          <span className="bg-secondary rounded-full px-3 py-1 text-[12px] font-medium text-secondary-foreground border border-border shrink-0">
            {study.tag}
          </span>
        </div>

        {/* Title + description */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 mb-8">
          <h3
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: "20px",
              fontWeight: 600,
              color: "oklch(0.1908 0.0020 106.5859)",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            {study.title}
          </h3>
          <p className="text-[14px] text-muted-foreground leading-[22px] m-0" style={{ fontFamily: "Outfit, sans-serif" }}>
            {study.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 pt-6 border-t border-border">
          {study.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span
                className="text-[18px] md:text-[26px]"
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 700,
                  color: "oklch(0.6171 0.1375 39.0427)",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span className="text-[11px] md:text-[12px] text-muted-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MailTantraCard() {
  return (
    <div
      className="rounded-[20px] overflow-hidden border shadow-sm"
      style={{ background: "#0f0f0f", borderColor: "rgba(255,93,34,0.25)" }}
    >
      <div className="h-[3px] w-full" style={{ background: "#FF5D22" }} />

      <div className="p-8 md:p-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
          <div className="relative h-7 w-[160px]">
            <Image
              src="/images/clients/mailtantra-logo.svg"
              alt="MailTantra"
              fill
              style={{ objectFit: "contain", objectPosition: "left", filter: "brightness(0) invert(1)" }}
            />
          </div>
          <div className="flex items-center gap-2">
            <span
              className="rounded-full px-3 py-1 text-[12px] font-semibold border"
              style={{ color: "#FF5D22", borderColor: "rgba(255,93,34,0.4)", background: "rgba(255,93,34,0.1)" }}
            >
              In-house Product
            </span>
            <span
              className="rounded-full px-3 py-1 text-[12px] font-medium border"
              style={{ color: "rgba(255,255,255,0.45)", borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)" }}
            >
              Beta
            </span>
          </div>
        </div>

        {/* Title + description */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 mb-8">
          <h3
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: "20px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.92)",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            AI-Powered Email Outreach. Built for Agencies, by Us.
          </h3>
          <p
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: "14px",
              color: "rgba(255,255,255,0.5)",
              lineHeight: "22px",
              margin: 0,
            }}
          >
            MailTantra replaces your entire outreach stack. AI writes personalised emails, manages sequences, detects replies, and tracks your ROI. Fully automated, running around the clock.
          </p>
        </div>

        {/* Features + CTA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t" style={{ borderColor: "rgba(255,93,34,0.15)" }}>
          {mailTantraFeatures.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-start gap-3">
              <div
                className="mt-0.5 w-7 h-7 rounded-[7px] flex items-center justify-center shrink-0"
                style={{ background: "rgba(255,93,34,0.12)", border: "1px solid rgba(255,93,34,0.25)" }}
              >
                <Icon className="w-3.5 h-3.5" style={{ color: "#FF5D22" }} />
              </div>
              <p className="text-[13px] leading-[19px] m-0" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "Outfit, sans-serif" }}>
                {label}
              </p>
            </div>
          ))}
          <div className="sm:col-span-2 mt-2">
            <Link
              href="https://mailtantra.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[11px] px-5 py-2.5 text-[13px] font-semibold transition-opacity hover:opacity-85 no-underline"
              style={{ background: "#FF5D22", color: "#fff", fontFamily: "Outfit, sans-serif" }}
            >
              Try the Beta
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
