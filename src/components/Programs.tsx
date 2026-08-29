import { programs } from '../data/studio';
import { Reveal } from './ui/Reveal';

export function Programs() {
  return (
    <section id="programs" className="bg-surface edge bay">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">Направления</span>
        <h2 className="display mt-6 text-[clamp(1.8rem,4.4vw,3rem)]">Что у нас можно делать</h2>
      </Reveal>

      <div className="mt-[clamp(2.5rem,5vw,4rem)] grid gap-x-14 gap-y-0 md:grid-cols-2">
        {programs.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.05} className="border-t border-line py-7">
            <div className="flex items-baseline gap-4">
              <span className="text-[0.85rem] font-semibold text-ink-faint">0{i + 1}</span>
              <div>
                <h3 className="display text-[clamp(1.2rem,2.4vw,1.6rem)]">{p.title}</h3>
                <p className="mt-2.5 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft">{p.note}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
