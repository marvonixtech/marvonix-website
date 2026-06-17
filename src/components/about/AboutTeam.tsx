"use client";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewport } from "@/lib/animations";

const FOUNDERS = [
  {
    name: "Manish Vaghamshi",
    initials: "MV",
    role: "Founder & CEO",
    bio: "Manish started Marvonix after spending years working with UK businesses that were losing hours every week to manual processes. He wanted to build something that made AI genuinely useful for everyday operations, not just interesting to look at.",
    location: "United Kingdom",
    color: "from-violet-500 to-indigo-600",
    linkedin: process.env.NEXT_PUBLIC_FOUNDER_1_LINKEDIN ?? "https://linkedin.com/in/manish-vaghamshi",
  },
  {
    name: "Meet Domadiya",
    initials: "MD",
    role: "Co-Founder",
    bio: "Meet handles the technical side of everything we build. He has a background in software engineering and automation, and tends to think through the edge cases before most people have finished asking the question.",
    location: "India",
    color: "from-orange-500 to-rose-600",
    linkedin: process.env.NEXT_PUBLIC_FOUNDER_2_LINKEDIN ?? "https://linkedin.com/in/meet-domadiya",
  },
];

const TEAM = [
  {
    name: "Vivek S",
    initials: "VS",
    role: "AI Integration Lead",
    location: "India",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Sanjay D",
    initials: "SD",
    role: "Client Success Manager",
    location: "India",
    color: "from-sky-500 to-blue-600",
  },
  {
    name: "Nehal D",
    initials: "ND",
    role: "Automation Engineer",
    location: "India",
    color: "from-fuchsia-500 to-purple-600",
  },
  {
    name: "Jeff P",
    initials: "JP",
    role: "Growth & Partnerships",
    location: "United Kingdom",
    color: "from-amber-500 to-orange-600",
  },
];

function LocationBadge({ location }: { location: string }) {
  const isUK = location === "United Kingdom";
  return (
    <span
      className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full border ${
        isUK
          ? "bg-blue-500/8 border-blue-500/20 text-blue-400"
          : "bg-orange-500/8 border-orange-500/20 text-orange-400"
      }`}
    >
      {isUK ? "🇬🇧" : "🇮🇳"} {location}
    </span>
  );
}

function Monogram({ initials, color, size = "lg" }: { initials: string; color: string; size?: "lg" | "sm" }) {
  const sizeClass = size === "lg" ? "w-20 h-20 text-[28px]" : "w-16 h-16 text-[20px]";
  return (
    <div className={`rounded-full bg-gradient-to-br ${color} flex items-center justify-center font-bold text-white font-[family-name:var(--font-outfit)] flex-shrink-0 ${sizeClass}`}>
      {initials}
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function FounderCard({ member }: { member: (typeof FOUNDERS)[number] }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-card border border-border rounded-[20px] p-6 shadow-sm"
    >
      <div className="flex items-start gap-5">
        <Monogram initials={member.initials} color={member.color} size="lg" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[18px] font-semibold text-foreground font-[family-name:var(--font-outfit)]">
              {member.name}
            </p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[12px] text-muted-foreground hover:text-primary transition-colors font-[family-name:var(--font-outfit)] flex-shrink-0"
              aria-label={`${member.name} on LinkedIn`}
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
          <p className="text-[13px] text-primary font-medium mt-0.5 font-[family-name:var(--font-outfit)]">
            {member.role}
          </p>
          <p className="text-[14px] text-muted-foreground leading-[1.65] mt-3 font-[family-name:var(--font-outfit)]">
            {member.bio}
          </p>
          <div className="mt-4">
            <LocationBadge location={member.location} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TeamCard({ member }: { member: (typeof TEAM)[number] }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-card border border-border rounded-[20px] p-5 shadow-sm flex flex-col items-center text-center gap-3"
    >
      <Monogram initials={member.initials} color={member.color} size="sm" />
      <div>
        <p className="text-[15px] font-semibold text-foreground font-[family-name:var(--font-outfit)]">
          {member.name}
        </p>
        <p className="text-[12px] text-muted-foreground mt-0.5 font-[family-name:var(--font-outfit)]">
          {member.role}
        </p>
        <div className="mt-3 flex justify-center">
          <LocationBadge location={member.location} />
        </div>
      </div>
    </motion.div>
  );
}

export function AboutTeam() {
  return (
    <section className="py-24 bg-muted">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <p className="marvonix-label">OUR TEAM</p>
          <h2 className="text-[52px] md:text-[64px] font-semibold tracking-[-2px] text-foreground mt-3 font-[family-name:var(--font-outfit)] leading-[1.1]">
            The People Behind It
          </h2>
          <p className="text-[17px] text-muted-foreground mt-4 max-w-[540px] leading-[1.7] font-[family-name:var(--font-outfit)]">
            A small team spread across the UK and India. We keep it this size on purpose so that every person here is genuinely responsible for something.
          </p>
        </motion.div>

        {/* Founders */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {FOUNDERS.map((member) => (
            <FounderCard key={member.name} member={member} />
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="flex items-center gap-4 mt-14 mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="h-px flex-1 bg-border" />
          <span className="text-[12px] font-medium text-muted-foreground tracking-[0.08em] uppercase font-[family-name:var(--font-outfit)]">
            The rest of the crew
          </span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        {/* Team */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {TEAM.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </motion.div>

        <motion.p
          className="text-[14px] text-muted-foreground mt-10 font-[family-name:var(--font-outfit)]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          🌍 We work across the <span className="text-foreground font-medium">United Kingdom</span> and <span className="text-foreground font-medium">India</span>, which means we cover more time zones and you are rarely waiting long for a response.
        </motion.p>
      </div>
    </section>
  );
}
