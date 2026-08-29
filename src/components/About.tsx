import { studio } from '../data/studio';
import { Reveal } from './ui/Reveal';
import { Img } from './ui/Img';

export function About() {
  return (
    <section id="about" className="edge bay">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
        <Reveal>
          <span className="eyebrow">О студии</span>
          <p className="display mt-6 max-w-2xl text-[clamp(1.5rem,3.6vw,2.4rem)] leading-[1.24]">
            Занимаемся малыми группами. Тренер поправляет технику и говорит, зачем нужно каждое упражнение.
            Реформер и коврик, занятия не повторяются.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm text-ink-soft">
            <span>
              <span className="font-semibold text-ink">{studio.rating.value}</span> — по {studio.rating.marks} оценкам
            </span>
            <span>{studio.rating.reviews} отзывов</span>
            <span>{studio.hours}</span>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="aspect-square overflow-hidden rounded-2xl lg:aspect-[4/5]">
          <Img name="decor-figure" sizes="(max-width: 1024px) 100vw, 34vw" className="h-full w-full" />
        </Reveal>
      </div>
    </section>
  );
}
