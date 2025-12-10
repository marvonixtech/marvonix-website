import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Search, Wand2, Rocket, Users, MessageSquare, Shield, Zap } from 'lucide-react';
import Button from '../components/ui/Button';
import FadeIn from '../components/ui/FadeIn';
import TechTicker from '../components/ui/TechTicker';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { SERVICES } from '../data/content';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MARVONIX",
    "url": "https://marvonix.com",
    "logo": "https://marvonix.com/logo.png",
    "description": "Boutique software engineering firm specializing in AI automation, web development, and systems integration.",
    "sameAs": [
      "https://twitter.com/marvonix",
      "https://github.com/marvonixtech"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "url": "https://marvonix.com/contact"
    },
    "areaServed": "Worldwide",
    "serviceType": [
      "AI Automation",
      "Web Development",
      "Systems Integration",
      "Product Strategy"
    ]
  };

  return (
    <div className="space-y-0">
      <SEO 
        title="MARVONIX - AI Automation & Software Engineering Services"
        description="Boutique software engineering firm specializing in AI automation, web development, and systems integration. Direct access to senior engineers who ship quality solutions."
        keywords="AI automation, software engineering, systems integration, custom development, workflow automation"
        canonical="https://marvonix.com/"
      />
      <StructuredData data={organizationSchema} />
      
      <section className="relative pt-32 pb-40 overflow-hidden bg-white dark:bg-[#0A0F2C]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1A3CE4]/10 dark:bg-[#4FD3FF]/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <FadeIn delay={100}>
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#1A3CE4]/30 dark:border-[#4FD3FF]/30 bg-[#1A3CE4]/5 dark:bg-[#4FD3FF]/5 text-[#1A3CE4] dark:text-[#4FD3FF] text-[11px] font-bold tracking-wide mb-8 backdrop-blur-sm uppercase">
              <span className="flex h-2 w-2 relative mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1A3CE4] dark:bg-[#4FD3FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1A3CE4] dark:bg-[#4FD3FF]"></span>
              </span>
              AI, Automation & Product Engineering
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <h1 className="text-5xl md:text-[5.5rem] font-[800] text-[#0A0F2C] dark:text-white tracking-tighter mb-8 leading-[1.05]">
              Calm systems for <br className="hidden md:block" />
              teams that <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1A3CE4] to-[#705df2] dark:from-[#4FD3FF] dark:to-[#4f8bff]">hate chaos.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={300}>
            <p className="text-[20px] md:text-[24px] text-slate-600 dark:text-slate-400 max-w-3xl mb-12 leading-relaxed md:mx-0 mx-auto tracking-tight font-normal">
              MARVONIX helps companies automate workflows, ship better software, and scale without the mess. You get direct access to engineers who actually ship.
            </p>
          </FadeIn>
          
          <FadeIn delay={400}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
              <Button onClick={() => navigate('/contact')}>
                Start a Project <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="secondary" onClick={() => navigate('/work')}>
                View Our Work
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-500 text-[13px] font-semibold border-t border-slate-200 dark:border-slate-800 pt-8 max-w-4xl tracking-wide uppercase">
              <div className="flex items-center justify-center md:justify-start"><CheckCircle2 className="w-5 h-5 mr-3 text-[#1A3CE4] dark:text-[#4FD3FF]" /> Fast delivery & No bloat</div>
              <div className="flex items-center justify-center md:justify-start"><CheckCircle2 className="w-5 h-5 mr-3 text-[#1A3CE4] dark:text-[#4FD3FF]" /> Senior-level Engineering</div>
              <div className="flex items-center justify-center md:justify-start"><CheckCircle2 className="w-5 h-5 mr-3 text-[#1A3CE4] dark:text-[#4FD3FF]" /> Long-term Scalability</div>
            </div>
          </FadeIn>
        </div>
      </section>

      <TechTicker />

      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          eyebrow="What we do" 
          title="Services built around what you actually need."
          description="We don't sell packages. We solve complex engineering problems."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <Card className="h-full">
                <div className="bg-slate-50 dark:bg-[#0F163A]/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 dark:border-slate-700/50">
                  {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-8 h-8 text-[#1A3CE4] dark:text-[#4FD3FF]" })}
                </div>
                <h3 className="text-2xl font-bold text-[#0A0F2C] dark:text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-[15px]">{service.description}</p>
                <ul className="space-y-3">
                  {service.capabilities.slice(0, 3).map((cap, i) => (
                    <li key={i} className="flex items-start text-[14px] font-medium text-slate-500 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 bg-[#1A3CE4] dark:bg-[#4FD3FF] rounded-full mt-2 mr-3"></span>
                      {cap}
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button variant="secondary" onClick={() => navigate('/services')}>View all services</Button>
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-[#080c24] py-32 border-y border-slate-200 dark:border-slate-800 transition-colors relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-200/50 dark:from-[#1A3CE4]/5 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle 
            eyebrow="How we work" 
            title="A process that doesn't get in your way."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            {[
              { step: "01", title: "Discover", icon: Search, desc: "We dig into what you're trying to fix, what's slowing you down, and where automation helps." },
              { step: "02", title: "Design & Build", icon: Wand2, desc: "We prototype fast, ship iteratively, and keep you in the loop. No disappearing for months." },
              { step: "03", title: "Launch & Iterate", icon: Rocket, desc: "We help you deploy, monitor, and refine. Real support when you scale." }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 150}>
                <div className="relative p-6">
                  {idx !== 2 && <div className="hidden md:block absolute top-12 left-full w-full h-[2px] bg-slate-200 dark:bg-slate-800 -translate-x-8"></div>}
                  
                  <div className="w-14 h-14 rounded-full bg-white dark:bg-[#111835] border-2 border-[#1A3CE4]/20 dark:border-[#4FD3FF]/20 flex items-center justify-center mb-6 relative z-10 shadow-lg shadow-[#1A3CE4]/5">
                    <span className="font-bold text-[#1A3CE4] dark:text-[#4FD3FF]">{item.step}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0A0F2C] dark:text-white mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionTitle 
              eyebrow="Why MARVONIX" 
              title="What makes us different."
              description="We're not trying to be the biggest. We're trying to be the most useful."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Users, title: "Direct access", desc: "No account managers. You work with the engineers." },
              { icon: MessageSquare, title: "Clear collab", desc: "Communication is efficient. Fewer meetings, more progress." },
              { icon: Shield, title: "Senior decisions", desc: "We're small on purpose. Everyone has built at scale." },
              { icon: Zap, title: "No overhead", desc: "We skip bureaucracy. Practical solutions that last." }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="bg-white dark:bg-[#111835] p-8 rounded-xl border border-slate-200 dark:border-slate-800 transition-colors hover:border-[#1A3CE4]/30 dark:hover:border-[#4FD3FF]/30">
                  <item.icon className="w-6 h-6 text-[#1A3CE4] dark:text-[#4FD3FF] mb-4" />
                  <h4 className="font-bold text-[#0A0F2C] dark:text-white mb-2 text-lg tracking-tight">{item.title}</h4>
                  <p className="text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <FadeIn>
          <div className="relative overflow-hidden bg-[#0A0F2C] rounded-3xl p-12 md:p-20 text-center border border-slate-800 shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A3CE4]/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4FD3FF]/10 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-[800] text-white mb-6 tracking-tighter">Have a project in mind?</h2>
              <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-[18px] leading-relaxed">Let's make your systems less painful. Tell us what you're trying to fix, and we'll figure out the best way forward.</p>
              <Button onClick={() => navigate('/contact')}>Start a Conversation</Button>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default Home;
