import { faqs } from "@/lib/faqs";
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function Home() {
  return (
    <div className="bg-background min-h-screen overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
