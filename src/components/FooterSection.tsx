"use client";

import Image from "next/image";
import {
  LinkedInIcon, InstagramIcon, TwitterXIcon, RedditIcon,
} from "@/components/icons";
import { useModal } from "@/context/ModalContext";
import { siteConfig } from "@/lib/siteConfig";

const marqueeText = "You don't need more people. You need better systems.";

const exploreLinks = [
  { label: "Services", href: "/#services" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/#contact" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/legal-pages/terms-and-conditions" },
  { label: "Privacy Policy", href: "/legal-pages/privacy-policy" },
];

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: LinkedInIcon },
  { label: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: "X / Twitter", href: siteConfig.social.twitter, Icon: TwitterXIcon },
  { label: "Reddit", href: siteConfig.social.reddit, Icon: RedditIcon },
];

const navLabelClass = "text-muted-foreground text-[12px] font-semibold tracking-[2px] uppercase mb-4";

export function FooterSection() {
  const { openModal } = useModal();
  return (
    <footer className="footer-gradient overflow-hidden border-t border-border">
      {/* Marquee */}
      <div className="py-16 overflow-hidden border-b border-border">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2].map((n) => (
            <span
              key={n}
              className="text-[80px] md:text-[100px] font-bold tracking-[-4px] text-foreground/20 pr-20"
              style={{ fontFamily: "Outfit, sans-serif" }}
              aria-hidden={n === 2}
            >
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="py-16 md:py-24 text-center max-w-[800px] mx-auto px-5 md:px-10">
        <h2 className="text-[28px] md:text-[40px] font-semibold tracking-[-1px] md:tracking-[-1.6px] text-foreground mb-4 text-center" style={{ fontFamily: "Outfit, sans-serif" }}>
          More Revenue. Less Busywork.
        </h2>
        <p className="text-[16px] text-muted-foreground text-center max-w-[480px] mx-auto mb-8" style={{ fontFamily: "Outfit, sans-serif" }}>
          We automate what&apos;s slowing you down so your team can focus on the work that actually needs them.
        </p>
        <button
          onClick={openModal}
          className="inline-flex bg-primary text-primary-foreground rounded-[14px] px-6 py-4 text-[15px] font-semibold hover:opacity-90 transition-opacity cursor-pointer"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          Start a Project
        </button>
      </div>

      {/* Nav columns */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <div>
            <div className="mb-4">
              <Image src="/images/marvonix-watermark.svg" alt="Marvonix" width={140} height={21} style={{ height: "auto" }} />
            </div>
            <p className="text-[14px] text-muted-foreground leading-6" style={{ fontFamily: "Outfit, sans-serif" }}>
              Powering businesses with AI-driven automation.
            </p>
          </div>

          <div>
            <p className={navLabelClass}>EXPLORE</p>
            <ul className="flex flex-col gap-3">
              {exploreLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-[15px] text-muted-foreground hover:text-foreground transition-colors no-underline" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={navLabelClass}>LEGAL</p>
            <ul className="flex flex-col gap-3">
              {legalLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-[15px] text-muted-foreground hover:text-foreground transition-colors no-underline" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 pb-10 flex items-center justify-between flex-wrap gap-4 border-t border-border pt-8">
        <div>
          <p className="text-[13px] text-muted-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>
            © {new Date().getFullYear()} Marvonix. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map(({ label, href, Icon }) => (
            <a key={label} href={href} aria-label={label} className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
