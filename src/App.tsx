import { useEffect, useState } from 'react';
import { ScrollTrigger } from './lib/gsap';
import { useSmoothScroll } from './lib/hooks';
import { DEMO } from './config';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Why } from './components/Why';
import { FirstVisit } from './components/FirstVisit';
import { Programs } from './components/Programs';
import { Space } from './components/Space';
import { Prices } from './components/Prices';
import { Reviews } from './components/Reviews';
import { Faq } from './components/Faq';
import { CtaBand } from './components/CtaBand';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import { Watermark } from './components/Watermark';

export default function App() {
  const [ready, setReady] = useState(false);
  useSmoothScroll();

  useEffect(() => {
    const start = () => {
      setReady(true);
      requestAnimationFrame(() => ScrollTrigger.refresh());
    };
    const timer = window.setTimeout(start, 400);
    document.fonts?.ready
      .then(() => {
        window.clearTimeout(timer);
        start();
      })
      .catch(start);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {DEMO && <Watermark />}

      <Nav ready={ready} />

      <main>
        <Hero ready={ready} />
        <Why />
        <FirstVisit />
        <Programs />
        <Space />
        <Prices />
        <Reviews />
        <Faq />
        <CtaBand />
        <Contacts />
      </main>

      <Footer />
    </>
  );
}
