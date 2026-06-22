"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useModal } from "@/context/ModalContext";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Services", href: "/#services" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/#contact" },
] as const;

export function Navbar() {
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const { openModal } = useModal();

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const delta = current - lastScrollY.current;
      // Hide on scroll-down (past 80px threshold), show on scroll-up
      if (current < 80) {
        setVisible(true);
      } else if (delta > 6) {
        setVisible(false);
        setMobileOpen(false);
      } else if (delta < -6) {
        setVisible(true);
      }
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 w-full pointer-events-none"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <nav className="max-w-[1200px] mx-auto px-5 md:px-10 h-[72px] flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2.5 shrink-0 pointer-events-auto">
            <Image
              src="/images/marvonix-symbol.svg"
              alt="Marvonix"
              width={32}
              height={32}
              className="object-contain flex-shrink-0"
              priority
            />
            <Image
              src="/images/marvonix-watermark.svg"
              alt="Marvonix"
              width={110}
              height={18}
              className="object-contain flex-shrink-0"
              style={{ height: "auto" }}
              priority
            />
          </Link>

          {/* Desktop nav pill — the floating element */}
          <ul
            className={cn(
              "hidden md:flex items-center gap-6 lg:gap-8 pointer-events-auto",
              "bg-[oklch(0.9665_0.0067_97.3521)/90] rounded-full px-6 py-2.5",
              "border border-[oklch(0.8847_0.0069_97.3627)]",
              "shadow-sm backdrop-blur-md"
            )}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-[family-name:var(--font-outfit)] text-[15px] text-[oklch(0.3438_0.0269_95.7226)] hover:text-[oklch(0.1908_0.0020_106.5859)] transition-colors duration-200 whitespace-nowrap"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <motion.button
            onClick={openModal}
            className={cn(
              "hidden md:flex bg-primary text-primary-foreground rounded-[14px] px-5 h-11",
              "items-center text-[15px] font-semibold shrink-0 pointer-events-auto",
              "font-[family-name:var(--font-outfit)] cursor-pointer"
            )}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            Start a Project
          </motion.button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 pointer-events-auto"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-6 h-0.5 bg-foreground origin-center"
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-foreground"
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-foreground origin-center"
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col pt-[72px] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-background/95 backdrop-blur-lg"
              onClick={() => setMobileOpen(false)}
            />

            {/* Links */}
            <motion.nav
              className="relative z-10 flex flex-col px-5 pt-8 pb-10 gap-2"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, delay: 0.05 }}
            >
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-[18px] text-foreground font-[family-name:var(--font-outfit)] border-b border-border"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

              <motion.button
                className="mt-6 bg-primary text-primary-foreground rounded-[14px] py-4 text-center text-[16px] font-semibold font-[family-name:var(--font-outfit)] cursor-pointer w-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.2 }}
                onClick={() => { setMobileOpen(false); openModal(); }}
              >
                Start a Project
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
