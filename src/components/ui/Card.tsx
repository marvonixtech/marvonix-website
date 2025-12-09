import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`group bg-white dark:bg-[#111835] border border-slate-200 dark:border-slate-800 p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-[#1A3CE4]/30 dark:hover:border-[#4FD3FF]/30 dark:hover:shadow-[#000000]/50 ${className}`}>
    {children}
  </div>
);

export default Card;
