'use client';

import React, { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Pacotes', href: '#pacotes' },
  { label: 'Contacto', href: '#contacto' },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-6 lg:px-12 transition-all duration-[0.35s] ease-smooth ${
        scrolled
          ? 'bg-bg/92 backdrop-blur-[16px] py-4 border-b border-line'
          : 'py-6'
      }`}
    >
      {/* Logo */}
      <a href="#top" className="inline-block shrink-0">
        <img
          src="/idofilms-logo.png"
          alt="I DO Films"
          className="h-10 w-auto"
        />
      </a>

      {/* Desktop Nav */}
      <nav className="hidden lg:block">
        <ul className="flex gap-9 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.78rem] tracking-[0.06em] uppercase text-text-muted hover:text-accent transition-colors duration-[0.25s] hover-line"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop CTA */}
      <a
        href="#contacto"
        className="hidden lg:inline-block px-[26px] py-3 bg-text text-white text-[0.75rem] tracking-[0.08em] uppercase hover:bg-accent hover:-translate-y-px transition-all duration-300"
      >
        Pedir orçamento
      </a>

      {/* Mobile menu toggle */}
      <button
        className="lg:hidden bg-transparent border-none text-2xl cursor-pointer p-0"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-bg border-b border-line lg:hidden">
          <ul className="flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-6 py-3 text-[0.78rem] tracking-[0.06em] uppercase text-text-muted hover:text-accent transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="px-6 pt-3">
              <a
                href="#contacto"
                className="block text-center px-[26px] py-3 bg-text text-white text-[0.75rem] tracking-[0.08em] uppercase hover:bg-accent transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Pedir orçamento
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
