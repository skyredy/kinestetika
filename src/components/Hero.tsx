import { useRef } from 'react';
import { gsap, SplitText } from '../lib/gsap';
import { useIso } from '../lib/hooks';
import { studio } from '../data/studio';
import { media } from '../data/media';
import { Cta } from './ui/Cta';

export function Hero({ ready }: { ready: boolean }) {
  const root = useRef<HTMLElement>(null);
  const title = useRef<HTMLHeadingElement>(null);

  useIso(() => {
    if (!ready || !root.current || !title.current) return;
    const split = new SplitText(title.current, { type: 'lines', mask: 'lines' });
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: 'out-soft' } })
        .set(title.current, { opacity: 1 })
        .from(split.lines, { yPercent: 110, duration: 1.05, stagger: 0.09 }, 0)
        .from('[data-h-fade]', { opacity: 0, y: 14, duration: 0.8, stagger: 0.09 }, 0.35)
        .from('[data-h-photo]', { opacity: 0, scale: 1.06, duration: 1.3, ease: 'out-soft' }, 0.2);
    }, root);
    return () => {
      ctx.revert();
      split.revert();
    };
  }, [ready]);

  return (
    <section ref={root} id="hero" className="edge pt-32 pb-[clamp(3rem,7vw,6rem)] sm:pt-40">
      <div className="grid items-end gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
        <div>
          <span data-h-fade className="eyebrow">
            Крылатское · ул. Академика Павлова, 28
          </span>
          <h1
            ref={title}
            className="display mt-6 text-[clamp(2.9rem,7.2vw,5.6rem)]"
            style={{ opacity: 0 }}
          >
            Пилатес
            <br />
            на реформере
            <br />
            и коврике
          </h1>
          <p data-h-fade className="mt-8 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
            Группы до шести человек. Тренер смотрит за техникой у каждого. Рядом с метро Молодёжная.
          </p>
          <div data-h-fade className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Cta href={studio.telegram} external>
              Записаться на пробное
            </Cta>
            <span className="text-sm text-ink-soft">
              <span className="font-semibold text-ink">{studio.rating.value}</span> · {studio.rating.marks} оценок
            </span>
          </div>
        </div>

        <div data-h-photo className="aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-[3/4] lg:aspect-[3/4]">
          <img
            src={media['studio-wide'].src}
            srcSet={media['studio-wide'].srcSet}
            sizes="(max-width: 1024px) 100vw, 36vw"
            alt={media['studio-wide'].alt}
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
