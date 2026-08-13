import React from 'react';

const FOOTER_LINKS = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Estúdio', href: '#estudio' },
  { label: 'Pacotes', href: '#pacotes' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-12 bg-bg">
      <div className="max-w-site mx-auto px-6 lg:px-10 flex justify-between items-center flex-wrap gap-5">
        <a href="#top" className="font-serif text-2xl font-medium tracking-[0.02em]">
          I DO <em className="text-accent not-italic italic">Films</em>
        </a>
        <ul className="flex gap-7 list-none">
          {FOOTER_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.78rem] text-text-muted tracking-[0.04em] hover:text-accent transition-colors duration-[0.25s] hover-line"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="text-[0.72rem] text-text-light tracking-[0.04em]">
          © I DO Films · Portugal &amp; Europa · Desde 2011
        </div>
      </div>
    </footer>
  );
}