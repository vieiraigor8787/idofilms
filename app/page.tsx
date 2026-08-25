import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import PortfolioCarousel from '@/components/PortfolioCarousel';
import About from '@/components/About';
import Packages from '@/components/Packages';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <About />
        <PortfolioCarousel />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
