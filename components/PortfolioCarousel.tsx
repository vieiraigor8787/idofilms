'use client';

import React, { useRef } from 'react';
import SectionHead from './ui/SectionHead';
import ScrollReveal from './ui/ScrollReveal';
import { getRandomImages } from '@/lib/images';

const imgs = getRandomImages(7);

const ITEMS = [
  { src: imgs[0], alt: 'Sintra', title: 'Sintra · Portugal', desc: 'Filme curto — 8 min' },
  { src: imgs[1], alt: 'Douro', title: 'Douro · Portugal', desc: 'Documentário completo' },
  { src: imgs[2], alt: 'Comporta', title: 'Comporta · Portugal', desc: 'Same Day Edit' },
  { src: imgs[3], alt: 'Lisboa', title: 'Lisboa · Portugal', desc: 'Filme curto — 10 min' },
  { src: imgs[4], alt: 'Toscana', title: 'Toscana · Itália', desc: 'Casamento destino' },
  { src: imgs[5], alt: 'Provence', title: 'Provence · França', desc: 'Filme de autor' },
  { src: imgs[6], alt: 'Porto', title: 'Porto · Portugal', desc: 'Documentário completo' },
];

export default function PortfolioCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -400 : 400,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-[100px] bg-bg" id="portfolio">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHead
            eyebrow="Portfolio"
            title={
              <>
                Histórias que{' '}
                <em className="italic text-accent not-italic">se veem</em> — e se
                sentem.
              </>
            }
            description="Deslizem pelos nossos filmes. Cada um conta um dia irrepetível."
          />
        </ScrollReveal>

        <div className="relative">
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scroll-snap-x-mandatory scrollbar-hide pb-2"
          >
            {ITEMS.map((item, i) => (
              <article
                key={i}
                className="carousel-item flex-shrink-0 w-[clamp(300px,38vw,480px)] snap-start relative overflow-hidden aspect-[3/4] bg-bg-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-400"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-[0.6s] ease-smooth"
                  loading="lazy"
                />
                <div className="carousel-meta">
                  <h3 className="font-serif text-[1.4rem] font-normal">{item.title}</h3>
                  <p className="text-[0.82rem] text-text-muted mt-1">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="flex gap-3 mt-8 justify-end">
            <button
              onClick={() => scroll('left')}
              aria-label="Anterior"
              className="w-12 h-12 border border-line-strong bg-bg-card cursor-pointer text-lg flex items-center justify-center hover:bg-text hover:text-white hover:border-text transition-all duration-[0.25s]"
            >
              ←
            </button>
            <button
              onClick={() => scroll('right')}
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