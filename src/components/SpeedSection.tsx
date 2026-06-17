"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewport } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We spend 30 to 60 minutes understanding your workflows, tools, and pain points. No generic slide deck. We map your actual business.",
  },
  {
    number: "02",
    title: "Build & Test",
    description: "We build the automation, test it against real scenarios, and refine until it runs without you watching it.",
  },
  {
    number: "03",
    title: "Handover & Go Live",
    description: "Full walkthrough with your team, documentation, and ongoing support. You are up and running, not waiting months for results.",
  },
];

export function SpeedSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-14"
        >
          <p className="marvonix-label mb-4">TIMELINE</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-[family-name:var(--font-outfit)] text-[48px] md:text-[64px] font-semibold tracking-[-2px] text-foreground leading-[1.1]">
              Up and Running in 1–3 Weeks, Not Months
            </h2>
            <p className="text-muted-foreground text-[15px] max-w-[340px] leading-6 font-[family-name:var(--font-outfit)] md:text-right pb-1">
              Most enterprise AI projects take quarters. Ours take weeks, because we build for your business, not a hypothetical one.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className="bg-muted rounded-[20px] border border-border p-6 md:p-7"
            >
              <span className="font-[family-name:var(--font-outfit)] text-[13px] font-semibold text-primary tracking-[0.06em]">
                {step.number}
              </span>
              <h3 className="font-[family-name:var(--font-outfit)] text-[20px] font-semibold text-foreground mt-3 mb-2">
                {step.title}
              </h3>
              <p className="font-[family-name:var(--font-outfit)] text-[14px] text-muted-foreground leading-[1.7]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
