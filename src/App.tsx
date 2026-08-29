import { useEffect, useState } from 'react';
import { ScrollTrigger } from './lib/gsap';
import { useSmoothScroll } from './lib/hooks';
import { DEMO } from './config';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Space } from './components/Space';
import { Prices } from './components/Prices';
import { Reviews } from './components/Reviews';
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
        <About />
        <Programs />
        <Space />
        <Prices />
        <Reviews />
        <Contacts />
      </main>

      <Footer />
    </>
  );
}
