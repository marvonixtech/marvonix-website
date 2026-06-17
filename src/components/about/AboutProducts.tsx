"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewport } from "@/lib/animations";
import { ArrowUpRightIcon } from "lucide-react";

const PRODUCTS = [
  {
    name: "MailTantra",
    tagline: "AI-Powered Cold Email at Scale",
    description:
      "MailTantra is Marvonix's flagship email automation product. It handles cold outreach end to end: personalised sequences, follow-ups, inbox rotation, and reply detection. Your sales pipeline fills itself without manual effort.",
    href: "https://mailtantra.marvonix.com",
    label: "mailtantra.marvonix.com",
    badge: "Beta Product",
    color: "from-violet-500/10 to-indigo-500/10",
    borderColor: "border-violet-500/20",
    badgeColor: "bg-violet-500/10 text-violet-500 border-violet-500/20",
  },
];

export function AboutProducts() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-12"
        >
          <p className="marvonix-label mb-4">OUR PRODUCTS</p>
          <h2 className="font-[family-name:var(--font-outfit)] text-[48px] md:text-[64px] font-semibold tracking-[-2px] text-foreground leading-[1.1]">
            What We&rsquo;ve Built
          </h2>
          <p className="text-muted-foreground text-[16px] max-w-[480px] leading-[1.7] mt-4 font-[family-name:var(--font-outfit)]">
            Beyond client projects, Marvonix builds its own products. Tools we use ourselves and make available to others.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {PRODUCTS.map((product) => (
            <motion.a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`group block bg-gradient-to-br ${product.color} border ${product.borderColor} rounded-[20px] p-6 md:p-8`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className={`inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full border ${product.badgeColor} mb-3 font-[family-name:var(--font-outfit)] tracking-[0.04em]`}>
                    {product.badge}
                  </span>
                  <h3 className="font-[family-name:var(--font-outfit)] text-[28px] font-semibold text-foreground leading-[1.1]">
                    {product.name}
                  </h3>
                  <p className="font-[family-name:var(--font-outfit)] text-[14px] font-medium text-muted-foreground mt-1">
                    {product.tagline}
                  </p>
                </div>
                <ArrowUpRightIcon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 mt-1" />
              </div>
              <p className="font-[family-name:var(--font-outfit)] text-[14px] text-muted-foreground leading-[1.75]">
                {product.description}
              </p>
              <p className="font-[family-name:var(--font-outfit)] text-[13px] text-primary font-medium mt-4">
                {product.label} →
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
