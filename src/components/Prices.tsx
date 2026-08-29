import { prices, studio } from '../data/studio';
import { Reveal } from './ui/Reveal';

export function Prices() {
  return (
    <section id="prices" className="bg-surface edge bay">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">Цены</span>
        <h2 className="display mt-6 text-[clamp(1.8rem,4.4vw,3rem)]">Сколько стоит</h2>
        <p className="mt-6 text-[1rem] leading-relaxed text-ink-soft">
          Начать проще всего с пробного — посмотрите зал, попробуете реформер, без обязательств.
        </p>
      </Reveal>

      <Reveal delay={0.05} className="mt-[clamp(2.5rem,5vw,4rem)] max-w-3xl">
        <ul className="border-t border-line">
          {prices.map((row) => (
            <li key={row.title} className="flex items-baseline gap-4 border-b border-line py-5">
              <span className="display text-[clamp(1.05rem,2.2vw,1.4rem)]">{row.title}</span>
              <span className="hidden h-px flex-1 self-center bg-line sm:block" />
              <span className="text-[clamp(1rem,2vw,1.3rem)] font-semibold tabular-nums text-ink-soft">{row.price}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-[0.9rem] leading-relaxed text-ink-faint">
          Персональные и абонементы считаем под ваш запрос — напишите в{' '}
          <a href={studio.telegram} target="_blank" rel="noreferrer" className="text-ink underline underline-offset-4">
            Telegram
          </a>
          . Оплата на месте.
        </p>
      </Reveal>
    </section>
  );
}
