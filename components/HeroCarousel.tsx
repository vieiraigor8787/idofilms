'use client';

import React, { useRef } from 'react';
import ScrollReveal from './ui/ScrollReveal';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden bg-black" id="top">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-75"
        >
          <source
            src="https://pub-c79951ac1ba9489896eb7816441953a3.r2.dev/8%20-%20WEDDING%20EDITORIAL%20EDITORIAL%20-%20LISBOA.mp4"
            type="video/mp4"
          />
        </video>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] px-6 lg:px-12 pb-16 lg:pb-20">
        <div className="max-w-site mx-auto">
          <ScrollReveal>
            <p className="text-[0.7rem] tracking-[0.18em] uppercase text-white font-bold">
              Filmes de casamento · Portugal &amp; Europa
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="font-serif font-light text-[clamp(3rem,7vw,5.5rem)] leading-[1.1] tracking-[-0.01em] max-w-[820px] mt-0">
              O vosso dia, filmado como <em className="italic text-accent not-italic">cinema</em>.
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-[#525252] text-[1.05rem] max-w-[480px] mt-6">
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
                className=" inline-block px-[34px] py-4 border border-line-strong text-text text-[0.78rem] tracking-[0.08em] uppercase bg-white/50 backdrop-blur-[4px] hover:border-accent hover:text-accent transition-all duration-300"
              >
                <span className="text-out">Ver portfolio</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
