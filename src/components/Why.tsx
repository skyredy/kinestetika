import { reasons, studio } from '../data/studio';
import { Reveal } from './ui/Reveal';

export function Why() {
  return (
    <section id="why" className="edge bay">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">Почему сюда</span>
        <h2 className="display mt-6 text-[clamp(1.8rem,4.4vw,3rem)]">Чем мы отличаемся от зала</h2>
        <p className="mt-6 text-[1rem] leading-relaxed text-ink-soft">
          В студию ходят за тем, чтобы кто-то следил за техникой и знал, что делает. Вот что это значит на практике.
        </p>
      </Reveal>

      <div className="mt-[clamp(2.5rem,5vw,4rem)] grid gap-x-14 gap-y-0 md:grid-cols-2">
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={(i % 2) * 0.05} className="border-t border-line py-7">
            <div className="flex items-baseline gap-4">
              <span className="text-[0.85rem] font-semibold text-ink-faint">0{i + 1}</span>
              <div>
                <h3 className="display text-[clamp(1.15rem,2.3vw,1.5rem)]">{r.title}</h3>
                <p className="mt-2.5 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft">{r.note}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-ink-soft">
        <span>
          <span className="font-semibold text-ink">{studio.rating.value}</span> — по {studio.rating.marks} оценкам
        </span>
        <span>{studio.rating.reviews} отзывов</span>
        <span>Крылатское, {studio.hours}</span>
      </Reveal>
    </section>
  );
}
