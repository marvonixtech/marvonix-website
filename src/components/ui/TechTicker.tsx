import React from 'react';
import { Cpu, Cloud, Code2, Database, Server, Globe } from 'lucide-react';

const TechTicker: React.FC = () => (
  <div className="w-full overflow-hidden bg-slate-50 dark:bg-[#080c24] border-y border-slate-200 dark:border-slate-800 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">Powering Next-Gen Systems With</p>
    </div>
    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
       <div className="flex items-center gap-2 text-lg font-semibold text-slate-600 dark:text-slate-300 tracking-tight"><Cpu className="w-6 h-6"/> AI/ML Models</div>
       <div className="flex items-center gap-2 text-lg font-semibold text-slate-600 dark:text-slate-300 tracking-tight"><Cloud className="w-6 h-6"/> AWS Cloud</div>
       <div className="flex items-center gap-2 text-lg font-semibold text-slate-600 dark:text-slate-300 tracking-tight"><Code2 className="w-6 h-6"/> React & Next.js</div>
       <div className="flex items-center gap-2 text-lg font-semibold text-slate-600 dark:text-slate-300 tracking-tight"><Database className="w-6 h-6"/> PostgreSQL</div>
       <div className="flex items-center gap-2 text-lg font-semibold text-slate-600 dark:text-slate-300 tracking-tight"><Server className="w-6 h-6"/> Node.js</div>
       <div className="flex items-center gap-2 text-lg font-semibold text-slate-600 dark:text-slate-300 tracking-tight"><Globe className="w-6 h-6"/> Edge Networks</div>
    </div>
  </div>
);

export default TechTicker;
