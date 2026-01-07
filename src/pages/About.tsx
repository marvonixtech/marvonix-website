import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import FadeIn from '../components/ui/FadeIn';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const About: React.FC = () => {
  const navigate = useNavigate();
  
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
      
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
      
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
          We think there's a better way. Small, senior teams. Direct communication. Clear priorities. No disappearing into the void for weeks at a time. We've built <Link to="/work" className="text-[#1A3CE4] dark:text-[#4FD3FF] hover:underline font-medium">production systems</Link> that our clients rely on every day.
        </p>
      </div>
    </FadeIn>

    <FadeIn delay={300}>
      <div className="my-32 bg-white dark:bg-[#111835] border border-slate-200 dark:border-slate-800 rounded-3xl p-12 md:p-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1A3CE4] to-[#705df2] dark:from-[#4FD3FF] dark:to-[#4f8bff] flex items-center justify-center text-white text-3xl font-bold">
              MV
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0A0F2C] dark:text-white tracking-tight">Manish Vaghamshi</h3>
              <p className="text-[#1A3CE4] dark:text-[#4FD3FF] font-semibold">Founder, MARVONIX</p>
            </div>
          </div>
          
          <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-[17px]">
            <p>
              I've spent years building production systems. The problems I kept seeing weren't technical. They were process problems. Bad handoffs. Too many meetings. Junior devs learning on your live systems.
            </p>
            <p>
              I started MARVONIX because I wanted to work differently. Small team. Senior people only. When you work with us, you talk directly to the engineers writing your code. No account managers in between.
            </p>
            <p>
              I've built workflow automation that saves ops teams 15+ hours weekly. Systems handling millions in transactions. Legacy platform migrations with zero downtime. Good work happens when you cut the noise and focus on what matters.
            </p>
            <p>
              We stay small on purpose. We pick clients who care about their product, who get that quality takes time, and who want engineers that will tell them when an idea won't work.
            </p>
            <p className="text-[#0A0F2C] dark:text-white font-semibold pt-4">
              If that sounds right, let's talk.
            </p>
          </div>
        </div>
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
    
    <FadeIn delay={600}>
      <div className="mt-24 text-center bg-slate-50 dark:bg-[#080c24] p-16 rounded-3xl border border-slate-200 dark:border-slate-800">
        <h3 className="text-3xl font-bold text-[#0A0F2C] dark:text-white mb-4 tracking-tight">Ready to work with us?</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
          Tell us what you're trying to build, fix, or automate. We'll get back to you within 1-2 business days.
        </p>
        <Button onClick={() => navigate('/contact')}>Start a Conversation</Button>
      </div>
    </FadeIn>
    </div>
  );
};

export default About;
