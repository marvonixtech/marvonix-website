import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import FadeIn from '../components/ui/FadeIn';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { CASE_STUDIES } from '../data/content';

const Work: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <SectionTitle 
        eyebrow="Selected Work" 
        title="Real problems we've solved."
        description="We can't share all the details (NDAs and such), but here's a look at the kind of work we do."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {CASE_STUDIES.map((study, idx) => (
          <FadeIn key={idx} delay={idx * 100}>
            <Card className="flex flex-col h-full bg-slate-50 dark:bg-[#111835] border-0 ring-1 ring-slate-200 dark:ring-slate-800">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-bold text-[#1A3CE4] dark:text-[#4FD3FF] uppercase tracking-wider">{study.industry}</span>
                <span className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[11px] px-3 py-1 rounded-full font-medium border border-slate-200 dark:border-slate-700">Case Study</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0A0F2C] dark:text-white mb-6 leading-tight group-hover:text-[#1A3CE4] dark:group-hover:text-[#4FD3FF] transition-colors tracking-tight">{study.title}</h3>
              
              <div className="space-y-6 mb-8 flex-grow">
                <div className="bg-white dark:bg-[#0A0F2C]/50 p-4 rounded-lg border border-slate-100 dark:border-slate-800/50">
                  <span className="text-slate-400 dark:text-slate-500 font-bold text-xs uppercase tracking-wide block mb-2">The Challenge</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{study.problem}</p>
                </div>
                <div className="bg-white dark:bg-[#0A0F2C]/50 p-4 rounded-lg border border-slate-100 dark:border-slate-800/50">
                  <span className="text-[#1A3CE4] dark:text-[#4FD3FF] font-bold text-xs uppercase tracking-wide block mb-2 opacity-80">The Solution</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{study.solution}</p>
                </div>
                <div>
                   <span className="text-[#0A0F2C] dark:text-white font-bold text-sm block mb-1">Result:</span>
                   <p className="text-slate-600 dark:text-slate-400 text-sm">{study.outcome}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto border-t border-slate-200 dark:border-slate-700 pt-6">
                {study.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md text-[11px] font-semibold uppercase tracking-wide border border-slate-200 dark:border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={400}>
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold text-[#0A0F2C] dark:text-white mb-6 tracking-tight">Want results like these?</h3>
          <Button onClick={() => navigate('/contact')}>Start a Project</Button>
        </div>
      </FadeIn>
    </div>
  );
};

export default Work;
