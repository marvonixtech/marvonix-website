"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewport } from "@/lib/animations";

interface TestimonialData {
  name: string;
  role: string;
  quote: string;
  variant: "warm" | "accent" | "deep" | "light" | "light-wide";
  colSpan?: number;
}

const testimonials: TestimonialData[] = [
  { name: "Vivek S.", role: "Operations Manager at Slein", quote: "Before Marvonix, our inventory was a constant mess. Manual checks, missed restocks, constant firefighting. Now everything just runs. Stock levels update in real time, restock alerts fire automatically, and my team actually has time to focus on growth.", variant: "warm" },
  { name: "Vikas K.", role: "Founder of Extolmart", quote: '"The AI chat and call bot handles our routine support around the clock. Customers get instant answers on orders, returns, and products, no waiting involved. It\'s like having a full support team that never sleeps."', variant: "accent" },
  { name: "James R.*", role: "Finance Manager", quote: '"Marvonix replaced our entire manual reporting process. Reports now generate themselves, formatted perfectly, delivered on schedule. We reclaimed hours every week that we were just wasting on data entry."', variant: "deep" },
  { name: "Priya S.*", role: "Operations Head", quote: '"Patient intake used to be a bottleneck. Marvonix automated the forms, reminders, and follow-ups. Our admin load dropped dramatically and patients actually respond faster now."', variant: "light" },
  { name: "Tom W.*", role: "Business Development Manager", quote: '"No lead goes cold anymore. Every enquiry from every channel gets captured, qualified, and followed up automatically. We used to lose deals just from slow response times. That problem doesn\'t exist anymore."', variant: "light-wide", colSpan: 2 },
];

function QuoteText({ quote, dark = false }: { quote: string; dark?: boolean }) {
  return (
    <p
      className="text-[17px] md:text-[20px] lg:text-[22px]"
      style={{ fontFamily: "Outfit, sans-serif", fontWeight: 400, color: dark ? "#fff" : "oklch(0.1908 0.0020 106.5859)", lineHeight: 1.4, margin: 0 }}
    >
      {quote}
    </p>
  );
}

function AuthorBlock({ name, role, dark = false }: { name: string; role: string; dark?: boolean }) {
  return (
    <div>
      <p className="text-[15px] font-semibold m-0" style={{ color: dark ? "rgba(255,255,255,0.9)" : "oklch(0.1908 0.0020 106.5859)" }}>
        {name}
      </p>
      <p className="text-[13px] mt-0.5 m-0" style={{ color: dark ? "rgba(255,255,255,0.55)" : "oklch(0.5341 0.0078 97.4503)" }}>
        {role}
      </p>
    </div>
  );
}

function WarmCard({ data }: { data: TestimonialData }) {
  return (
    <div className="rounded-[20px] overflow-hidden flex flex-col justify-between min-h-[380px] bg-card border border-border shadow-sm">
      <div className="p-7"><AuthorBlock name={data.name} role={data.role} /></div>
      <div className="p-7 bg-secondary border-t border-border"><QuoteText quote={data.quote} /></div>
    </div>
  );
}

function AccentCard({ data }: { data: TestimonialData }) {
  return (
    <div className="rounded-[20px] overflow-hidden flex flex-col justify-between min-h-[260px] p-7" style={{ backgroundColor: "oklch(0.6171 0.1375 39.0427)" }}>
      <QuoteText quote={data.quote} dark />
      <div className="mt-6"><AuthorBlock name={data.name} role={data.role} dark /></div>
    </div>
  );
}

function DeepCard({ data }: { data: TestimonialData }) {
  return (
    <div className="rounded-[20px] overflow-hidden flex flex-col justify-between min-h-[380px]" style={{ background: "linear-gradient(135deg, oklch(0.3438 0.0269 95.7226) 0%, oklch(0.1908 0.0020 106.5859) 100%)" }}>
      <div className="p-7"><AuthorBlock name={data.name} role={data.role} dark /></div>
      <div className="p-7" style={{ background: "rgba(0,0,0,0.2)" }}><QuoteText quote={data.quote} dark /></div>
    </div>
  );
}

function LightCard({ data }: { data: TestimonialData }) {
  return (
    <div className="rounded-[20px] overflow-hidden flex flex-col justify-between min-h-[260px] p-7 bg-background border border-border shadow-sm">
      <QuoteText quote={data.quote} />
      <div className="mt-6"><AuthorBlock name={data.name} role={data.role} /></div>
    </div>
  );
}

function TestimonialCard({ data }: { data: TestimonialData }) {
  switch (data.variant) {
    case "warm": return <WarmCard data={data} />;
    case "accent": return <AccentCard data={data} />;
    case "deep": return <DeepCard data={data} />;
    case "light": return <LightCard data={data} />;
    case "light-wide": return <LightCard data={data} />;
    default: return null;
  }
}

export function TestimonialsSection() {
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <motion.div className="mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <p className="marvonix-label">TESTIMONIALS</p>
          <h2 className="font-[family-name:var(--font-outfit)] text-[48px] md:text-[64px] font-semibold tracking-[-2px] text-foreground leading-[1.1] mt-3">
            What Our Clients Say
          </h2>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          {firstRow.map((t) => (
            <motion.div key={t.name} variants={staggerItem}>
              <TestimonialCard data={t} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-5" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.div className="md:col-span-1" variants={staggerItem}>
            <TestimonialCard data={secondRow[0]} />
          </motion.div>
          <motion.div className="md:col-span-2" variants={staggerItem}>
            <TestimonialCard data={secondRow[1]} />
          </motion.div>
        </motion.div>

        <motion.p
          className="mt-8 text-[12px] leading-[18px]"
          style={{ color: "oklch(0.5341 0.0078 97.4503)", fontFamily: "Outfit, sans-serif" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          * We respect our clients&apos; privacy. Some prefer not to disclose their company name publicly. These reviews are genuine, shared with company details withheld at the client&apos;s request.
        </motion.p>
      </div>
    </section>
  );
}
