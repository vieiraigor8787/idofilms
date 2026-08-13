import React from 'react';
import Eyebrow from './ui/Eyebrow';
import ScrollReveal from './ui/ScrollReveal';
import { getRandomImages } from '@/lib/images';

const imgs = getRandomImages(3);

const STATS = [
  { value: '13+', label: 'Anos' },
  { value: '150+', label: 'Filmes' },
  { value: '4', label: 'Países' },
];

export default function About() {
  return (
    <section className="py-[100px] bg-bg" id="estudio">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[80px] items-center">
          {/* Images */}
          <ScrollReveal className="grid grid-cols-2 gap-[10px]">
            <figure className="overflow-hidden aspect-[3/4] row-span-2 h-full">
              <img
                src={imgs[0]}
                alt="Behind the scenes"
                className="w-full h-full object-cover transition-transform duration-[0.5s] ease-smooth hover:scale-[1.03]"
                loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden aspect-[3/4]">
              <img
                src={imgs[1]}
                alt="Casamento"
                className="w-full h-full object-cover transition-transform duration-[0.5s] ease-smooth hover:scale-[1.03]"
                loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden aspect-[3/4]">
              <img
                src={imgs[2]}
                alt="Cerimónia"
                className="w-full h-full object-cover transition-transform duration-[0.5s] ease-smooth hover:scale-[1.03]"
                loading="lazy"
              />
            </figure>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal>
            <Eyebrow>O estúdio</Eyebrow>
            <h2 className="font-serif font-light text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.1] tracking-[-0.01em] mt-3">
              Jornalismo e publicidade, ao serviço da vossa emoção.
            </h2>
            <p className="text-text-muted mb-[18px] text-[0.95rem] mt-4">
              Criada em 2011, a <strong className="text-text font-medium">I DO Films</strong> combina olhar jornalístico — atento, discreto, verdadeiro — com linguagem cinematográfica. O resultado é um filme que não encena o vosso dia: capta-o.
            </p>
            <p className="text-text-muted mb-[18px] text-[0.95rem]">
              Equipamento de cinema, equipa experiente, casamentos de luxo em Portugal e Europa.
            </p>
            <div className="flex gap-12 mt-10 pt-8 border-t border-line">
              {STATS.map((stat, i) => (
                <div key={i}>
                  <b className="font-serif text-[2.8rem] font-light text-accent block leading-none">
                    {stat.value}
                  </b>
                  <span className="text-[0.75rem] text-text-muted tracking-[0.06em] uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}