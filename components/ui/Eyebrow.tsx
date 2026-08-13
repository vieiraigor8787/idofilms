import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export default function Eyebrow({ children, className = '' }: EyebrowProps) {
  return (
    <span
      className={`text-[0.7rem] tracking-[0.18em] uppercase text-text-muted font-medium ${className}`}
    >
      {children}
    </span>
  );
}