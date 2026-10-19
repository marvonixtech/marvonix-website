"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { useModal } from "@/context/ModalContext";
import { FlowDiagram } from "@/components/FlowDiagram";
import { MagneticButton } from "@/components/MagneticButton";

const stats = [
  { value: "24/7", label: "Always on" },
  { value: "75%", label: "Hours saved" },
  { value: "0", label: "Leads missed" },
];

export function HeroSection() {
  const { openModal } = useModal();
  return (
    <section className="relative overflow-x-clip bg-background min-h-[calc(100vh-72px)] flex flex-col">
      {/* Blueprint grid, faded toward the diagram */}
      <div className="bp-grid absolute inset-0 z-0 pointer-events-none" aria-hidden />

      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-center max-w-[1200px] w-full mx-auto px-5 md:px-10 pt-10 md:pt-14 pb-8"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-6 items-center">
          <div>
            <motion.p className="bp-mono text-[12px] text-muted-foreground flex items-center gap-2.5 mb-6" variants={staggerItem}>
              <span className="bp-dot inline-block w-2 h-2 rounded-full bg-primary" aria-hidden />
              AI automation agency · UK + India
            </motion.p>

            <motion.h1
              className="font-[family-name:var(--font-outfit)] font-semibold text-foreground max-w-[760px] text-[40px]/[1.04] sm:text-[56px]/[1.04] md:text-[72px]/[1.02] lg:text-[80px]/[1.02] tracking-[-1.5px] sm:tracking-[-2px] md:tracking-[-3.5px]"
              variants={staggerItem}
            >
              Marvonix. Build, Automate, Scale With AI
            </motion.h1>

            <motion.p
              className="mt-5 md:mt-6 font-[family-name:var(--font-outfit)] text-[16px] md:text-[18px] text-muted-foreground max-w-[520px] leading-[1.65]"
              variants={staggerItem}
            >
              AI systems that handle the work your team shouldn&apos;t, so you can focus on growth.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-3 mt-7 md:mt-8" variants={staggerItem}>
              <MagneticButton
                onClick={openModal}
                className="bg-primary text-primary-foreground rounded-[14px] px-6 min-h-[52px] py-3.5 text-base font-semibold font-[family-name:var(--font-outfit)] text-center cursor-pointer"
              >
                Book a Free Discovery Call
              </MagneticButton>
              <motion.a
                href="#services"
                className="bg-secondary text-secondary-foreground border border-border rounded-[14px] px-6 min-h-[52px] py-3.5 text-base font-[family-name:var(--font-outfit)] text-center inline-flex items-center justify-center"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                Our Services
              </motion.a>
            </motion.div>
          </div>

          {/* Hero artwork: the actual product, an automation flow */}
          <motion.div variants={staggerItem} className="relative">
            <FlowDiagram className="w-full max-w-[520px] mx-auto lg:mx-0 lg:ml-auto h-auto" />
          </motion.div>
        </div>

        {/* Stat strip with corner brackets */}
        <motion.div className="mt-10 md:mt-14 grid grid-cols-3 gap-3 md:gap-6" variants={staggerItem}>
          {stats.map(({ value, label }) => (
            <div key={label} className="bp-corners border border-border/80 px-3 py-3 md:px-5 md:py-4">
              <p className="font-[family-name:var(--font-outfit)] text-[22px] md:text-[30px] font-semibold text-foreground tracking-[-0.5px]">
                {value}
              </p>
              <p className="bp-mono text-[10px] md:text-[11px] text-muted-foreground mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
