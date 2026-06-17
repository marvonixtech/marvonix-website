"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="bg-background pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <motion.h1
          className="text-[48px] sm:text-[64px] md:text-[96px] font-semibold tracking-[-2px] md:tracking-[-3px] text-foreground leading-[1.05] font-[family-name:var(--font-outfit)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          About Marvonix
        </motion.h1>

        <motion.p
          className="text-[18px] md:text-[20px] text-muted-foreground max-w-[620px] leading-7 mt-6 font-[family-name:var(--font-outfit)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
        >
          Marvonix was founded in 2025 by Manish Vaghamshi and Meet Domadiya, with offices in the United Kingdom and India. We help businesses get more done without needing to hire more people or buy more tools.
        </motion.p>

        <motion.div
          className="mt-10 p-6 md:p-8 bg-muted rounded-[20px] border border-border max-w-[720px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <h2 className="text-[15px] font-semibold tracking-[0.06em] uppercase text-muted-foreground font-[family-name:var(--font-outfit)] mb-3">
            What Is Marvonix?
          </h2>
          <p className="text-[16px] text-foreground leading-[1.75] font-[family-name:var(--font-outfit)]">
            Marvonix is an AI automation agency headquartered in the United Kingdom with operations in India. The company builds custom AI workflows and automation systems for SMEs and growing businesses, specialising in lead generation automation, AI chatbots, data processing, and CRM integration. Using platforms like Make, Zapier, n8n, and OpenAI, Marvonix connects a business&rsquo;s existing tools into a single automated system that runs 24/7 without manual input.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
