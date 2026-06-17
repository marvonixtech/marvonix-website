"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  SlidersHorizontalIcon,
  FlaskConicalIcon,
  HourglassIcon,
} from "lucide-react";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewport,
} from "@/lib/animations";

const ANTI_BELIEFS = [
  {
    Icon: SlidersHorizontalIcon,
    title: "More tools means more progress",
    body: "In most cases it means more complexity. Fewer, well-connected systems tend to outperform a stack full of half-used software.",
  },
  {
    Icon: FlaskConicalIcon,
    title: "Every problem needs a new solution",
    body: "Most of the time, the tools you already have are capable of more. They just need to be set up properly and connected to each other.",
  },
  {
    Icon: HourglassIcon,
    title: "Being busy means being productive",
    body: "Busy is easy. Productive is harder. We focus on removing unnecessary work rather than adding more ways to track it.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Marvonix just made things... simpler. Less chaos, more focus. Our ops run smoother than ever.",
    author: "Sam K, COO",
  },
  {
    quote:
      "We thought automation would take months. They got us live in days — and it actually works.",
    author: "Dheeraj M, Founder",
  },
  {
    quote:
      "Our team finally has time to focus on strategy instead of fighting fires. Game-changer.",
    author: "Priya T, VP Operations",
  },
  {
    quote:
      "The ROI was visible in the first week. Marvonix delivered beyond expectations.",
    author: "Carlos V, CEO",
  },
];

export function AboutAntiBeliefs() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="marvonix-label">ANTI-BELIEFS</p>
          <h2 className="text-[52px] md:text-[64px] font-semibold tracking-[-2px] text-foreground mt-3 font-[family-name:var(--font-outfit)] leading-[1.1]">
            What We Don&apos;t Believe In
          </h2>
        </motion.div>

        {/* Anti-belief cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {ANTI_BELIEFS.map(({ Icon, title, body }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-card border border-border rounded-[20px] p-7 shadow-sm flex flex-col gap-6"
            >
              <div className="w-14 h-14 rounded-[14px] bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-[20px] font-semibold text-foreground font-[family-name:var(--font-outfit)]">
                  {title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-[1.65] mt-2 font-[family-name:var(--font-outfit)]">
                  {body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial carousel */}
        <motion.div
          className="relative mt-12 rounded-[24px] overflow-hidden min-h-[380px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Background photo */}
          <Image
            src="/images/about/about-testimonial-bg.jpg"
            alt="Testimonial background"
            fill
            className="object-cover object-top"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-foreground/55" />

          {/* Quote content */}
          <div className="relative z-10 p-10 md:p-14 flex flex-col justify-between min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-[26px] md:text-[34px] font-semibold text-white leading-tight tracking-[-0.5px] max-w-[800px] font-[family-name:var(--font-outfit)]">
                  &ldquo;{TESTIMONIALS[active].quote}&rdquo;
                </p>
                <p className="text-[16px] text-white/70 mt-5 font-[family-name:var(--font-outfit)]">
                  {TESTIMONIALS[active].author}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex gap-2 mt-8">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    i === active ? "bg-white w-6" : "bg-white/40 w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
