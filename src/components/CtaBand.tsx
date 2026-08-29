import { studio } from '../data/studio';
import { Reveal } from './ui/Reveal';

export function CtaBand() {
  return (
    <section className="edge bay">
      <Reveal className="rounded-3xl bg-pine px-[clamp(1.5rem,5vw,4rem)] py-[clamp(2.5rem,6vw,5rem)] text-paper">
        <h2 className="display max-w-2xl text-[clamp(1.8rem,4.6vw,3.2rem)]">
          Приходите на пробное занятие
        </h2>
        <p className="mt-5 max-w-md text-[1rem] leading-relaxed text-paper/75">
          Напишите в Telegram — подберём время и ответим на вопросы. Обычно отвечаем в течение пары часов.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
          <a
            href={studio.telegram}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-paper px-7 py-3.5 text-sm font-semibold text-pine"
          >
            @{studio.tgHandle}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a href={studio.phoneHref} className="text-sm text-paper/75 tabular-nums underline-offset-4 hover:text-paper hover:underline">
            {studio.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
