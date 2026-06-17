"use client";

import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, staggerItem, viewport } from "@/lib/animations";
import { useRef, useEffect, useState } from "react";

// ─── Card 1: Lead Generation & Outreach ───────────────────────────────────────

function LeadGenIllustration() {
  const rows = [
    { icon: "/images/tool-icon-1.png", name: "Gmail", action: "Compose outreach email", status: "Running…" },
    { icon: "/images/tool-icon-2.png", name: "Airtable", action: "Log new lead to CRM", status: null },
    { icon: "/images/tool-icon-5.png", name: "Notion", action: "Schedule follow-up", status: null },
  ];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative w-full h-full flex flex-col justify-center p-5 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 60%, oklch(0.6171 0.1375 39.0427 / 0.07) 0%, transparent 65%)" }} />
      <div className="absolute top-4 right-4 z-10 opacity-30">
        <Image src="/images/marvonix-symbol.svg" alt="Marvonix" width={22} height={22} />
      </div>
      <div className="relative z-10 flex flex-col gap-2.5">
        {rows.map((row, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-3 bg-background rounded-2xl px-4 py-3 border border-border shadow-xs"
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: i * 0.15 + 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="tool-icon-wrap w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 border border-border overflow-hidden">
              <Image src={row.icon} alt={row.name} width={32} height={32} className="object-cover w-full h-full" />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-foreground text-[12px] font-semibold font-[family-name:var(--font-outfit)] leading-none mb-0.5">{row.name}</span>
              <span className="text-muted-foreground text-[11px] font-[family-name:var(--font-outfit)] truncate">{row.action}</span>
            </div>
            {row.status && (
              <motion.span
                className="text-[10px] px-2 py-0.5 rounded-full font-[family-name:var(--font-outfit)] flex-shrink-0 bg-primary/10 text-primary"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                {row.status}
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>
      {/* Animated sequence arrow */}
      <motion.div
        className="absolute bottom-4 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7 }}
      >
        <span className="text-muted-foreground/50 text-[10px] font-[family-name:var(--font-outfit)] tracking-widest uppercase">
          Sequence running
        </span>
      </motion.div>
    </div>
  );
}

// ─── Card 2: Data Processing & Insights ───────────────────────────────────────

function DataInsightsIllustration() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const beforeBars = [3, 5, 4, 6, 3, 5];
  const afterBars  = [7, 9, 8, 11, 9, 12];
  const maxH = 12;

  return (
    <div ref={ref} className="relative w-full h-full flex flex-col items-center justify-center p-5 gap-3">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 80%, oklch(0.6171 0.1375 39.0427 / 0.07) 0%, transparent 65%)" }} />
      <div className="relative z-10 w-full max-w-[270px]">
        <div className="flex justify-between mb-3">
          <span className="text-muted-foreground text-[10px] font-[family-name:var(--font-outfit)] bg-secondary px-2 py-0.5 rounded-full border border-border">Before Marvonix</span>
          <span className="text-primary text-[10px] font-[family-name:var(--font-outfit)] bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">After Marvonix</span>
        </div>
        <div className="flex items-end gap-1.5 h-[110px]">
          {beforeBars.map((h, i) => (
            <motion.div
              key={`b${i}`}
              className="flex-1 rounded-t-md bg-border"
              initial={{ height: 0 }}
              animate={inView ? { height: `${(h / maxH) * 100}%` } : {}}
              transition={{ duration: 0.6, delay: i * 0.07 + 0.2, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
          <div className="w-px bg-border self-stretch mx-1" />
          {afterBars.map((h, i) => (
            <motion.div
              key={`a${i}`}
              className="flex-1 rounded-t-md bg-primary"
              initial={{ height: 0 }}
              animate={inView ? { height: `${(h / maxH) * 100}%` } : {}}
              transition={{ duration: 0.6, delay: i * 0.07 + 0.55, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
        </div>
        <div className="h-px bg-border w-full mt-1" />
        <div className="flex justify-between mt-2">
          <span className="text-muted-foreground text-[9px] font-[family-name:var(--font-outfit)]">Manual</span>
          <span className="text-primary text-[9px] font-[family-name:var(--font-outfit)]">AI-powered</span>
        </div>
        {/* Growth badge */}
        <motion.div
          className="mt-3 flex items-center justify-center gap-1.5 bg-primary/8 border border-primary/20 rounded-full px-3 py-1"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.1, duration: 0.4 }}
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.4, repeat: Infinity }} />
          <span className="text-primary text-[10px] font-[family-name:var(--font-outfit)] font-medium">+140% output efficiency</span>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Card 3: AI-Powered Chatbots ──────────────────────────────────────────────

function ChatbotIllustration() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [showTyping, setShowTyping] = useState(false);
  const [showReply, setShowReply] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const t1 = setTimeout(() => setShowTyping(true), 600);
    const t2 = setTimeout(() => { setShowTyping(false); setShowReply(true); }, 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [inView]);

  return (
    <div ref={ref} className="relative w-full h-full flex flex-col justify-center px-5 py-4 gap-3">
      <div className="absolute inset-0 opacity-8" style={{ background: "radial-gradient(ellipse at 50% 80%, oklch(0.6171 0.1375 39.0427) 0%, transparent 60%)" }} />
      <div className="relative z-10 flex flex-col gap-2.5">
        <div className="flex justify-end">
          <span className="text-muted-foreground text-[9px] font-[family-name:var(--font-outfit)] uppercase tracking-wider">Customer Query</span>
        </div>
        <motion.div
          className="flex justify-end"
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="bg-secondary rounded-2xl rounded-tr-sm px-3 py-2 max-w-[80%] border border-border">
            <p className="text-foreground text-[12px] font-[family-name:var(--font-outfit)]">What are your business hours?</p>
          </div>
        </motion.div>
        <div className="flex items-center gap-2 mt-1">
          <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
            <Image src="/images/marvonix-symbol.svg" alt="Marvonix AI" width={13} height={13} />
          </div>
          <span className="text-primary text-[10px] font-[family-name:var(--font-outfit)] font-medium">Marvonix AI</span>
        </div>

        {/* Typing indicator */}
        {showTyping && !showReply && (
          <motion.div
            className="flex gap-1 bg-background border border-border rounded-2xl rounded-tl-sm px-3 py-2.5 w-16 shadow-xs"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {[0, 0.2, 0.4].map((d, i) => (
              <motion.div key={i} className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"
                animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, delay: d, repeat: Infinity }} />
            ))}
          </motion.div>
        )}

        {showReply && (
          <motion.div className="flex" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
            <div className="bg-background border border-border rounded-2xl rounded-tl-sm px-3 py-2 max-w-[90%] shadow-xs">
              <p className="text-foreground text-[12px] font-[family-name:var(--font-outfit)] leading-[1.5]">
                We&apos;re here 24/7! How can I help you today?
              </p>
            </div>
          </motion.div>
        )}

        <motion.div
          className="flex justify-start"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 2 }}
        >
          <span className="bg-primary/10 text-primary text-[9px] px-2.5 py-0.5 rounded-full font-[family-name:var(--font-outfit)]">
            Automated Response · &lt;1s
          </span>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Card 4: Workflow Automation ──────────────────────────────────────────────

const KANBAN_TASKS = [
  { id: "t1", label: "Sync inventory" },
  { id: "t2", label: "Send report" },
  { id: "t3", label: "Onboard client" },
  { id: "t4", label: "Route lead" },
];

type KanbanCol = "todo" | "progress" | "done";

function WorkflowIllustration() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [cols, setCols] = useState<Record<string, KanbanCol>>({
    t1: "todo", t2: "todo", t3: "todo", t4: "todo",
  });
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let cancelled = false;

    async function runCycle() {
      const delay = (ms: number) => new Promise<void>((r) => { const t = setTimeout(r, ms); if (cancelled) clearTimeout(t); });

      // reset
      setCols({ t1: "todo", t2: "todo", t3: "todo", t4: "todo" });
      await delay(1200);

      for (const id of ["t1", "t2", "t3", "t4"]) {
        if (cancelled) return;
        setCols((prev) => ({ ...prev, [id]: "progress" }));
        await delay(1800);
        if (cancelled) return;
        setCols((prev) => ({ ...prev, [id]: "done" }));
        await delay(900);
      }

      await delay(2000);
      if (!cancelled) setCycleKey((k) => k + 1);
    }

    runCycle();
    return () => { cancelled = true; };
  }, [inView, cycleKey]);

  const todo     = KANBAN_TASKS.filter((t) => cols[t.id] === "todo");
  const progress = KANBAN_TASKS.filter((t) => cols[t.id] === "progress");
  const done     = KANBAN_TASKS.filter((t) => cols[t.id] === "done");

  const Column = ({ title, tasks, accent }: { title: string; tasks: typeof KANBAN_TASKS; accent?: boolean }) => (
    <div className="flex-1 flex flex-col gap-1.5 min-w-0">
      <div className="flex items-center gap-1.5 mb-1">
        {accent && (
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
        )}
        <span className={`text-[9px] font-semibold tracking-widest uppercase font-[family-name:var(--font-outfit)] ${accent ? "text-primary" : "text-muted-foreground/50"}`}>
          {title}
        </span>
      </div>
      <div className="flex flex-col gap-1.5 min-h-[88px]">
        <AnimatePresence>
          {tasks.map((t) => (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 6 }}
              animate={{
                opacity: 1, scale: 1, y: 0,
                boxShadow: accent ? ["0 0 0px oklch(0.6171 0.1375 39.0427 / 0)", "0 0 10px oklch(0.6171 0.1375 39.0427 / 0.35)", "0 0 0px oklch(0.6171 0.1375 39.0427 / 0)"] : "none",
              }}
              exit={{ opacity: 0, scale: 0.88, y: -4 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], boxShadow: { duration: 2.2, repeat: Infinity } }}
              className={`rounded-xl px-2.5 py-2 border text-[10px] font-[family-name:var(--font-outfit)] leading-tight ${
                accent
                  ? "bg-primary/10 border-primary/30 text-primary font-medium"
                  : title === "Done"
                  ? "bg-secondary border-border text-muted-foreground/60 line-through"
                  : "bg-background border-border text-foreground/70"
              }`}
            >
              {t.label}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );

  return (
    <div ref={ref} className="relative w-full h-full flex flex-col justify-center px-5 py-5 overflow-hidden gap-3">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 60%, oklch(0.6171 0.1375 39.0427 / 0.07) 0%, transparent 65%)" }} />

      {/* Column headers row */}
      <div className="relative z-10 flex gap-2 items-stretch">
        <Column title="To Do"       tasks={todo}     />
        <div className="w-px bg-border self-stretch mx-0.5" />
        <Column title="In Progress" tasks={progress} accent />
        <div className="w-px bg-border self-stretch mx-0.5" />
        <Column title="Done"        tasks={done}     />
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center gap-1.5">
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-primary"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
        <span className="text-muted-foreground/50 text-[10px] font-[family-name:var(--font-outfit)] tracking-widest uppercase">
          {done.length} of {KANBAN_TASKS.length} tasks done
        </span>
      </div>
    </div>
  );
}

// ─── Card 5: Custom AI Integrations ──────────────────────────────────────────

function AnimatedConnectorLine({ delay, reverse = false }: { delay: number; reverse?: boolean }) {
  return (
    <div className="relative flex-1 h-px overflow-hidden">
      <div className="absolute inset-0 bg-border/50" />
      <motion.div
        className="absolute inset-y-0 w-10 bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ left: reverse ? "100%" : "-20%" }}
        animate={{ left: reverse ? ["-20%", "100%"] : ["100%", "-20%"] }}
        transition={{ duration: 1.8, delay, repeat: Infinity, ease: "linear", repeatDelay: 0.4 }}
      />
    </div>
  );
}

function IntegrationsIllustration() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

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
    <div ref={ref} className="relative w-full h-full flex flex-col items-center justify-center px-8 py-5 gap-2 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, oklch(0.6171 0.1375 39.0427 / 0.08) 0%, transparent 65%)" }} />

      {/* Three connection rows */}
      <div className="relative z-10 w-full max-w-[480px] flex flex-col gap-3">
        {leftIcons.map((icon, i) => (
          <motion.div
            key={icon.alt}
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: i * 0.12 + 0.2 }}
          >
            {/* Left icon */}
            <motion.div
              className="tool-icon-wrap w-10 h-10 rounded-xl bg-background border border-border shadow-sm overflow-hidden flex-shrink-0"
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.12 + 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image src={icon.src} alt={icon.alt} width={40} height={40} className="object-cover w-full h-full" />
            </motion.div>

            {/* Label */}
            <span className="text-muted-foreground text-[10px] font-[family-name:var(--font-outfit)] w-12 flex-shrink-0">{icon.alt}</span>

            {/* Animated line in */}
            <AnimatedConnectorLine delay={i * 0.25} />

            {/* Center hub — only on middle row */}
            {i === 1 ? (
              <motion.div
                className="relative w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/40 flex items-center justify-center flex-shrink-0"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full border border-primary/25"
                  animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border border-primary/15"
                  animate={{ scale: [1, 2.1], opacity: [0.3, 0] }}
                  transition={{ duration: 2, delay: 0.7, repeat: Infinity, ease: "easeOut" }}
                />
                <Image src="/images/marvonix-symbol.svg" alt="Marvonix" width={22} height={22} />
              </motion.div>
            ) : (
              <div className="w-2 h-2 rounded-full bg-primary/40 flex-shrink-0" />
            )}

            {/* Animated line out */}
            <AnimatedConnectorLine delay={i * 0.25 + 0.3} reverse />

            {/* Right label */}
            <span className="text-muted-foreground text-[10px] font-[family-name:var(--font-outfit)] w-12 flex-shrink-0 text-right">{rightIcons[i].alt}</span>

            {/* Right icon */}
            <motion.div
              className="tool-icon-wrap w-10 h-10 rounded-xl bg-background border border-border shadow-sm overflow-hidden flex-shrink-0"
              initial={{ opacity: 0, x: 16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.12 + 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image src={rightIcons[i].src} alt={rightIcons[i].alt} width={40} height={40} className="object-cover w-full h-full" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Status */}
      <motion.div
        className="relative z-10 flex items-center gap-2 mt-1"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
      >
        <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.4, repeat: Infinity }} />
        <span className="text-muted-foreground/60 text-[10px] font-[family-name:var(--font-outfit)] tracking-widest uppercase">6 integrations active</span>
      </motion.div>
    </div>
  );
}

// ─── Service card shell ───────────────────────────────────────────────────────

interface ServiceCardProps {
  illustration: React.ReactNode;
  title: string;
  description: string;
  tag?: string;
}

function ServiceCard({ illustration, title, description, tag }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-card border border-border rounded-[20px] overflow-hidden flex flex-col shadow-sm cursor-default h-full"
      whileHover={{ y: -5, boxShadow: "0 20px 40px oklch(0.6171 0.1375 39.0427 / 0.10)" }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="h-[260px] relative overflow-hidden bg-secondary">
        {illustration}
      </div>
      <div className="p-6 flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between gap-2 mb-0.5">
          <h3 className="text-foreground text-[19px] font-semibold font-[family-name:var(--font-outfit)] leading-tight">{title}</h3>
          {tag && (
            <span className="text-primary text-[10px] border border-primary/25 bg-primary/8 rounded-full px-2.5 py-0.5 font-[family-name:var(--font-outfit)] whitespace-nowrap flex-shrink-0">
              {tag}
            </span>
          )}
        </div>
        <p className="text-muted-foreground text-[14px] leading-[22px] font-[family-name:var(--font-outfit)]">{description}</p>
      </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function ServicesSection() {
  const topRow = [
    {
      illustration: <LeadGenIllustration />,
      title: "Lead Generation & Outreach",
      tag: "Growth",
      description: "We automate prospect sourcing, personalised email sequences, and follow-ups. Your pipeline keeps filling while your team focuses on closing.",
    },
    {
      illustration: <DataInsightsIllustration />,
      title: "Data Processing & Insights",
      tag: "Analytics",
      description: "Turn raw data into clear reports automatically. Spot trends, track KPIs, and make faster decisions without touching a spreadsheet.",
    },
    {
      illustration: <ChatbotIllustration />,
      title: "AI-Powered Chatbots",
      tag: "Support",
      description: "Deploy intelligent assistants that handle customer queries around the clock, qualify leads, and pass the right ones to your team.",
    },
  ];

  const bottomRow = [
    {
      illustration: <WorkflowIllustration />,
      title: "Workflow Automation",
      tag: "Efficiency",
      description: "Map your repetitive tasks once: approvals, notifications, data syncs. After that, AI runs them in the background without you lifting a finger.",
    },
    {
      illustration: <IntegrationsIllustration />,
      title: "Custom AI Integrations",
      tag: "Connectivity",
      description: "Connect your existing tools (CRM, Slack, Notion, Airtable) into one system that actually talks to itself. No technical setup needed on your end.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Heading */}
        <motion.div className="mb-14" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <p className="marvonix-label mb-4">SERVICES</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className={cn("font-[family-name:var(--font-outfit)]", "text-[48px] md:text-[64px] font-semibold tracking-[-2px] text-foreground leading-[1.1]")}>
              AI Automation Services for Growing Businesses
            </h2>
            <p className="text-muted-foreground text-[15px] max-w-[340px] leading-6 font-[family-name:var(--font-outfit)] md:text-right pb-1">
              Marvonix builds custom automations on Make, Zapier, n8n, and OpenAI. Five services, each saving you hours you didn&apos;t know you were losing.
            </p>
          </div>
        </motion.div>

        {/* Top row — 3 cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {topRow.map((card) => (
            <motion.div key={card.title} variants={staggerItem} className="flex">
              <ServiceCard {...card} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom row — 2 cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {bottomRow.map((card) => (
            <motion.div key={card.title} variants={staggerItem} className="flex">
              <ServiceCard {...card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
