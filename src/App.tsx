import React, { useState, useEffect } from 'react';
import { useScroll, useTransform } from 'motion/react';
import LocomotiveScroll from 'locomotive-scroll';
import { MenuOverlay } from './components/MenuOverlay';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { SplitSection } from './components/SplitSection';
import { ServicesSection } from './components/ServicesSection';
import { AffiliationsSection } from './components/AffiliationsSection';
import { Footer } from './components/Footer';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const carouselRotate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
        duration: 1.2,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        normalizeWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }
    });

    return () => {
      locomotiveScroll.destroy();
    }
  }, []);

  const cards = [
    { title: "Custom Application Development", img: "https://picsum.photos/seed/c1/600/400", angle: -40 },
    { title: "Cloud Infrastructure Management", img: "https://picsum.photos/seed/c2/600/400", angle: -20 },
    { title: "Website Development", img: "https://picsum.photos/seed/c3/600/400", angle: 0 },
    { title: "Mobile Application Development", img: "https://picsum.photos/seed/c4/600/400", angle: 20 },
    { title: "Requirement Analysis and Prototyping", img: "https://picsum.photos/seed/c5/600/400", angle: 40 },
    { title: "Pixelate Render Effect", img: "https://picsum.photos/seed/c6/600/400", angle: 60 },
    { title: "Directional List Hover", img: "https://picsum.photos/seed/c7/600/400", angle: 80 },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-[#a3ff47] selection:text-[#141414] overflow-x-hidden">
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Header onMenuClick={() => setIsMenuOpen(true)} />

      <div className="relative z-10 bg-[#f4f4f0] rounded-b-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] mb-[100vh] overflow-hidden">
        <main>
          <HeroSection carouselRotate={carouselRotate} cards={cards} />
          <IntroSection />
          <SplitSection />
          <ServicesSection />
          <AffiliationsSection />
        </main>
      </div>

      <Footer />
    </div>
  );
}