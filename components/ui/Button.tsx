import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center transition-all duration-300 font-medium uppercase tracking-widest';
  
  const variants = {
    primary: 'bg-brand-accent text-white hover:bg-brand-black hover:text-white',
    secondary: 'bg-brand-black text-white hover:bg-brand-accent hover:text-white',
    outline: 'border border-brand-black text-brand-black hover:bg-brand-black hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-8 py-3 text-sm',
    lg: 'px-10 py-4 text-base',
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};