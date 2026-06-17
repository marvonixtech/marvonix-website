"use client";
import { motion } from "framer-motion";
import { TrendingUpIcon, RefreshCwIcon, GlobeIcon } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem, viewport } from "@/lib/animations";

const VALUES = [
  {
    Icon: TrendingUpIcon,
    title: "Simple beats complex",
    body: "We cut out what is not needed. Every decision we make is aimed at making things easier to understand and easier to maintain.",
  },
  {
    Icon: RefreshCwIcon,
    title: "Human advice, not just AI",
    body: "Technology is only part of the answer. We take the time to understand your business before recommending anything.",
  },
  {
    Icon: GlobeIcon,
    title: "Built for real outcomes",
    body: "We care about what actually changes for your business, not how impressive the solution looks on paper.",
  },
];

export function AboutValues() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <p className="marvonix-label">OUR VALUES</p>
          <h2 className="text-[52px] md:text-[64px] font-semibold tracking-[-2px] text-foreground mt-3 font-[family-name:var(--font-outfit)] leading-[1.1]">
            What We Believe
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {VALUES.map(({ Icon, title, body }) => (
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
      </div>
    </section>
  );
}
