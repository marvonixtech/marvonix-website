import { Navbar } from "@/components/Navbar";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutTeam } from "@/components/about/AboutTeam";
import { AboutAntiBeliefs } from "@/components/about/AboutAntiBeliefs";
import { AboutProducts } from "@/components/about/AboutProducts";
import { FooterSection } from "@/components/FooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Marvonix | AI Automation Agency — UK & India",
  description:
    "Marvonix is an AI automation agency founded in 2025, headquartered in the UK with operations in India. Learn about our team, our method, and the products we've built.",
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen overflow-x-clip">
      <Navbar />
      <main className="pt-[72px]">
        <AboutHero />
        <AboutValues />
        <AboutTeam />
        <AboutProducts />
        <AboutAntiBeliefs />
      </main>
      <FooterSection />
    </div>
  );
}
