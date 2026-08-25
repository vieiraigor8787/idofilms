import React from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { getRandomImages } from '@/lib/images';

const imgs = getRandomImages(3);

export default function About() {
  return (
    <section className="py-[100px] bg-bg" id="sobre">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        {/* Puro Cinema */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[80px] items-center mb-[100px]">
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
            <span className="text-[0.7rem] tracking-[0.18em] uppercase text-text-muted font-medium">
              Sobre nós
            </span>
            <h2 className="font-serif font-light text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.1] tracking-[-0.01em] mt-3">
              Puro Cinema
            </h2>
            <p className="text-text-muted mb-[18px] text-[0.95rem] mt-4">
              A <strong className="text-text font-medium">I DO FILMS</strong> nasceu em 2011 com o propósito de trazer uma abordagem verdadeiramente cinematográfica ao vídeo de casamento, aliando estética, sensibilidade e uma elevada qualidade de imagem para captar momentos íntimos que merecem ser eternizados.
            </p>
            <p className="text-text-muted mb-[18px] text-[0.95rem]">
              A singularidade de cada relação é o ponto de partida dos nossos filmes. Em cada abraço, em cada palavra, em cada gesto e emoção, nasce uma história única e impossível de repetir.
            </p>
            <p className="text-text-muted mb-[18px] text-[0.95rem]">
              Mais do que filmar, procuramos interpretar e sentir cada momento, olhando para além das nossas lentes para criar um filme que será, verdadeiramente, único e inesquecível.
            </p>
            <p className="text-text-muted text-[0.95rem]">
              Ao longo dos anos crescemos e aperfeiçoámos técnicas que nos permitiram tornar-nos uma referência na área do wedding videography. Acompanhamos as tendências internacionais, desenvolvendo cada história com uma perspetiva única.
            </p>
          </ScrollReveal>
        </div>

        {/* Worldwide lovestories */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-[80px] items-center">
          <ScrollReveal>
            <h2 className="font-serif font-light text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.1] tracking-[-0.01em] mt-3">
              Worldwide lovestories
            </h2>
            <p className="text-text-muted mb-[18px] text-[0.95rem] mt-4">
              O mundo pode parecer vasto, mas quando se trata de histórias de amor, ele torna-se surpreendentemente pequeno.
            </p>
            <p className="text-text-muted mb-[18px] text-[0.95rem]">
              Ao longo dos anos, tivemos o privilégio de filmar casamentos em diferentes partes do mundo, acompanhando histórias únicas entre diversas nacionalidades, culturas e tradições.
            </p>
            <p className="text-text-muted text-[0.95rem]">
              Cada lugar tem a sua identidade, cada cerimónia os seus rituais, mas a emoção é universal. E é essa linguagem comum que nos permite contar histórias que atravessam fronteiras.
            </p>
          </ScrollReveal>

          {/* Images for worldwide */}
          <ScrollReveal className="grid grid-cols-2 gap-[10px]">
            <figure className="overflow-hidden aspect-[3/4]">
              <img
                src={imgs[1]}
                alt="Destino internacional"
                className="w-full h-full object-cover transition-transform duration-[0.5s] ease-smooth hover:scale-[1.03]"
                loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden aspect-[3/4] row-span-2 h-full">
              <img
                src={imgs[2]}
                alt="Casamento destino"
                className="w-full h-full object-cover transition-transform duration-[0.5s] ease-smooth hover:scale-[1.03]"
                loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden aspect-[3/4]">
              <img
                src={imgs[0]}
                alt="Cerimónia internacional"
                className="w-full h-full object-cover transition-transform duration-[0.5s] ease-smooth hover:scale-[1.03]"
                loading="lazy"
              />
            </figure>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
