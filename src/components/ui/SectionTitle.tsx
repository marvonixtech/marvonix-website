import React from 'react';
import FadeIn from './FadeIn';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ eyebrow, title, description, align = "left" }) => (
  <FadeIn className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
    {eyebrow && <span className="text-[#1A3CE4] dark:text-[#4FD3FF] font-semibold tracking-wide uppercase text-[11px] mb-3 block">{eyebrow}</span>}
    <h2 className="text-3xl md:text-5xl font-[700] text-[#0A0F2C] dark:text-white tracking-tighter leading-tight">{title}</h2>
    {description && <p className="mt-5 text-[19px] md:text-[21px] text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed tracking-normal font-normal">{description}</p>}
  </FadeIn>
);

export default SectionTitle;
