import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import Marquee from '@/components/Marquee';
import PortfolioCarousel from '@/components/PortfolioCarousel';
import ImageMosaic from '@/components/ImageMosaic';
import ImageBand from '@/components/ImageBand';
import HoverList from '@/components/HoverList';
import Destinations from '@/components/Destinations';
import About from '@/components/About';
import Packages from '@/components/Packages';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <Marquee />
        <PortfolioCarousel />
        <ImageMosaic />
        <ImageBand />
        <HoverList />
        <Destinations />
        <About />
        <Packages />
        <TestimonialsCarousel />
        <Contact />
      </main>
      <Footer />
    </>
  );
}