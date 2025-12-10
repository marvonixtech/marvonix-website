import React from 'react';
import { Twitter, Github, MessageCircle } from 'lucide-react';
import type { NavigateFunction } from '../../types';

interface PageProps {
  navigate: NavigateFunction;
}

const Footer: React.FC<PageProps> = ({ navigate }) => (
  <footer className="bg-white dark:bg-[#0A0F2C] border-t border-slate-200 dark:border-slate-800 pt-24 pb-12 transition-colors">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="text-2xl font-extrabold text-[#0A0F2C] dark:text-white tracking-tighter mb-6 flex items-center">
            MARVONIX
            <div className="w-2 h-2 bg-[#1A3CE4] dark:bg-[#4FD3FF] rounded-full ml-1"></div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-sm text-lg leading-relaxed mb-6">
            We build calm, reliable systems for teams that hate chaos. Based in the UK & India, working globally.
          </p>
          <div className="flex space-x-4">
             {/* Socials with icons */}
             <a href="https://twitter.com/marvonix" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#1A3CE4] dark:hover:bg-[#4FD3FF] hover:text-white dark:hover:text-[#0A0F2C] cursor-pointer transition-all duration-300">
               <span className="sr-only">Twitter</span>
               <Twitter className="h-5 w-5" />
             </a>
             <a href="https://github.com/marvonixtech" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#1A3CE4] dark:hover:bg-[#4FD3FF] hover:text-white dark:hover:text-[#0A0F2C] cursor-pointer transition-all duration-300">
               <span className="sr-only">GitHub</span>
               <Github className="h-5 w-5" />
             </a>
             <a href="https://wa.me/919726492494?text=Hi%20MARVONIX" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#25D366] dark:hover:bg-[#25D366] hover:text-white dark:hover:text-white cursor-pointer transition-all duration-300">
               <span className="sr-only">WhatsApp</span>
               <MessageCircle className="h-5 w-5" />
             </a>
          </div>
        </div>
        <div>
          <h4 className="text-[#0A0F2C] dark:text-white font-bold mb-6 tracking-wide text-sm uppercase">Company</h4>
          <ul className="space-y-4">
            {['About', 'Services', 'Work', 'Blog', 'Contact'].map(link => (
              <li key={link}>
                <button onClick={() => navigate(link.toLowerCase())} className="text-slate-600 dark:text-slate-400 hover:text-[#1A3CE4] dark:hover:text-[#4FD3FF] text-[15px] font-medium transition-colors">
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[#0A0F2C] dark:text-white font-bold mb-6 tracking-wide text-sm uppercase">Legal</h4>
          <ul className="space-y-4">
            <li><button onClick={() => navigate('privacy')} className="text-slate-600 dark:text-slate-400 hover:text-[#1A3CE4] dark:hover:text-[#4FD3FF] text-[15px] font-medium transition-colors">Privacy Policy</button></li>
            <li><button onClick={() => navigate('terms')} className="text-slate-600 dark:text-slate-400 hover:text-[#1A3CE4] dark:hover:text-[#4FD3FF] text-[15px] font-medium transition-colors">Terms & Conditions</button></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-500 dark:text-slate-500 text-sm font-medium">© {new Date().getFullYear()} MARVONIX. All rights reserved.</p>
        <div className="flex items-center gap-2 mt-4 md:mt-0 text-slate-400 text-xs">
           <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
           <span>All systems operational</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
