import React, { useRef } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref, "-50px");
  const style = { transitionDelay: `${delay}ms` };

  return (
    <div
      ref={ref}
      style={style}
      className={`transition-all duration-700 ease-out transform ${
        onScreen 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
