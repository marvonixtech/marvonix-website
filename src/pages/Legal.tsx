import React from 'react';
import SEO from '../components/SEO';

export const Privacy: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32 prose prose-lg dark:prose-invert">
    <SEO 
      title="Privacy Policy"
      description="MARVONIX privacy policy. Learn how we collect, use, and protect your data."
      canonical="https://marvonix.com/privacy"
      noindex={true}
    />
    <h1 className="text-[#0A0F2C] dark:text-white font-[800] tracking-tighter">Privacy Policy</h1>
    <p className="text-slate-600 dark:text-slate-400 lead">Last Updated: 7 December 2025</p>
    <p className="text-slate-600 dark:text-slate-400">MARVONIX ("we", "us", or "our") respects your privacy. This policy explains what information we collect, how we use it, and your rights regarding your data.</p>
    <h3 className="text-[#0A0F2C] dark:text-white font-bold tracking-tight">Information we collect</h3>
    <p className="text-slate-600 dark:text-slate-400">When you use our website or contact us, we may collect: Contact information (Name, email), Project details, and Technical data (IP address, browser type).</p>
    <h3 className="text-[#0A0F2C] dark:text-white font-bold tracking-tight">How we use your information</h3>
    <p className="text-slate-600 dark:text-slate-400">We use your data to respond to inquiries, improve our services, and comply with legal obligations. We do not sell your data to third parties.</p>
    <h3 className="text-[#0A0F2C] dark:text-white font-bold tracking-tight">Contact us</h3>
    <p className="text-slate-600 dark:text-slate-400">If you have questions about this privacy policy, contact us at privacy@marvonix.com.</p>
  </div>
);

export const Terms: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32 prose prose-lg dark:prose-invert">
    <SEO 
      title="Terms & Conditions"
      description="MARVONIX terms of service and website usage conditions."
      canonical="https://marvonix.com/terms"
      noindex={true}
    />
    <h1 className="text-[#0A0F2C] dark:text-white font-[800] tracking-tighter">Terms & Conditions</h1>
    <p className="text-slate-600 dark:text-slate-400 lead">Last Updated: 7 December 2025</p>
    <h3 className="text-[#0A0F2C] dark:text-white font-bold tracking-tight">Overview</h3>
    <p className="text-slate-600 dark:text-slate-400">These terms govern your use of the MARVONIX website and any services we provide. By using our site or engaging our services, you agree to these terms.</p>
    <h3 className="text-[#0A0F2C] dark:text-white font-bold tracking-tight">Intellectual property</h3>
    <p className="text-slate-600 dark:text-slate-400">Unless otherwise agreed in writing, all content on this website is owned by MARVONIX. Work created for clients under a project agreement will be governed by the terms of that agreement.</p>
    <h3 className="text-[#0A0F2C] dark:text-white font-bold tracking-tight">Limitation of liability</h3>
    <p className="text-slate-600 dark:text-slate-400">To the maximum extent permitted by law, MARVONIX will not be liable for loss of data or profits, business interruption, or indirect losses.</p>
    <h3 className="text-[#0A0F2C] dark:text-white font-bold tracking-tight">Contact</h3>
    <p className="text-slate-600 dark:text-slate-400">For questions about these terms, contact us at legal@marvonix.com.</p>
  </div>
);
