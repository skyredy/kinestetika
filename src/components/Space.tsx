import { facts } from '../data/studio';
import { Reveal } from './ui/Reveal';
import { Img } from './ui/Img';

const grid: { name: string; className: string }[] = [
  { name: 'studio-angle', className: 'col-span-2 aspect-[16/10] sm:col-span-4 sm:row-span-2 sm:aspect-[4/3]' },
  { name: 'hall-mats', className: 'col-span-1 aspect-[4/5] sm:col-span-2' },
  { name: 'reformers-window', className: 'col-span-1 aspect-[4/5] sm:col-span-2' },
  { name: 'props-basket', className: 'col-span-1 aspect-square sm:col-span-2' },
  { name: 'anatomy', className: 'col-span-1 aspect-square sm:col-span-2' },
];

export function Space() {
  return (
    <section id="space" className="edge bay">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">Зал</span>
        <h2 className="display mt-6 text-[clamp(1.8rem,4.4vw,3rem)]">Светлый зал в новом доме</h2>
        <p className="mt-6 text-[0.95rem] leading-relaxed text-ink-soft">
          {facts.map(([k, v], i) => (
            <span key={k}>
              {i > 0 && <span className="px-2.5 text-line">·</span>}
              <span className="text-ink">{k}</span> — {v}
            </span>
          ))}
        </p>
      </Reveal>

      <div className="mt-[clamp(2.5rem,5vw,4rem)] grid grid-cols-2 gap-3 sm:grid-cols-8 sm:gap-4">
        {grid.map((tile, i) => (
          <Reveal key={tile.name} delay={(i % 3) * 0.05} className={`overflow-hidden rounded-2xl ${tile.className}`}>
            <Img
              name={tile.name as never}
              sizes="(max-width: 640px) 50vw, 40vw"
              className="h-full w-full"
              imgClassName="transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
