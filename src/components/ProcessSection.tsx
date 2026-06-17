"use client";

import Image from "next/image";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, staggerItem, viewport } from "@/lib/animations";
import { useEffect, useRef, useState } from "react";

// ─── Floating icon for Card 1 ───────────────────────────────────────────────

interface FloatingIconProps {
  src: string;
  alt: string;
  size: number;
  delay: number;
  x: string;
  y: string;
  amplitude?: number;
  duration?: number;
}

function FloatingIcon({ src, alt, size, delay, x, y, amplitude = 10, duration = 3.5 }: FloatingIconProps) {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: x, top: y }}>
      <motion.div
        animate={{ y: [0, -amplitude, 0, amplitude, 0] }}
        transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="tool-icon-wrap rounded-2xl shadow-lg overflow-hidden"
          style={{ width: size, height: size }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.12 }}
        >
          <Image src={src} alt={alt} width={size} height={size} className="object-cover w-full h-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}

// ─── Card 1 — Share Your Workflow ────────────────────────────────────────────

function Card1Illustration() {
  const icons = [
    { src: "/images/tool-icon-5.png", alt: "Notion",    size: 64,  x: "50%", y: "20%", delay: 0,    amplitude: 9,  duration: 3.8 },
    { src: "/images/tool-icon-1.png", alt: "Zapier",    size: 52,  x: "20%", y: "42%", delay: 0.4,  amplitude: 7,  duration: 4.2 },
    { src: "/images/tool-icon-6.png", alt: "Make",      size: 52,  x: "80%", y: "42%", delay: 0.7,  amplitude: 11, duration: 3.6 },
    { src: "/images/tool-icon-2.png", alt: "Airtable",  size: 44,  x: "28%", y: "68%", delay: 0.2,  amplitude: 8,  duration: 4.5 },
    { src: "/images/tool-icon-4.png", alt: "ChatGPT",   size: 44,  x: "72%", y: "68%", delay: 0.9,  amplitude: 10, duration: 3.3 },
    { src: "/images/tool-icon-3.png", alt: "Framer",    size: 36,  x: "50%", y: "76%", delay: 0.5,  amplitude: 6,  duration: 4.0 },
  ];

  return (
    <div className="relative w-full h-full min-h-[280px] overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, oklch(0.6171 0.1375 39.0427 / 0.18) 0%, transparent 70%)",
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(oklch(0.6171 0.1375 39.0427) 1px, transparent 1px), linear-gradient(90deg, oklch(0.6171 0.1375 39.0427) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Center pulse ring */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          className="rounded-full border border-primary/20"
          animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
          style={{ width: 80, height: 80 }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border border-primary/15"
          animate={{ scale: [1, 2.2], opacity: [0.3, 0] }}
          transition={{ duration: 2.5, delay: 0.8, repeat: Infinity, ease: "easeOut" }}
        />
      </div>
      {icons.map((icon) => (
        <FloatingIcon key={icon.alt} {...icon} />
      ))}
      {/* Label — sits below icons with a subtle fade so it's always visible */}
      <div className="absolute bottom-0 left-0 right-0 h-14 flex items-end justify-center pb-4"
        style={{ background: "linear-gradient(to bottom, transparent, var(--secondary) 60%)" }}
      >
        <span className="text-muted-foreground/60 text-[11px] font-[family-name:var(--font-outfit)] tracking-widest uppercase">
          Your current stack
        </span>
      </div>
    </div>
  );
}

// ─── Card 2 — We Build the System ────────────────────────────────────────────

function AnimatedLine({ delay, reverse = false }: { delay: number; reverse?: boolean }) {
  return (
    <motion.div className="relative flex-1 h-px overflow-hidden">
      <div className="absolute inset-0 bg-border/40" />
      <motion.div
        className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ left: reverse ? "100%" : "-10%" }}
        animate={{ left: reverse ? ["-10%", "100%"] : ["100%", "-10%"] }}
        transition={{ duration: 2, delay, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
      />
    </motion.div>
  );
}

function Card2Illustration() {
  const leftIcons = [
    { src: "/images/tool-icon-5.png", alt: "Notion" },
    { src: "/images/tool-icon-1.png", alt: "Zapier" },
    { src: "/images/tool-icon-6.png", alt: "Make" },
  ];
  const rightIcons = [
    { src: "/images/tool-icon-4.png", alt: "ChatGPT" },
    { src: "/images/tool-icon-2.png", alt: "Airtable" },
    { src: "/images/tool-icon-3.png", alt: "Framer" },
  ];

  return (
    <div className="relative w-full h-full min-h-[280px] flex flex-col items-center justify-center px-4 gap-3">
      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, oklch(0.6171 0.1375 39.0427 / 0.12) 0%, transparent 70%)",
        }}
      />

      {/* Connection rows */}
      <div className="relative z-10 w-full flex flex-col gap-3 max-w-[300px]">
        {leftIcons.map((icon, i) => (
          <motion.div
            key={icon.alt}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
          >
            {/* Left icon */}
            <div className="tool-icon-wrap w-9 h-9 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
              <Image src={icon.src} alt={icon.alt} width={36} height={36} className="w-full h-full object-cover" />
            </div>

            {/* Animated line in */}
            <AnimatedLine delay={i * 0.3} />

            {/* Center node (only on middle row) */}
            {i === 1 ? (
              <motion.div
                className="w-11 h-11 rounded-full bg-primary/10 border-2 border-primary/40 flex items-center justify-center shadow-md flex-shrink-0"
                animate={{ boxShadow: ["0 0 0px oklch(0.6171 0.1375 39.0427 / 0)", "0 0 20px oklch(0.6171 0.1375 39.0427 / 0.5)", "0 0 0px oklch(0.6171 0.1375 39.0427 / 0)"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src="/images/marvonix-symbol.svg" alt="Marvonix" width={22} height={22} />
              </motion.div>
            ) : (
              <div className="w-2 h-2 rounded-full bg-primary/50 flex-shrink-0" />
            )}

            {/* Animated line out */}
            <AnimatedLine delay={i * 0.3 + 0.3} reverse />

            {/* Right icon */}
            <motion.div
              className="tool-icon-wrap w-9 h-9 rounded-xl overflow-hidden flex-shrink-0 shadow-md"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 + 0.5 }}
            >
              <Image src={rightIcons[i].src} alt={rightIcons[i].alt} width={36} height={36} className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Status badge */}
      <motion.div
        className="relative z-10 flex items-center gap-2 bg-background/60 backdrop-blur-sm border border-border rounded-full px-3 py-1.5 mt-1"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-primary"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
        <span className="text-primary text-[11px] font-[family-name:var(--font-outfit)] tracking-wider">
          Automation live
        </span>
      </motion.div>
    </div>
  );
}

// ─── Animated counter ─────────────────────────────────────────────────────────

function AnimatedNumber({ target, duration = 1.5, delay = 0 }: { target: number; duration?: number; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v).toString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionVal, target, { duration, delay, ease: "easeOut" });
    return controls.stop;
  }, [inView, motionVal, target, duration, delay]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

// ─── Card 3 — Launch and Take Control ────────────────────────────────────────

function Card3Illustration() {
  const [activeTool, setActiveTool] = useState(0);
  const tools = [
    { src: "/images/tool-icon-5.png", alt: "Notion", name: "Notion" },
    { src: "/images/tool-icon-1.png", alt: "Zapier", name: "Zapier" },
    { src: "/images/tool-icon-4.png", alt: "ChatGPT", name: "ChatGPT" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTool((prev) => (prev + 1) % tools.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [tools.length]);

  const stats = [
    { label: "Workflows", value: 12 },
    { label: "Saved hrs", value: 48 },
    { label: "Tasks done", value: 340 },
  ];

  return (
    <div className="relative w-full h-full min-h-[280px] flex flex-col items-stretch justify-end overflow-hidden">
      {/* Glow */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 20%, oklch(0.6171 0.1375 39.0427 / 0.1) 0%, transparent 65%)",
        }}
      />

      {/* Panel */}
      <div className="relative z-10 mx-4 mb-0 bg-background/90 backdrop-blur-sm rounded-t-2xl border border-border border-b-0 p-4 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
            <span className="text-foreground text-[12px] font-[family-name:var(--font-outfit)] font-semibold">
              Control Panel
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-border" />
            <div className="w-2 h-2 rounded-full bg-border" />
            <div className="w-2 h-2 rounded-full bg-primary/50" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-secondary rounded-xl p-2.5 text-center border border-border"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
            >
              <p className="text-foreground text-[15px] font-semibold font-[family-name:var(--font-outfit)]">
                <AnimatedNumber target={stat.value} delay={i * 0.15 + 0.5} />
              </p>
              <p className="text-muted-foreground text-[9px] font-[family-name:var(--font-outfit)]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Active tool row */}
        <div className="flex items-center gap-2.5 bg-secondary rounded-xl p-2.5 border border-border">
          <div className="tool-icon-wrap w-8 h-8 rounded-xl overflow-hidden flex-shrink-0 relative">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.alt}
                className="absolute inset-0"
                animate={{ opacity: activeTool === i ? 1 : 0, scale: activeTool === i ? 1 : 0.8 }}
                transition={{ duration: 0.35 }}
              >
                <Image src={tool.src} alt={tool.alt} width={32} height={32} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-foreground text-[11px] font-medium font-[family-name:var(--font-outfit)]">
              Running via{" "}
              <motion.span
                key={activeTool}
                className="text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {tools[activeTool].name}
              </motion.span>
            </p>
            <p className="text-muted-foreground text-[9px] font-[family-name:var(--font-outfit)]">
              Plug-and-play dashboard ready
            </p>
          </div>
          <span className="bg-primary/15 text-primary text-[9px] px-2 py-0.5 rounded-full font-[family-name:var(--font-outfit)] flex-shrink-0">
            Live
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Process card shell ───────────────────────────────────────────────────────

interface ProcessCardProps {
  number: number;
  title: string;
  description: string;
  illustration: React.ReactNode;
}

function ProcessCard({ number, title, description, illustration }: ProcessCardProps) {
  return (
    <motion.article
      className="bg-card border border-border rounded-[20px] p-6 flex flex-col gap-8 min-h-[580px] shadow-sm cursor-default"
      whileHover={{ y: -6, boxShadow: "0 24px 48px oklch(0.6171 0.1375 39.0427 / 0.12)" }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-[17px] font-semibold flex-shrink-0">
            {number}
          </div>
        </div>
        <div>
          <p className="text-foreground text-[22px] font-semibold font-[family-name:var(--font-outfit)] mb-2 leading-tight">
            {title}
          </p>
          <p className="text-muted-foreground text-[14px] leading-6 font-[family-name:var(--font-outfit)]">
            {description}
          </p>
        </div>
      </div>

      {/* Illustration area */}
      <div className="flex-1 rounded-[16px] bg-secondary border border-border overflow-hidden">
        {illustration}
      </div>
    </motion.article>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function ProcessSection() {
  const cards = [
    {
      number: 1,
      title: "Share Your Workflow",
      description:
        "Tell us how your business runs, the tools you use, and where time gets wasted. We map the gaps.",
      illustration: <Card1Illustration />,
    },
    {
      number: 2,
      title: "We Build the System",
      description:
        "Our team designs and builds custom AI automations that connect your entire stack. Work keeps moving even when you're not.",
      illustration: <Card2Illustration />,
    },
    {
      number: 3,
      title: "Launch and Take Control",
      description:
        "Go live with a dashboard and a full handover. You run things your way, we handle the complexity behind the scenes.",
      illustration: <Card3Illustration />,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Heading */}
        <motion.div
          className="mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="marvonix-label mb-4">THE MARVONIX METHOD</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className={cn(
                "font-[family-name:var(--font-outfit)]",
                "text-[48px] md:text-[64px] font-semibold tracking-[-2px] text-foreground leading-[1.1]"
              )}
            >
              How it works
            </h2>
            <p className="text-muted-foreground text-[15px] max-w-[340px] leading-6 font-[family-name:var(--font-outfit)] md:text-right pb-1">
              The Marvonix Method. From scattered tools to a business that runs itself in three steps.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {cards.map((card) => (
            <motion.div key={card.number} variants={staggerItem}>
              <ProcessCard
                number={card.number}
                title={card.title}
                description={card.description}
                illustration={card.illustration}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
