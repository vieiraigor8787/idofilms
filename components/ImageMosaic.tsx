import React from 'react';
import SectionHead from './ui/SectionHead';
import ScrollReveal from './ui/ScrollReveal';
import { getRandomImages } from '@/lib/images';

interface MosaicItemData {
  imgA: string;
  imgB: string;
  altA: string;
  altB: string;
  label: string;
  spanClass: string;
}

const imgs = getRandomImages(12);

const MOSAIC_ITEMS: MosaicItemData[] = [
  { imgA: imgs[0], imgB: imgs[1], altA: 'Cerimónia', altB: 'Preparativos', label: 'Sintra · Cerimónia', spanClass: 'col-span-5 row-span-2' },
  { imgA: imgs[2], imgB: imgs[3], altA: 'Detalhe', altB: 'Alianças', label: 'Detalhe · Alianças', spanClass: 'col-span-4' },
  { imgA: imgs[4], imgB: imgs[5], altA: 'Olhar', altB: 'Retrato', label: 'Primeiro olhar', spanClass: 'col-span-3' },
  { imgA: imgs[6], imgB: imgs[7], altA: 'Festa', altB: 'Palácio', label: 'Festa · Lisboa', spanClass: 'col-span-4' },
  { imgA: imgs[8], imgB: imgs[9], altA: 'Exterior', altB: 'Douro', label: 'Comporta', spanClass: 'col-span-3' },
  { imgA: imgs[10], imgB: imgs[11], altA: 'Casal', altB: 'Abraço', label: 'Porto · Cerimónia', spanClass: 'col-span-8' },
];

export default function ImageMosaic() {
  return (
    <section className="py-[100px] bg-bg-white" id="galeria">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHead
            eyebrow="Galeria"
            title={
              <>
                Frame a frame,{' '}
                <em className="italic text-accent not-italic">emoção pura</em>.
              </>
            }
            description="Passe o rato sobre cada imagem — veja o antes e o depois do nosso olhar."
          />
        </ScrollReveal>

        <div className="grid grid-cols-12 auto-rows-[220px] gap-2
          max-sm:grid-cols-2 max-sm:auto-rows-[180px]
        ">
          {MOSAIC_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`mosaic-item relative overflow-hidden cursor-pointer
                ${item.spanClass}
                max-sm:col-span-1 max-sm:row-span-1
              `}
            >
              <img
                className="img-a w-full h-full object-cover transition-transform duration-[0.6s] ease-smooth"
                src={item.imgA}
                alt={item.altA}
                loading="lazy"
              />
              <img
                className="img-b"
                src={item.imgB}
                alt={item.altB}
                loading="lazy"
              />
              <span className="mosaic-label absolute bottom-4 left-[18px] z-[2] bg-white/92 py-[10px] px-4 text-[0.72rem] tracking-[0.1em] uppercase opacity-0 translate-y-2 transition-all duration-[0.35s] ease-smooth pointer-events-none">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}