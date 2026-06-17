import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SpeedSection } from "@/components/SpeedSection";
import { ROICalculator } from "@/components/ROICalculator";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="bg-background min-h-screen overflow-x-clip">
      <Navbar />
      <main className="pt-[72px]">
        <HeroSection />
        <ProcessSection />
        <ServicesSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <SpeedSection />
        <ROICalculator />
        <FAQSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
