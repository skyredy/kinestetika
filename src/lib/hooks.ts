import { useEffect, useLayoutEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from './gsap';

export const useIso = typeof window === 'undefined' ? useEffect : useLayoutEffect;

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [query]);
  return matches;
}

let lenis: Lenis | null = null;
export const getLenis = () => lenis;

export function useSmoothScroll() {
  useIso(() => {
    const instance = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      lerp: 0.09,
    });
    lenis = instance;
    document.documentElement.classList.add('lenis');
    instance.on('scroll', ScrollTrigger.update);
    const tick = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      instance.destroy();
      lenis = null;
      document.documentElement.classList.remove('lenis');
    };
  }, []);
}
