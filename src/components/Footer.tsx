import { studio, sections } from '../data/studio';
import { getLenis } from '../lib/hooks';

export function Footer() {
  return (
    <footer className="edge py-[clamp(3rem,6vw,4.5rem)]">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <span className="display block text-[1.2rem]">Кинестетика</span>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
            {studio.address}
            <br />
            {studio.hours}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {sections.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                const t = document.getElementById(s.id);
                if (t) getLenis()?.scrollTo(t, { offset: -64, duration: 1.2 });
              }}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {s.label}
            </button>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-sm lg:items-end">
          <a href={studio.telegram} target="_blank" rel="noreferrer" className="font-semibold text-ink transition-colors hover:text-pine">
            @{studio.tgHandle}
          </a>
          <a href={studio.phoneHref} className="text-ink-soft tabular-nums transition-colors hover:text-ink">
            {studio.phone}
          </a>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-[0.78rem] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Кинестетика</span>
        <button
          type="button"
          onClick={() => getLenis()?.scrollTo(0, { duration: 1.2 })}
          className="self-start transition-colors hover:text-ink sm:self-auto"
        >
          Наверх ↑
        </button>
      </div>
    </footer>
  );
}
