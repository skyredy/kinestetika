import { reviews, studio } from '../data/studio';
import { Reveal } from './ui/Reveal';

export function Reviews() {
  return (
    <section id="reviews" className="edge bay">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">Отзывы</span>
        <h2 className="display mt-6 text-[clamp(1.8rem,4.4vw,3rem)]">
          {studio.rating.value} — по {studio.rating.marks} оценкам
        </h2>
      </Reveal>

      <div className="mt-[clamp(2.5rem,5vw,4rem)] grid gap-x-12 gap-y-0 md:grid-cols-2">
        {reviews.map((review, i) => (
          <Reveal key={review.author} delay={(i % 2) * 0.05} className="border-t border-line py-7">
            <p className="text-[0.98rem] leading-[1.7] text-ink-soft">{review.text}</p>
            <footer className="mt-4 flex items-baseline gap-3 text-[0.85rem]">
              <span className="font-semibold text-ink">{review.author}</span>
              <span className="text-ink-faint">{review.date}</span>
            </footer>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
