'use client';

import React, { useState } from 'react';
import Eyebrow from './ui/Eyebrow';
import ScrollReveal from './ui/ScrollReveal';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-[100px] bg-bg-white" id="contacto">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-start">
          {/* Info */}
          <ScrollReveal>
            <Eyebrow>Contacto</Eyebrow>
            <h2 className="font-serif font-light text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.1] tracking-[-0.01em] mt-3">
              Vamos contar a vossa história?
            </h2>
            <p className="text-text-muted mt-4 max-w-[400px]">
              Escrevam-nos com a data e o local. Respondemos em menos de 48 horas.
            </p>
            <div className="mt-8 flex flex-col">
              <a
                href="mailto:ido@idofilms.pt"
                className="py-[18px] border-b border-line flex justify-between text-[0.95rem] hover:text-accent hover:pl-3 transition-all duration-300"
              >
                <span>Email</span>
                <span className="text-text-muted text-[0.88rem]">ido@idofilms.pt</span>
              </a>
              <a
                href="tel:+351965618157"
                className="py-[18px] border-b border-line flex justify-between text-[0.95rem] hover:text-accent hover:pl-3 transition-all duration-300"
              >
                <span>Telefone</span>
                <span className="text-text-muted text-[0.88rem]">+351 965 618 157</span>
              </a>
              <a
                href="tel:+351939903234"
                className="py-[18px] border-b border-line flex justify-between text-[0.95rem] hover:text-accent hover:pl-3 transition-all duration-300"
              >
                <span>Telefone</span>
                <span className="text-text-muted text-[0.88rem]">+351 939 903 234</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="nome" className="text-[0.7rem] tracking-[0.1em] uppercase text-text-muted">
                    Nomes
                  </label>
                  <input
                    id="nome"
                    type="text"
                    placeholder="Maria & João"
                    required
                    className="bg-bg border border-line py-[14px] px-4 text-text font-sans text-[0.92rem] outline-none focus:border-accent focus:bg-white transition-colors duration-[0.25s]"
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="data" className="text-[0.7rem] tracking-[0.1em] uppercase text-text-muted">
                    Data
                  </label>
                  <input
                    id="data"
                    type="date"
                    className="bg-bg border border-line py-[14px] px-4 text-text font-sans text-[0.92rem] outline-none focus:border-accent focus:bg-white transition-colors duration-[0.25s]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="email" className="text-[0.7rem] tracking-[0.1em] uppercase text-text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="ovosso@email.com"
                    required
                    className="bg-bg border border-line py-[14px] px-4 text-text font-sans text-[0.92rem] outline-none focus:border-accent focus:bg-white transition-colors duration-[0.25s]"
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="tel" className="text-[0.7rem] tracking-[0.1em] uppercase text-text-muted">
                    Telefone
                  </label>
                  <input
                    id="tel"
                    type="tel"
                    placeholder="+351 9xx xxx xxx"
                    className="bg-bg border border-line py-[14px] px-4 text-text font-sans text-[0.92rem] outline-none focus:border-accent focus:bg-white transition-colors duration-[0.25s]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[6px]">
                <label htmlFor="local" className="text-[0.7rem] tracking-[0.1em] uppercase text-text-muted">
                  Local
                </label>
                <input
                  id="local"
                  type="text"
                  placeholder="Sintra, Douro, Toscana..."
                  className="bg-bg border border-line py-[14px] px-4 text-text font-sans text-[0.92rem] outline-none focus:border-accent focus:bg-white transition-colors duration-[0.25s]"
                />
              </div>
              <div className="flex flex-col gap-[6px]">
                <label htmlFor="pacote" className="text-[0.7rem] tracking-[0.1em] uppercase text-text-muted">
                  Pacote
                </label>
                <select
                  id="pacote"
                  defaultValue="Filme Curto"
                  className="bg-bg border border-line py-[14px] px-4 text-text font-sans text-[0.92rem] outline-none focus:border-accent focus:bg-white transition-colors duration-[0.25s]"
                >
                  <option>Same Day Edit</option>
                  <option>Filme Curto</option>
                  <option>Documentário Completo</option>
                  <option>Ainda não sei</option>
                </select>
              </div>
              <div className="flex flex-col gap-[6px]">
                <label htmlFor="msg" className="text-[0.7rem] tracking-[0.1em] uppercase text-text-muted">
                  Sobre o vosso dia
                </label>
                <textarea
                  id="msg"
                  placeholder="Estilo, convidados, ideias..."
                  className="bg-bg border border-line py-[14px] px-4 text-text font-sans text-[0.92rem] outline-none focus:border-accent focus:bg-white transition-colors duration-[0.25s] resize-y min-h-[100px]"
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="py-4 bg-text text-white border-none text-[0.78rem] tracking-[0.08em] uppercase cursor-pointer hover:bg-accent transition-colors duration-300 disabled:opacity-50 disabled:pointer-events-none"
              >
                {submitted ? 'Enviado — obrigado!' : 'Enviar pedido'}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}