import React from 'react';
import SectionHead from './ui/SectionHead';
import ScrollReveal from './ui/ScrollReveal';
import { getRandomImages } from '@/lib/images';

const imgs = getRandomImages(3);

const PACKAGES = [
  {
    title: 'Same Day Edit',
    desc: 'Resumo emocionante editado no próprio dia e exibido na festa.',
    img: imgs[0],
    alt: 'Same Day Edit',
    features: ['Edição em tempo recorde', 'Exibição na receção', '3–5 min de emoção'],
    featured: false,
  },
  {
    title: 'Filme Curto',
    desc: 'O melhor do dia num filme cinematográfico com som, cor e ritmo.',
    img: imgs[1],
    alt: 'Filme Curto',
    features: ['6–10 minutos', 'Preparativos, cerimónia e festa', 'Som direto dos votos'],
    featured: true,
  },
  {
    title: 'Documentário Completo',
    desc: 'Registo integral do vosso dia, do início ao fim.',
    img: imgs[2],
    alt: 'Documentário',
    features: ['Cerimónia na íntegra', 'Duas câmaras + som', 'Filme longo + curto'],
    featured: false,
  },
];

export default function Packages() {
  return (
    <section className="py-[100px] bg-bg-white" id="pacotes">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionHead
            eyebrow="Pacotes"
            title={
              <>
                Um filme para cada forma de contar a vossa{' '}
                <em className="italic text-accent not-italic">história</em>.
              </>
            }
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PACKAGES.map((pkg, i) => (
            <article
              key={i}
              className={`group bg-bg-card border overflow-hidden transition-all duration-[400ms] hover:shadow-card-hover hover:-translate-y-[6px] ${
                pkg.featured ? 'border-accent' : 'border-line'
              }`}
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={pkg.img}
                  alt={pkg.alt}
                  className="w-full h-full object-cover transition-transform duration-[0.6s] ease-smooth group-hover:scale-[1.06]"
                  loading="lazy"
                />
                {pkg.featured && (
                  <span className="absolute top-[14px] left-[14px] bg-accent text-white text-[0.65rem] tracking-[0.1em] uppercase py-[6px] px-3">
                    Mais pedido
                  </span>
                )}
              </div>
              <div className="p-8">
                <h3 className="font-serif text-[1.6rem] font-normal mb-3">
                  {pkg.title}
                </h3>
                <p className="text-text-muted text-[0.88rem]">{pkg.desc}</p>
                <ul className="list-none mt-5 flex flex-col gap-2">
                  {pkg.features.map((f, j) => (
                    <li
                      key={j}
                      className="text-[0.85rem] text-text-muted pl-4 relative transition-all duration-[0.25s] group-hover:text-text group-hover:pl-5"
                    >
                      <span className="absolute left-0 text-accent">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className="inline-block mt-6 text-[0.75rem] tracking-[0.08em] uppercase text-accent hover-line"
                >
                  Pedir orçamento →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}