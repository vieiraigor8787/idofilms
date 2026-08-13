import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'I DO Films — Filmes de Casamento de Luxo em Portugal & Europa',
  description:
    'Desde 2011, transformamos casamentos de luxo em obras cinematográficas — Lisboa, Sintra, Douro, Comporta e destinos por toda a Europa.',
  openGraph: {
    title: 'I DO Films — Filmes de Casamento de Luxo',
    description:
      'Desde 2011, transformamos casamentos de luxo em obras cinematográficas.',
    type: 'website',
    locale: 'pt-PT',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-PT"
      className={`${cormorantGaramond.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}