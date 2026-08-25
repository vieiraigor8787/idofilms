import React from 'react';
import SectionHead from './ui/SectionHead';
import ScrollReveal from './ui/ScrollReveal';

const PACKAGES = [
  {
    title: 'I DO',
    desc: 'Uma cobertura pensada para que nada escape. Dois olhares atentos acompanham o dia do início ao fim, captando cada emoção, cada detalhe e cada momento especial, para um filme verdadeiramente completo.',
    features: [
      '2 videógrafos',
      'Filme de 30–50 min*',
      'Highlights',
      'Color grading cinematográfico',
      'Entrega em ficheiro digital',
    ],
    featured: true,
  },
  {
    title: 'Short',
    desc: 'Uma abordagem mais simples e discreta, focada no que realmente importa. Os momentos mais marcantes são captados com sensibilidade, resultando num filme leve, natural e cheio de significado.',
    features: [
      '1 videógrafo',
      'Filme de 08–15 min*',
      'Color grading cinematográfico',
      'Entrega em ficheiro digital',
    ],
    featured: false,
  },
  {
    title: 'Vintage',
    desc: 'Para um filme com personalidade única juntamos imagens em Super 8. O resultado é uma peça mais artística e emotiva, com uma estética que transforma memórias em algo ainda mais especial.',
    features: [
      '2 videógrafos',
      'Filme de 30–50 min*',
      'Highlights',
      'Color grading cinematográfico',
      'Entrega em ficheiro digital',
    ],
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
              <div className="p-8">
                {pkg.featured && (
                  <span className="inline-block bg-accent text-white text-[0.65rem] tracking-[0.1em] uppercase py-[6px] px-3 mb-4">
                    Mais pedido
                  </span>
                )}
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
