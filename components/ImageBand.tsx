import React from 'react';
import { getRandomImages } from '@/lib/images';

const [bandImg] = getRandomImages(1);

export default function ImageBand() {
  return (
    <section className="py-0 h-[60vh] min-h-[400px] relative overflow-hidden">
      <img
        src={bandImg}
        alt="Palácio em Sintra"
        className="w-full h-full object-cover"
      />
      <div className="img-band-text">
        <h2 className="font-serif font-light text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-[1.1] tracking-[-0.01em] text-center px-8"
          style={{ textShadow: '0 2px 40px rgba(0,0,0,0.3)' }}
        >
          O vosso dia merece ser <em className="italic not-italic">visto</em> assim.
        </h2>
      </div>
    </section>
  );
}