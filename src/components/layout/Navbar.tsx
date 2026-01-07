import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import Button from '../ui/Button';
import { NAV_LINKS } from '../../data/content';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const currentPath = location.pathname === '/' ? 'home' : location.pathname.slice(1);

  const handleNavigate = (value: string) => {
    navigate(value === 'home' ? '/' : `/${value}`);
    setMobileMenuOpen(false);
  };

  return (
    <nav role="banner" aria-label="Primary navigation" className="fixed w-full z-50 bg-white/80 dark:bg-[#0A0F2C]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all duration-300 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[#0A0F2C]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="text-xl font-[800] text-[#0A0F2C] dark:text-white tracking-tighter flex items-center cursor-pointer select-none"
            onClick={() => handleNavigate('home')}
          >
            MARVONIX
            <div className="w-2 h-2 bg-[#1A3CE4] dark:bg-[#4FD3FF] rounded-full ml-1"></div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(link => (
              <button
                key={link.value}
                onClick={() => handleNavigate(link.value)}
                className={`text-[14px] font-semibold transition-colors duration-200 ${
                  currentPath === link.value || (link.value === 'home' && currentPath === '') ? 'text-[#1A3CE4] dark:text-[#4FD3FF]' : 'text-slate-600 dark:text-slate-400 hover:text-[#0A0F2C] dark:hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
            
            <div className="pl-6 border-l border-slate-200 dark:border-slate-800 flex items-center gap-4">
              <ThemeToggle />
              <Button 
                variant="primary" 
                className="!px-5 !py-2 !text-[13px] !rounded-full !font-semibold"
                onClick={() => handleNavigate('contact')}
              >
                Start a Project
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button & Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 dark:text-slate-400 hover:text-[#0A0F2C] dark:hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0A0F2C] border-b border-slate-200 dark:border-slate-800 shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_LINKS.map(link => (
              <button
                key={link.value}
                onClick={() => handleNavigate(link.value)}
                className={`block w-full text-left px-3 py-3 text-base font-semibold rounded-lg ${
                  currentPath === link.value ? 'bg-slate-50 dark:bg-[#111835] text-[#1A3CE4] dark:text-[#4FD3FF]' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-[#111835] hover:text-[#0A0F2C] dark:hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
