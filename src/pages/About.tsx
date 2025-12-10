import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import FadeIn from '../components/ui/FadeIn';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const About: React.FC = () => {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About MARVONIX",
    "description": "Small, senior software engineering team focused on building calm, reliable systems.",
    "mainEntity": {
      "@type": "Organization",
      "name": "MARVONIX",
      "description": "Boutique software engineering firm"
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <SEO 
        title="About MARVONIX - Senior Software Engineering Team"
        description="Small, senior software engineering team focused on AI automation and custom development. We're the engineers you wish were on your team."
        keywords="senior software engineers, boutique development agency, small engineering team, software consulting"
        canonical="https://marvonix.com/about"
      />
      <StructuredData data={aboutPageSchema} />
      
      <SectionTitle 
      eyebrow="About MARVONIX" 
      title="We're the engineers you wish were on your team."
      description="We started MARVONIX because too many good ideas get stuck in bad processes."
    />
    
    <FadeIn delay={200}>
      <div className="prose prose-lg max-w-none mb-24 dark:prose-invert">
        <h3 className="text-[#0A0F2C] dark:text-white font-bold text-2xl tracking-tight">What we believe</h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[18px]">
          Most software projects fail not because of technology, but because of process overhead, misaligned incentives, and teams that don't actually talk to each other.
        </p>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[18px]">
          We think there's a better way. Small, senior teams. Direct communication. Clear priorities. No disappearing into the void for weeks at a time.
        </p>
      </div>
    </FadeIn>

    <h3 className="text-3xl font-[700] text-[#0A0F2C] dark:text-white mb-12 tracking-tight">How we operate</h3>
    <div className="grid gap-12">
      {[
        { title: "Small, on purpose", desc: "We don't scale by adding junior devs. Everyone on your project has built production systems before." },
        { title: "Long-term relationships", desc: "We're not chasing one-off gigs. We want to work with teams that care about their products long-term." },
        { title: "Clear communication", desc: "We communicate often but efficiently. Fewer meetings that could've been a message." },
        { title: "Engineering-first", desc: "Product decisions get made by engineers, not account managers. We care about technical debt." },
        { title: "Transparency", desc: "We'll tell you when something's slow or expensive. We won't promise the impossible." },
        { title: "Real support", desc: "Launch isn't the end. We help you monitor, debug, and refine." }
      ].map((principle, idx) => (
        <FadeIn key={idx} delay={idx * 100}>
          <div className="flex gap-6 border-b border-slate-100 dark:border-slate-800 pb-12 last:border-0">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1A3CE4]/10 dark:bg-[#4FD3FF]/10 flex items-center justify-center text-[#1A3CE4] dark:text-[#4FD3FF] font-bold text-sm border border-[#1A3CE4]/20 dark:border-[#4FD3FF]/20">
              {idx + 1}
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#0A0F2C] dark:text-white mb-3 tracking-tight">{principle.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[16px]">{principle.desc}</p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
    </div>
  );
};

export default About;
