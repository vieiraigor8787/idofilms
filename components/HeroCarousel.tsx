'use client';

import React, { useEffect, useState, useCallback } from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { getRandomImages } from '@/lib/images';

const imgs = getRandomImages(4);

const SLIDES = [
  { src: imgs[0], alt: 'Casamento em Sintra' },
  { src: imgs[1], alt: 'Casamento na Toscana' },
  { src: imgs[2], alt: 'Cerimónia no Porto' },
  { src: imgs[3], alt: 'Festa em Lisboa' },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const total = SLIDES.length;

  const goTo = useCallback(
    (index: number) => setCurrent((index + total) % total),
    [total],
  );

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => goTo(current + 1), 5000);
    return () => clearInterval(interval);
  }, [current, goTo]);

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden bg-bg" id="top">
      {/* Slides */}
      <div className="absolute inset-0">
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1.2s] ease-smooth pointer-events-none hero-slide-overlay ${
              i === current ? 'opacity-100 pointer-events-auto' : 'opacity-0'
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-1/2 right-6 lg:right-12 -translate-y-1/2 z-[3] font-serif text-6xl text-black/[0.06] font-light leading-none hidden lg:block">
        <span id="heroCurrent">
          {String(current + 1).padStart(2, '0')}
        </span>
        <span className="text-lg text-text-muted align-super">/{String(total).padStart(2, '0')}</span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] px-6 lg:px-12 pb-16 lg:pb-20">
        <div className="max-w-site mx-auto">
          <ScrollReveal>
            <p className="text-[0.7rem] tracking-[0.18em] uppercase text-text-muted font-medium">
              Filmes de casamento · Portugal &amp; Europa
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="font-serif font-light text-[clamp(3rem,7vw,5.5rem)] leading-[1.1] tracking-[-0.01em] max-w-[820px] mt-0">
              O vosso dia, filmado como <em className="italic text-accent not-italic">cinema</em>.
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-text-muted text-[1.05rem] max-w-[480px] mt-6">
              Desde 2011, transformamos casamentos de luxo em obras cinematográficas — Lisboa, Sintra, Douro, Comporta e destinos por toda a Europa.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex gap-4 mt-9 flex-wrap">
              <a
                href="#contacto"
                className="inline-block px-[34px] py-4 bg-text text-white text-[0.78rem] tracking-[0.08em] uppercase hover:bg-accent transition-all duration-300"
              >
                Pedir orçamento
              </a>
              <a
                href="#portfolio"
                className="hover-reveal inline-block px-[34px] py-4 border border-line-strong text-text text-[0.78rem] tracking-[0.08em] uppercase bg-white/50 backdrop-blur-[4px] hover:border-accent hover:text-accent transition-all duration-300"
              >
                <span className="text-out">Ver portfolio</span>
                <span className="text-in">Explorar filmes →</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-9 right-6 lg:right-12 z-[3] flex gap-[10px]">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-[2px] border-none cursor-pointer transition-all duration-300 ${
              i === current
                ? 'bg-accent w-14'
                : 'bg-line-strong w-10'
            }`}
          />
        ))}
      </div>
    </section>
  );
}