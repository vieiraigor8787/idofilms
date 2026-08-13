import React from 'react';
import SectionHead from './ui/SectionHead';
import ScrollReveal from './ui/ScrollReveal';
import { getRandomImages } from '@/lib/images';

const imgs = getRandomImages(4);

const DESTINATIONS = [
  { src: imgs[0], alt: 'Lisboa', title: 'Lisboa', country: 'Portugal' },
  { src: imgs[1], alt: 'Sintra', title: 'Sintra', country: 'Portugal' },
  { src: imgs[2], alt: 'Douro', title: 'Douro', country: 'Portugal' },
  { src: imgs[3], alt: 'Europa', title: 'Europa', country: 'Fr · It · Es' },
];

export default function Destinations() {
  return (
    <section className="py-[100px] bg-bg-white" id="destinos">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHead
            eyebrow="Destinos"
            title={
              <>
                Onde quer que seja o vosso{' '}
                <em className="italic text-accent not-italic">sim</em>, nós filmamos.
              </>
            }
          />
        </ScrollReveal>

        <div className="grid grid-cols-4 gap-3 max-sm:grid-cols-2">
          {DESTINATIONS.map((dest, i) => (
            <article key={i} className="dest-card relative aspect-[3/4] overflow-hidden cursor-pointer">
              <img
                src={dest.src}
                alt={dest.alt}
                className="w-full h-full object-cover transition-transform duration-[0.6s] ease-smooth"
                loading="lazy"
              />
              <div className="dest-overlay">
                <h3 className="font-serif text-white text-[1.5rem] font-normal">
                  {dest.title}
                </h3>
                <span>{dest.country}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}