import React from 'react';

interface ButtonProps {
  variant?: 'dark' | 'outline';
  href?: string;
  type?: 'button' | 'submit';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  variant = 'dark',
  href,
  type = 'button',
  children,
  className = '',
  onClick,
  disabled = false,
}: ButtonProps) {
  const base =
    'inline-block px-[34px] py-4 text-[0.78rem] tracking-[0.08em] uppercase transition-all duration-300 cursor-pointer text-center';

  const variants: Record<string, string> = {
    dark: 'bg-text text-white hover:bg-accent',
    outline:
      'border border-line-strong text-text bg-white/50 backdrop-blur-[4px] hover:border-accent hover:text-accent',
  };

  const classes = `${base} ${variants[variant]} ${className} ${disabled ? 'opacity-50 pointer-events-none' : ''}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}