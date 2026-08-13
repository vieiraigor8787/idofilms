import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f1f1f1',
        'bg-white': '#fafafa',
        'bg-card': '#ffffff',
        text: '#1a1a1a',
        'text-muted': '#6b6b6b',
        'text-light': '#999999',
        accent: '#8b3a3a',
        'accent-soft': '#c47070',
        line: 'rgb(0 0 0 / 0.08)',
        'line-strong': 'rgb(0 0 0 / 0.14)',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.12)',
      },
      maxWidth: {
        site: '1280px',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      zIndex: {
        '200': '200',
      },
    },
  },
  plugins: [],
};

export default config;