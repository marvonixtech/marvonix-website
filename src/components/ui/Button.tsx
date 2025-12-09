import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, className = '', ...props }) => {
  // Base classes with TailwindCSS
  const baseClasses = "inline-flex items-center px-6 py-3 border text-[15px] font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A3CE4] dark:focus:ring-[#4FD3FF] transform active:scale-95 tracking-tight";
  
  const variants = {
    primary: "border-transparent text-white bg-[#1A3CE4] hover:bg-[#1530b5] hover:shadow-lg hover:shadow-[#1A3CE4]/30 dark:text-[#0A0F2C] dark:bg-[#4FD3FF] dark:hover:bg-[#3dc0ea] dark:hover:shadow-[#4FD3FF]/30",
    secondary: "border-slate-300 text-[#1A3CE4] hover:bg-slate-50 hover:border-[#1A3CE4] dark:border-slate-700 dark:text-[#4FD3FF] dark:hover:bg-[#111835] dark:hover:border-[#4FD3FF]",
    text: "border-transparent text-slate-400 hover:text-[#1A3CE4] dark:hover:text-[#4FD3FF] px-0 py-0"
  };

  return (
    <button onClick={onClick} className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
