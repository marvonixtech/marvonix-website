"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XIcon } from "@/components/icons";

interface ProjectInquiryModalProps {
  open: boolean;
  onClose: () => void;
}

const SERVICE_OPTIONS = [
  "Business Process Automation",
  "AI Chatbot / Assistant",
  "Web Scraping & Data Extraction",
  "CRM / Lead Automation",
  "Custom Web Development",
  "E-commerce Automation",
  "API Integration",
  "Other",
];

interface FormState {
  fullName: string;
  companyName: string;
  email: string;
  service: string;
  budget: string;
  description: string;
}

const INITIAL: FormState = {
  fullName: "",
  companyName: "",
  email: "",
  service: "",
  budget: "",
  description: "",
};

export function ProjectInquiryModal({ open, onClose }: ProjectInquiryModalProps) {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setTimeout(() => { setStatus("idle"); setForm(INITIAL); }, 300);
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "project", ...form }),
      });
      if (!res.ok) throw new Error("submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 pointer-events-none"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div
              className="relative w-full max-w-[560px] bg-card border border-border rounded-[24px] shadow-2xl pointer-events-auto overflow-y-auto max-h-[90vh] no-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-border transition-colors z-10"
                aria-label="Close"
              >
                <XIcon className="w-4 h-4 text-foreground" />
              </button>

              <div className="p-5 pt-5 sm:p-8 sm:pt-7">
                {status === "success" ? (
                  <div className="py-12 flex flex-col items-center text-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-2">
                      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-[22px] font-semibold text-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>
                      We&apos;ve got your brief!
                    </h3>
                    <p className="text-[14px] text-muted-foreground max-w-[340px]" style={{ fontFamily: "Outfit, sans-serif" }}>
                      Thank you for reaching out. Our team will review your project and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-4 bg-primary text-primary-foreground rounded-[14px] px-8 py-3.5 text-[15px] font-semibold hover:opacity-90 transition-opacity"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-7">
                      <p className="marvonix-label mb-2">LET&apos;S BUILD TOGETHER</p>
                      <h2 className="text-[26px] font-semibold tracking-tight text-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>
                        Tell us about your project
                      </h2>
                      <p className="text-[14px] text-muted-foreground mt-2" style={{ fontFamily: "Outfit, sans-serif" }}>
                        Share what you want to automate or build, we&apos;ll get back to you within 24 hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      {/* Name + Company row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="pi-name" className="text-[13px] text-muted-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>
                            Full Name *
                          </label>
                          <input
                            id="pi-name"
                            type="text"
                            required
                            placeholder="Jane Smith"
                            value={form.fullName}
                            onChange={set("fullName")}
                            className="bg-background border border-border rounded-xl px-4 py-3 text-foreground text-[14px] placeholder:text-muted-foreground/50 outline-none focus:border-primary transition-colors"
                            style={{ fontFamily: "Outfit, sans-serif" }}
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="pi-company" className="text-[13px] text-muted-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>
                            Company Name
                          </label>
                          <input
                            id="pi-company"
                            type="text"
                            placeholder="Your Company Ltd."
                            value={form.companyName}
                            onChange={set("companyName")}
                            className="bg-background border border-border rounded-xl px-4 py-3 text-foreground text-[14px] placeholder:text-muted-foreground/50 outline-none focus:border-primary transition-colors"
                            style={{ fontFamily: "Outfit, sans-serif" }}
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="pi-email" className="text-[13px] text-muted-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>
                          Email Address *
                        </label>
                        <input
                          id="pi-email"
                          type="email"
                          required
                          placeholder="jane@company.com"
                          value={form.email}
                          onChange={set("email")}
                          className="bg-background border border-border rounded-xl px-4 py-3 text-foreground text-[14px] placeholder:text-muted-foreground/50 outline-none focus:border-primary transition-colors"
                          style={{ fontFamily: "Outfit, sans-serif" }}
                        />
                      </div>

                      {/* Service */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="pi-service" className="text-[13px] text-muted-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>
                          What do you need? *
                        </label>
                        <select
                          id="pi-service"
                          required
                          value={form.service}
                          onChange={set("service")}
                          className="bg-background border border-border rounded-xl px-4 py-3 text-foreground text-[14px] outline-none focus:border-primary transition-colors appearance-none"
                          style={{ fontFamily: "Outfit, sans-serif" }}
                        >
                          <option value="" disabled>Select a service...</option>
                          {SERVICE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      {/* Budget */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="pi-budget" className="text-[13px] text-muted-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>
                          Estimated Budget
                        </label>
                        <select
                          id="pi-budget"
                          value={form.budget}
                          onChange={set("budget")}
                          className="bg-background border border-border rounded-xl px-4 py-3 text-foreground text-[14px] outline-none focus:border-primary transition-colors appearance-none"
                          style={{ fontFamily: "Outfit, sans-serif" }}
                        >
                          <option value="">Not sure yet</option>
                          <option value="under-1k">Under $1,000</option>
                          <option value="1k-5k">$1,000 – $5,000</option>
                          <option value="5k-15k">$5,000 – $15,000</option>
                          <option value="15k+">$15,000+</option>
                        </select>
                      </div>

                      {/* Description */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="pi-desc" className="text-[13px] text-muted-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>
                          Describe your project *
                        </label>
                        <textarea
                          id="pi-desc"
                          required
                          rows={4}
                          placeholder="Tell us what process you want to automate or what you'd like us to build. The more detail, the better."
                          value={form.description}
                          onChange={set("description")}
                          className="bg-background border border-border rounded-xl px-4 py-3 text-foreground text-[14px] placeholder:text-muted-foreground/50 outline-none focus:border-primary transition-colors resize-none"
                          style={{ fontFamily: "Outfit, sans-serif" }}
                        />
                      </div>

                      {status === "error" && (
                        <p className="text-[13px] text-red-500 -mt-1" style={{ fontFamily: "Outfit, sans-serif" }}>
                          Something went wrong. Please try again.
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full bg-primary text-primary-foreground rounded-[14px] py-4 text-[15px] font-semibold hover:opacity-90 transition-opacity cursor-pointer mt-1 disabled:opacity-60"
                        style={{ fontFamily: "Outfit, sans-serif" }}
                      >
                        {status === "loading" ? "Sending…" : "Send Project Brief"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
