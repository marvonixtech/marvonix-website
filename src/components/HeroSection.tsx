"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { useModal } from "@/context/ModalContext";
import { useEffect, useState } from "react";

const reviews = [
  { quote: "Data dashboards now run themselves. We just watch.", name: "Vivek S.", role: "Operations Manager" },
  { quote: "Our support bot handles hundreds of queries a day. We haven't missed one.", name: "Vikas K.", role: "Founder" },
  { quote: "Reports that used to take hours now generate themselves on schedule.", name: "James R.", role: "Finance Manager" },
  { quote: "Patient intake went from a bottleneck to completely hands-off.", name: "Priya S.", role: "Operations Head" },
  { quote: "No lead goes cold anymore. Every enquiry gets followed up automatically.", name: "Tom W.", role: "Business Development Manager" },
];

const stats = [
  { value: "24/7", label: "Always on" },
  { value: "75%", label: "Hours saved" },
  { value: "0", label: "Leads missed" },
];

export function HeroSection() {
  const { openModal } = useModal();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = reviews[index];

  return (
    <section className="relative overflow-x-clip bg-background min-h-[calc(100vh-72px)] flex flex-col md:block">

      {/* Desktop warm orb — top-right */}
      <motion.div
        className="absolute top-[-80px] right-[-120px] w-[520px] h-[520px] pointer-events-none select-none z-0 hidden md:block rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.8816 0.0276 93.1280) 0%, oklch(0.9341 0.0153 90.2390) 50%, transparent 75%)",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        aria-hidden
      />
      <motion.div
        className="absolute top-[20px] right-[60px] w-[280px] h-[280px] pointer-events-none select-none z-0 hidden md:block rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.6171_0.1375_39.0427/0.15) 0%, transparent 70%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        aria-hidden
      />

      {/* Mobile warm orb — smaller, top-right */}
      <motion.div
        className="absolute top-[-50px] right-[-70px] w-[260px] h-[260px] pointer-events-none select-none z-0 block md:hidden rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.8816 0.0276 93.1280) 0%, oklch(0.9341 0.0153 90.2390) 50%, transparent 75%)",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        aria-hidden
      />
      <motion.div
        className="absolute top-[10px] right-[10px] w-[140px] h-[140px] pointer-events-none select-none z-0 block md:hidden rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.6171_0.1375_39.0427/0.12) 0%, transparent 70%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        aria-hidden
      />
      {/* Mobile bottom-left accent orb */}
      <motion.div
        className="absolute bottom-[60px] left-[-60px] w-[200px] h-[200px] pointer-events-none select-none z-0 block md:hidden rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.8816 0.0276 93.1280 / 0.5) 0%, transparent 70%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.7 }}
        aria-hidden
      />

      {/* Main hero content — flex-1 centers it vertically on mobile */}
      <motion.div
        className="max-w-[1200px] mx-auto px-5 md:px-10 flex-1 flex flex-col justify-center md:flex-none md:block md:pt-28 md:pb-16 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Rotating testimonial quote */}
        <motion.div className="mb-8 md:mb-14" variants={staggerItem}>
          {/* Fixed height prevents layout shift when quotes vary in line count */}
          <div className="relative h-[88px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <p className="italic font-[family-name:var(--font-outfit)] text-[15px] text-foreground/70 mb-3 max-w-[480px]">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                    <span className="font-[family-name:var(--font-outfit)] text-xs font-semibold text-foreground/60">
                      {current.name.charAt(0)}
                    </span>
                  </div>
                  <span className="font-[family-name:var(--font-outfit)] text-sm font-medium text-foreground">
                    {current.name}
                  </span>
                  <span className="bg-secondary rounded-full px-2.5 py-1 text-xs text-secondary-foreground font-[family-name:var(--font-outfit)] border border-border">
                    {current.role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress dots — mobile only */}
          <div className="flex items-center gap-1.5 mt-4 md:hidden">
            {reviews.map((_, i) => (
              <motion.div
                key={i}
                className="h-[3px] rounded-full bg-primary"
                animate={{ width: i === index ? 18 : 5, opacity: i === index ? 1 : 0.25 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className={cn(
            "font-[family-name:var(--font-outfit)] font-semibold text-foreground leading-[1.05]",
            "max-w-[720px]",
            "text-[38px] sm:text-[52px] md:text-[80px] lg:text-[96px]",
            "tracking-[-1.5px] sm:tracking-[-2px] md:tracking-[-4px]"
          )}
          variants={staggerItem}
        >
          Marvonix. Build, Automate, Scale With AI
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mt-5 md:mt-6 font-[family-name:var(--font-outfit)] text-[15px] md:text-[18px] text-muted-foreground max-w-[520px] leading-[1.7] md:leading-7"
          variants={staggerItem}
        >
          We build AI systems that handle the work your team shouldn&apos;t have
          to do, so you can focus on growing the business.
        </motion.p>

        {/* Tech stack — named for SEO entity association */}
        <motion.p
          className="mt-3 font-[family-name:var(--font-outfit)] text-[13px] text-muted-foreground/70 max-w-[480px] leading-[1.6]"
          variants={staggerItem}
        >
          Built on Make, Zapier, n8n, and custom APIs. Connects your CRM, email, and ops stack into one automated system.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 mt-7 md:mt-8"
          variants={staggerItem}
        >
          <motion.button
            onClick={openModal}
            className="bg-primary text-primary-foreground rounded-[14px] px-6 py-4 text-base font-semibold font-[family-name:var(--font-outfit)] text-center cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
          >
            Book a Free Discovery Call
          </motion.button>
          <motion.a
            href="#services"
            className="bg-secondary text-secondary-foreground border border-border rounded-[14px] px-6 py-4 text-base font-[family-name:var(--font-outfit)] text-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
          >
            Our Services
          </motion.a>
        </motion.div>

        {/* Stats strip — mobile only, fills the empty space below CTAs */}
        <motion.div
          className="mt-8 md:hidden grid grid-cols-3 divide-x divide-border border border-border rounded-[16px] overflow-hidden bg-secondary/60"
          variants={staggerItem}
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="py-4 text-center">
              <p className="font-[family-name:var(--font-outfit)] text-[18px] font-semibold text-foreground">
                {value}
              </p>
              <p className="font-[family-name:var(--font-outfit)] text-[11px] text-muted-foreground mt-0.5">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator — mobile only */}
      <motion.div
        className="md:hidden pb-6 flex justify-center z-10 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center gap-1.5"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-px h-7 bg-gradient-to-b from-transparent to-border/70" />
          <div className="w-1.5 h-1.5 rounded-full bg-border" />
        </motion.div>
      </motion.div>
    </section>
  );
}
