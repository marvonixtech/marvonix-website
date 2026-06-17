"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MailIcon, PhoneIcon, MapPinIcon } from "@/components/icons";
import { fadeUp, slideInLeft, slideInRight, viewport } from "@/lib/animations";
import { siteConfig } from "@/lib/siteConfig";

interface FormState {
  fullName: string;
  companyName: string;
  email: string;
  message: string;
}

const INITIAL: FormState = { fullName: "", companyName: "", email: "", message: "" };

export function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const linkItems = [
    { label: "Mail", value: siteConfig.contact.email, href: siteConfig.contact.emailHref, Icon: MailIcon, external: false },
    { label: "WhatsApp", value: siteConfig.contact.phone, href: siteConfig.contact.phoneHref, Icon: PhoneIcon, external: true },
  ];

  const locationItems = siteConfig.locations.map((loc) => ({ label: loc.label, value: loc.display }));

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "contact", ...form }),
      });
      if (!res.ok) throw new Error("submission failed");
      setStatus("success");
      setForm(INITIAL);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.6171 0.1375 39.0427 / 0.12) 0%, transparent 70%)" }}
        aria-hidden
      />
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 relative z-10">
        <motion.div className="mb-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <p className="marvonix-label">GET IN TOUCH</p>
          <h2 className="marvonix-h2 mt-3">Contact</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left: contact info */}
          <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={viewport}>
            <ul className="flex flex-col gap-4">
              {linkItems.map(({ label, value, href, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 bg-card rounded-[20px] p-5 no-underline hover:bg-secondary transition-colors border border-border shadow-xs"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[12px] text-muted-foreground mb-0.5" style={{ fontFamily: "Outfit, sans-serif" }}>
                        {label}
                      </p>
                      <p className="text-[15px] text-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>
                        {value}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
              {locationItems.map(({ label, value }) => (
                <li key={label}>
                  <div className="flex items-center gap-4 bg-card rounded-[20px] p-5 border border-border shadow-xs">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                      <MapPinIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[12px] text-muted-foreground mb-0.5" style={{ fontFamily: "Outfit, sans-serif" }}>
                        {label}
                      </p>
                      <p className="text-[15px] text-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>
                        {value}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="bg-card rounded-[20px] p-8 border border-border shadow-sm"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {status === "success" ? (
              <div className="py-12 flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-2">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-[22px] font-semibold text-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>
                  Message sent!
                </h3>
                <p className="text-[14px] text-muted-foreground max-w-[300px]" style={{ fontFamily: "Outfit, sans-serif" }}>
                  We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 bg-primary text-primary-foreground rounded-[14px] px-8 py-3.5 text-[15px] font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {([
                  { id: "fullName", label: "Full Name", type: "text", placeholder: "John Doe" },
                  { id: "companyName", label: "Company Name", type: "text", placeholder: "AI Innovations Inc." },
                  { id: "email", label: "Email", type: "email", placeholder: "john.doe@aiagency.com" },
                ] as const).map(({ id, label, type, placeholder }) => (
                  <div key={id} className="flex flex-col gap-2 mb-5">
                    <label htmlFor={id} className="text-[14px] text-muted-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      value={form[id]}
                      onChange={set(id)}
                      required={id !== "companyName"}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground text-[15px] placeholder:text-muted-foreground/50 outline-none focus:border-primary transition-colors"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-2 mb-5">
                  <label htmlFor="message" className="text-[14px] text-muted-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Hello! I'd like to learn more about your AI automation services."
                    value={form.message}
                    onChange={set("message")}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground text-[15px] placeholder:text-muted-foreground/50 outline-none focus:border-primary transition-colors resize-none"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  />
                </div>

                {status === "error" && (
                  <p className="text-[13px] text-red-500 mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-2 w-full bg-primary text-primary-foreground rounded-[14px] py-4 text-[15px] font-semibold hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-60"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {status === "loading" ? "Sending…" : "Submit"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
