import React from 'react';
import Eyebrow from './Eyebrow';

interface SectionHeadProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
}

export default function SectionHead({
  eyebrow,
  title,
  description,
  className = '',
}: SectionHeadProps) {
  return (
    <div className={`mb-14 ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-serif font-light text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.1] tracking-[-0.01em] mt-3">
        {title}
      </h2>
      {description && (
        <p className="text-text-muted mt-4 max-w-[520px] text-[0.95rem]">
          {description}
        </p>
      )}
    </div>
  );
}