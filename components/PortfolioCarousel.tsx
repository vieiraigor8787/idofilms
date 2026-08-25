'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import SectionHead from './ui/SectionHead';
import ScrollReveal from './ui/ScrollReveal';

interface VideoItem {
  vimeoId: string;
  title: string;
  desc: string;
}

const VIDEOS: VideoItem[] = [
  { vimeoId: 'XXXXXXXXX', title: 'Sintra · Portugal', desc: 'Filme curto — 8 min' },
  { vimeoId: 'YYYYYYYYY', title: 'Douro · Portugal', desc: 'Documentário completo' },
  { vimeoId: 'ZZZZZZZZZ', title: 'Comporta · Portugal', desc: 'Filme curto' },
  { vimeoId: 'AAAAAAAAA', title: 'Lisboa · Portugal', desc: 'Filme curto — 10 min' },
  { vimeoId: 'BBBBBBBBB', title: 'Toscana · Itália', desc: 'Casamento destino' },
  { vimeoId: 'CCCCCCCCC', title: 'Provence · França', desc: 'Filme de autor' },
  { vimeoId: 'DDDDDDDDD', title: 'Porto · Portugal', desc: 'Documentário completo' },
];

export default function PortfolioCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -400 : 400,
        behavior: 'smooth',
      });
    }
  };

  const openModal = (index: number) => {
    setActiveIndex(index);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = '';
  };

  const goTo = useCallback(
    (dir: 'prev' | 'next') => {
      setActiveIndex((prev) => {
        if (dir === 'prev') return prev === 0 ? VIDEOS.length - 1 : prev - 1;
        return prev === VIDEOS.length - 1 ? 0 : prev + 1;
      });
    },
    [],
  );

  // Keyboard navigation
  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') goTo('prev');
      if (e.key === 'ArrowRight') goTo('next');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalOpen, goTo]);

  const activeVideo = VIDEOS[activeIndex];

  return (
    <>
      <section className="py-[100px] bg-bg" id="portfolio">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <SectionHead
              eyebrow="Portfólio"
              title={
                <>
                  Histórias que{' '}
                  <em className="italic text-accent not-italic">se veem</em> — e se
                  sentem.
                </>
              }
              description="Um grande filme não se limita a mostrar o que aconteceu. Ele faz-nos reviver cada emoção, cada gesto e cada instante. É com esta visão que a I DO FILMS procura marcar a diferença."
            />
          </ScrollReveal>

          <div className="relative">
            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto scroll-snap-x-mandatory scrollbar-hide pb-2"
            >
              {VIDEOS.map((item, i) => (
                <article
                  key={item.vimeoId}
                  className="carousel-item flex-shrink-0 w-[clamp(300px,38vw,480px)] snap-start relative overflow-hidden aspect-[3/4] bg-bg-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-400 cursor-pointer group"
                  onClick={() => openModal(i)}
                >
                  {/* Vimeo thumbnail */}
                  <img
                    src={`https://vumbnail.com/${item.vimeoId}_large.jpg`}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[0.6s] ease-smooth"
                    loading="lazy"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-6 h-6 text-text ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Meta */}
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

      {/* ── Modal ── */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[300] bg-black/95 flex items-center justify-center"
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white text-3xl transition-colors"
            aria-label="Fechar"
          >
            ✕
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-6 z-10 font-serif text-white/50 text-lg">
            <span className="text-white">{String(activeIndex + 1).padStart(2, '0')}</span>
            <span>/{String(VIDEOS.length).padStart(2, '0')}</span>
          </div>

          {/* Video container */}
          <div
            className="relative w-full max-w-[1200px] aspect-video mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://player.vimeo.com/video/${activeVideo.vimeoId}?autoplay=0&title=0&byline=0&portrait=0&dnt=1`}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={activeVideo.title}
            />

            {/* Nav arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goTo('prev');
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white text-2xl transition-colors"
              aria-label="Anterior"
            >
              ←
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goTo('next');
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white text-2xl transition-colors"
              aria-label="Seguinte"
            >
              →
            </button>
          </div>

          {/* Video info */}
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <h3 className="font-serif text-white text-[1.4rem]">{activeVideo.title}</h3>
            <p className="text-white/50 text-[0.82rem] mt-1">{activeVideo.desc}</p>
          </div>

          {/* Thumbnail strip */}
          <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-2 px-6 overflow-x-auto scrollbar-hide">
            {VIDEOS.map((v, i) => (
              <button
                key={v.vimeoId}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(i);
                }}
                className={`flex-shrink-0 w-20 h-12 overflow-hidden border-2 transition-all duration-200 ${
                  i === activeIndex
                    ? 'border-accent opacity-100'
                    : 'border-transparent opacity-40 hover:opacity-70'
                }`}
              >
                <img
                  src={`https://vumbnail.com/${v.vimeoId}_small.jpg`}
                  alt={v.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
