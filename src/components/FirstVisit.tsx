import { firstVisit, forWhom, studio } from '../data/studio';
import { Reveal } from './ui/Reveal';
import { Cta } from './ui/Cta';

export function FirstVisit() {
  return (
    <section id="first-visit" className="bg-surface edge bay">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">Первое занятие</span>
        <h2 className="display mt-6 text-[clamp(1.8rem,4.4vw,3rem)]">Как всё проходит</h2>
        <p className="mt-6 text-[1rem] leading-relaxed text-ink-soft">
          Если вы ни разу не были в студии пилатеса — это нормально и не страшно. Вот весь путь.
        </p>
      </Reveal>

      <ol className="mt-[clamp(2.5rem,5vw,4rem)] grid gap-x-14 md:grid-cols-2">
        {firstVisit.map((step) => (
          <Reveal key={step.n} className="flex gap-5 border-t border-line py-7">
            <span className="display text-[clamp(1.4rem,2.6vw,2rem)] leading-none text-ink-faint">{step.n}</span>
            <div>
              <h3 className="display text-[clamp(1.1rem,2.2vw,1.4rem)]">{step.title}</h3>
              <p className="mt-2.5 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft">{step.note}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={0.05} className="mt-14 grid gap-x-14 gap-y-8 lg:grid-cols-[0.9fr_1.1fr]">
        <h3 className="display text-[clamp(1.4rem,3vw,2rem)]">Скорее всего вам сюда, если</h3>
        <ul className="flex flex-col">
          {forWhom.map((item) => (
            <li key={item} className="flex items-baseline gap-3 border-t border-line py-4 text-[0.98rem] text-ink-soft">
              <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-pine" />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <Cta href={studio.telegram} external>
          Записаться на пробное
        </Cta>
      </Reveal>
    </section>
  );
}
