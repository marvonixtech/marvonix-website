import React, { useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import FadeIn from '../components/ui/FadeIn';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact MARVONIX",
    "description": "Get in touch with MARVONIX software engineering team",
    "mainEntity": {
      "@type": "Organization",
      "name": "MARVONIX",
      "email": "hello@marvonix.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Sales",
        "availableLanguage": "English"
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <SEO 
        title="Contact MARVONIX - Start Your Software Project"
        description="Tell us what you're trying to fix. We respond within 1-2 business days. Start a conversation with our senior engineering team."
        keywords="contact software engineers, start software project, software development consultation"
        canonical="https://marvonix.com/contact"
      />
      <StructuredData data={contactSchema} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <SectionTitle 
            eyebrow="Contact" 
            title="Tell us what you're trying to fix."
            description="We usually reply within 1–2 business days. If it's urgent, mention that in your message."
          />
          
          <FadeIn delay={200}>
            <div className="bg-white dark:bg-[#111835] p-10 rounded-2xl border border-slate-200 dark:border-slate-800 transition-colors shadow-sm">
              <h4 className="text-[#0A0F2C] dark:text-white font-bold mb-8 text-xl tracking-tight">What happens next?</h4>
              <div className="space-y-8">
                {[
                  { title: "We respond", desc: "You'll hear from someone on our team within 1–2 business days." },
                  { title: "We ask questions", desc: "We'll dig into what you're trying to solve, your timeline, and your budget." },
                  { title: "We propose next steps", desc: "If we're a good fit, we'll set up a call or send a proposal." }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-5">
                    <div className="text-[#1A3CE4] dark:text-[#4FD3FF] font-bold text-lg leading-none mt-1">{idx + 1}.</div>
                    <div>
                      <div className="text-[#0A0F2C] dark:text-white font-bold mb-2 text-lg tracking-tight">{step.title}</div>
                      <div className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={400}>
          <div className="bg-white dark:bg-[#111835] border border-slate-200 dark:border-slate-800 p-10 rounded-2xl h-fit transition-colors shadow-xl shadow-slate-200/50 dark:shadow-none">
            {status === 'success' ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-[#1A3CE4]/10 dark:bg-[#4FD3FF]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                   <CheckCircle2 className="w-10 h-10 text-[#1A3CE4] dark:text-[#4FD3FF]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A0F2C] dark:text-white mb-2 tracking-tight">Message Received</h3>
                <p className="text-slate-600 dark:text-slate-400">We'll get back to you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')} 
                  className="mt-8 text-[#1A3CE4] dark:text-[#4FD3FF] hover:underline text-sm font-bold tracking-wide uppercase"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide text-[11px]">Name</label>
                  <input required type="text" className="w-full bg-slate-50 dark:bg-[#0A0F2C] border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3.5 text-[#0A0F2C] dark:text-white focus:ring-2 focus:ring-[#1A3CE4] dark:focus:ring-[#4FD3FF] focus:border-transparent outline-none transition-all placeholder-slate-400 font-medium" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide text-[11px]">Email</label>
                  <input required type="email" className="w-full bg-slate-50 dark:bg-[#0A0F2C] border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3.5 text-[#0A0F2C] dark:text-white focus:ring-2 focus:ring-[#1A3CE4] dark:focus:ring-[#4FD3FF] focus:border-transparent outline-none transition-all placeholder-slate-400 font-medium" placeholder="jane@company.com" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide text-[11px]">Company</label>
                    <input type="text" className="w-full bg-slate-50 dark:bg-[#0A0F2C] border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3.5 text-[#0A0F2C] dark:text-white focus:ring-2 focus:ring-[#1A3CE4] dark:focus:ring-[#4FD3FF] focus:border-transparent outline-none transition-all placeholder-slate-400 font-medium" placeholder="Acme Inc" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide text-[11px]">Budget</label>
                    <input type="text" className="w-full bg-slate-50 dark:bg-[#0A0F2C] border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3.5 text-[#0A0F2C] dark:text-white focus:ring-2 focus:ring-[#1A3CE4] dark:focus:ring-[#4FD3FF] focus:border-transparent outline-none transition-all placeholder-slate-400 font-medium" placeholder="$10k+" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide text-[11px]">Message</label>
                  <textarea required rows={4} className="w-full bg-slate-50 dark:bg-[#0A0F2C] border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3.5 text-[#0A0F2C] dark:text-white focus:ring-2 focus:ring-[#1A3CE4] dark:focus:ring-[#4FD3FF] focus:border-transparent outline-none transition-all placeholder-slate-400 font-medium" placeholder="Tell us about your project..."></textarea>
                </div>
                <Button className="w-full justify-center text-lg h-14">
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Contact;
