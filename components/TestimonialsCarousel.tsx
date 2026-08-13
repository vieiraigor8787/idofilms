'use client';

import React, { useEffect, useState, useCallback } from 'react';
import SectionHead from './ui/SectionHead';
import ScrollReveal from './ui/ScrollReveal';
import { getRandomImages } from '@/lib/images';

const imgs = getRandomImages(3);

const TESTIMONIALS = [
  {
    quote:
      'Souberam pôr-nos completamente à vontade. Esquecemo-nos da câmara e vivemos o dia — o filme mostra isso mesmo.',
    author: 'Noivos, Sintra',
    img: imgs[0],
    alt: 'Sintra',
  },
  {
    quote:
      'Não é só um vídeo, é a forma mais fiel de voltar a sentir aquele dia. Cada vez que o vemos, choramos de novo.',
    author: 'Noivos, Porto',
    img: imgs[1],
    alt: 'Porto',
  },
  {
    quote:
      'Discretos do início ao fim. Captaram momentos que nem nós vimos acontecer. Recomendamos de olhos fechados.',
    author: 'Noivos, Comporta',
    img: imgs[2],
    alt: 'Comporta',
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  const goTo = useCallback(
    (index: number) => setCurrent((index + total) % total),
    [total],
  );

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => goTo(current + 1), 7000);
    return () => clearInterval(interval);
  }, [current, goTo]);

  return (
    <section className="py-[100px] bg-bg" id="depoimentos">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHead
            eyebrow="Depoimentos"
            title={
              <>
                Contado por quem{' '}
                <em className="italic text-accent not-italic">viveu</em> o dia.
              </>
            }
          />
        </ScrollReveal>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-[0.6s] ease-smooth"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-center py-5"
              >
                <blockquote className="font-serif italic font-light text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.35] tracking-[-0.01em]">
                  &ldquo;{t.quote}&rdquo;
                  <cite className="block mt-6 font-sans not-italic text-[0.78rem] tracking-[0.08em] uppercase text-text-muted">
                    — {t.author}
                  </cite>
                </blockquote>
                <div className="aspect-[4/5] overflow-hidden shadow-card">
                  <img
                    src={t.img}
                    alt={t.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Nav */}
          <div className="flex items-center gap-5 mt-10">
            <button
              onClick={() => goTo(current - 1)}
              aria-label="Anterior"
              className="w-12 h-12 border border-line-strong bg-bg-card cursor-pointer text-lg flex items-center justify-center hover:bg-text hover:text-white hover:border-text transition-all duration-[0.25s]"
            >
              ←
            </button>
            <div className="flex-1 h-px bg-line relative">
              <div
                className="absolute left-0 top-0 h-full bg-accent transition-[width] duration-[0.6s] ease-smooth"
                style={{ width: `${((current + 1) / total) * 100}%` }}
              />
            </div>
            <span className="font-serif text-[1.1rem] text-text-muted">
              {String(current + 1).padStart(2, '0')} /{' '}
              {String(total).padStart(2, '0')}
            </span>
            <button
              onClick={() => goTo(current + 1)}
              aria-label="Seguinte"
              className="w-12 h-12 border border-line-strong bg-bg-card cursor-pointer text-lg flex items-center justify-center hover:bg-text hover:text-white hover:border-text transition-all duration-[0.25s]"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}