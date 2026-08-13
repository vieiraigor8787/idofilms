'use client';

import React, { useState } from 'react';
import SectionHead from './ui/SectionHead';
import ScrollReveal from './ui/ScrollReveal';
import { getRandomImages } from '@/lib/images';

const imgs = getRandomImages(4);

const MOMENTS = [
  { title: 'Preparativos', desc: 'Os detalhes, os nervos, o último olhar no espelho — tudo captado com discrição.', img: imgs[0], alt: 'Preparativos' },
  { title: 'Cerimónia', desc: 'Votos, lágrimas, o primeiro beijo — filmados como cinema, sem encenação.', img: imgs[1], alt: 'Cerimónia' },
  { title: 'Sessão de casal', desc: 'Luz dourada, paisagens de sonho, retratos que parecem capas de revista.', img: imgs[2], alt: 'Sessão' },
  { title: 'Festa', desc: 'A energia, a dança, os discursos — o filme que revive a noite inteira.', img: imgs[3], alt: 'Festa' },
];

export default function HoverList() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-[100px] bg-bg">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHead
            eyebrow="O nosso olhar"
            title={
              <>
                Quatro momentos,{' '}
                <em className="italic text-accent not-italic">infinitas emoções</em>.
              </>
            }
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          {/* List */}
          <div className="flex flex-col">
            {MOMENTS.map((moment, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveIdx(i)}
                className={`py-7 border-b border-line cursor-pointer transition-all duration-[0.35s] ease-smooth ${
                  i === 0 ? 'border-t' : ''
                } ${activeIdx === i ? 'pl-5' : ''}`}
              >
                <h3
                  className={`font-serif font-light text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.1] tracking-[-0.01em] transition-colors duration-300 ${
                    activeIdx === i ? 'text-accent' : ''
                  }`}
                >
                  {moment.title}
                </h3>
                <p
                  className={`text-[0.88rem] text-text-muted overflow-hidden transition-all duration-400 ease-smooth ${
                    activeIdx === i
                      ? 'max-h-20 mt-[10px] opacity-100'
                      : 'max-h-0 mt-0 opacity-0'
                  }`}
                >
                  {moment.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Preview */}
          <div className="aspect-[4/5] overflow-hidden relative bg-bg-card shadow-card">
            {MOMENTS.map((moment, i) => (
              <img
                key={i}
                src={moment.img}
                alt={moment.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-[0.5s] ease-smooth ${
                  activeIdx === i
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-[1.05]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}