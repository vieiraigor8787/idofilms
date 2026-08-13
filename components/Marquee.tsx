import React from 'react';

const DESTINATIONS = [
  'Sintra',
  'Douro',
  'Comporta',
  'Lisboa',
  'Porto',
  'Algarve',
  'Toscana',
  'Provence',
  'Mallorca',
] as const;

export default function Marquee() {
  // Duplicate for seamless loop
  const items = [...DESTINATIONS, ...DESTINATIONS];

  return (
    <div
      className="border-t border-b border-line bg-bg-white py-[18px] overflow-hidden"
      aria-hidden="true"
    >
      <div className="flex gap-[60px] animate-marquee w-max">
        {items.map((dest, i) => (
          <span
            key={i}
            className="font-serif text-[1.1rem] italic text-text-muted whitespace-nowrap before:content-['◆'] before:mr-6 before:text-[0.5rem] before:align-middle before:text-accent"
          >
            {dest}
          </span>
        ))}
      </div>
    </div>
  );
}