import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import FadeIn from '../components/ui/FadeIn';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { SERVICES } from '../data/content';

const Services: React.FC = () => {
  const navigate = useNavigate();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Software Development Services",
    "provider": {
      "@type": "Organization",
      "name": "MARVONIX"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Engineering Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI & Automation",
            "description": "Intelligent automation that saves time, including workflow automation, AI agents, and data pipelines."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web & App Development",
            "description": "Fast, reliable websites and applications with no bloat."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Systems Integration",
            "description": "API development, CRM connections, and legacy modernization."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Product Strategy",
            "description": "Technical audits, build vs buy analysis, and roadmap planning."
          }
        }
      ]
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <SEO 
        title="Software Engineering Services - AI, Automation & Integration"
        description="AI automation, custom web development, systems integration, and product strategy. No packages—we solve your specific engineering problems."
        keywords="AI automation services, custom web development, systems integration, API development, legacy modernization"
        canonical="https://marvonix.com/services"
      />
      <StructuredData data={serviceSchema} />
      
      <SectionTitle 
        eyebrow="Services" 
        title="We solve problems. Here's how."
        description="No packages, no one-size-fits-all solutions. We figure out what you actually need and build that."
      />

      <div className="grid gap-12">
        {SERVICES.map((service, idx) => (
          <FadeIn key={idx} delay={idx * 100}>
            <div className="bg-white dark:bg-[#111835] border border-slate-200 dark:border-slate-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 transition-colors shadow-sm hover:shadow-xl hover:border-[#1A3CE4]/20 dark:hover:border-[#4FD3FF]/20">
              <div className="md:w-1/3">
                <div className="bg-slate-50 dark:bg-[#0F163A]/50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 dark:border-slate-700/50">
                  {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-10 h-10 text-[#1A3CE4] dark:text-[#4FD3FF]" })}
                </div>
                <h3 className="text-2xl font-bold text-[#0A0F2C] dark:text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-[#1A3CE4] dark:text-[#4FD3FF] text-xs font-bold uppercase tracking-widest mb-2 opacity-80">Best For</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">{service.target}</p>
              </div>
              <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-800 pt-8 md:pt-0 md:pl-12 flex flex-col justify-center">
                <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-10 leading-relaxed font-light">{service.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {service.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-5 h-5 text-[#1A3CE4] dark:text-[#4FD3FF] mr-3 flex-shrink-0" />
                      <span className="font-medium text-sm">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={400}>
        <div className="mt-24 text-center bg-slate-50 dark:bg-[#080c24] p-16 rounded-3xl border border-slate-200 dark:border-slate-800 transition-colors">
          <h3 className="text-3xl font-bold text-[#0A0F2C] dark:text-white mb-4 tracking-tight">Not sure what you need?</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">Tell us what's broken, slow, or painful in your current setup. We'll diagnose the issue together.</p>
          <Button onClick={() => navigate('/contact')}>Start a Conversation</Button>
        </div>
      </FadeIn>
    </div>
  );
};

export default Services;
