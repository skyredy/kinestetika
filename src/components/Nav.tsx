import { useRef, useState } from 'react';
import { gsap } from '../lib/gsap';
import { getLenis, useIso } from '../lib/hooks';
import { studio, sections } from '../data/studio';

export function Nav({ ready }: { ready: boolean }) {
  const bar = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useIso(() => {
    if (!ready || !bar.current) return;
    const ctx = gsap.context(() => {
      gsap.from(bar.current, { y: -16, opacity: 0, duration: 0.9, delay: 0.1 });
    }, bar);
    return () => ctx.revert();
  }, [ready]);

  useIso(() => {
    const onScroll = () => setSolid(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useIso(() => {
    const el = panel.current;
    if (!el) return;
    if (open) {
      gsap.set(el, { display: 'flex' });
      gsap
        .timeline()
        .fromTo(el, { yPercent: -100 }, { yPercent: 0, duration: 0.6, ease: 'out-soft' })
        .from('[data-mi]', { y: 24, opacity: 0, duration: 0.55, stagger: 0.05 }, 0.2);
      getLenis()?.stop();
    } else {
      gsap.to(el, { yPercent: -100, duration: 0.45, ease: 'out-soft', onComplete: () => gsap.set(el, { display: 'none' }) });
      getLenis()?.start();
    }
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    window.setTimeout(() => {
      const t = document.getElementById(id);
      if (t) getLenis()?.scrollTo(t, { offset: -64, duration: 1.2 });
    }, 320);
  };

  return (
    <>
      <div
        ref={bar}
        className={`fixed inset-x-0 top-0 z-[110] flex items-center justify-between edge py-4 transition-colors duration-400 sm:py-5 ${
          solid && !open ? 'bg-paper/85 backdrop-blur-md' : ''
        }`}
      >
        <button
          type="button"
          onClick={() => (open ? setOpen(false) : getLenis()?.scrollTo(0, { duration: 1.1 }))}
          className="display text-[1.1rem] tracking-tight sm:text-[1.25rem]"
        >
          Кинестетика
        </button>

        <div className="flex items-center gap-6 sm:gap-8">
          <a
            href={studio.telegram}
            target="_blank"
            rel="noreferrer"
            className="hidden text-[0.9rem] font-semibold text-ink-soft transition-colors hover:text-ink sm:block"
          >
            @{studio.tgHandle}
          </a>

          <button
            type="button"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="group relative z-[112] py-1 text-[0.92rem] font-semibold"
          >
            <span className="relative block h-[1.15rem] overflow-hidden">
              <span
                className="block transition-transform duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
                style={{ transform: open ? 'translateY(-100%)' : 'translateY(0)' }}
              >
                Меню
              </span>
              <span
                className="absolute inset-x-0 top-full block transition-transform duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
                style={{ transform: open ? 'translateY(-100%)' : 'translateY(0)' }}
              >
                Закрыть
              </span>
            </span>
            <span className="mt-0.5 block h-[1.5px] w-full origin-left bg-ink transition-transform duration-400 group-hover:scale-x-0" />
            <span className="absolute bottom-0 left-0 block h-[1.5px] w-full origin-right scale-x-0 bg-pine transition-transform delay-150 duration-400 group-hover:scale-x-100" />
          </button>
        </div>
      </div>

      <div
        ref={panel}
        className="fixed inset-0 z-[109] hidden flex-col justify-between bg-surface edge pt-24 pb-10 sm:pt-28"
        style={{ transform: 'translateY(-100%)' }}
      >
        <nav className="mt-auto flex flex-col">
          {sections.map((s, i) => (
            <button
              key={s.id}
              data-mi
              type="button"
              onClick={() => go(s.id)}
              className="display group flex items-baseline gap-5 border-b border-line py-4 text-left text-[clamp(1.9rem,6vw,3.6rem)] transition-colors duration-300 hover:text-pine"
            >
              <span className="text-[0.85rem] font-semibold text-ink-faint">0{i + 1}</span>
              {s.label}
            </button>
          ))}
        </nav>

        <div data-mi className="mt-8 flex flex-col gap-2 text-sm text-ink-soft sm:flex-row sm:items-end sm:justify-between">
          <span>{studio.address}</span>
          <a href={studio.telegram} target="_blank" rel="noreferrer" className="font-semibold text-ink">
            @{studio.tgHandle}
          </a>
        </div>
      </div>
    </>
  );
}
