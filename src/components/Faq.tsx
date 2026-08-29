import { useState } from 'react';
import { faq } from '../data/studio';
import { Reveal } from './ui/Reveal';

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="edge bay">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">Вопросы</span>
        <h2 className="display mt-6 text-[clamp(1.8rem,4.4vw,3rem)]">Что обычно спрашивают</h2>
      </Reveal>

      <div className="mt-[clamp(2.5rem,5vw,4rem)] max-w-3xl border-t border-line">
        {faq.map((item, i) => {
          const expanded = open === i;
          return (
            <div key={item.q} className="border-b border-line">
              <button
                type="button"
                onClick={() => setOpen(expanded ? -1 : i)}
                className="flex w-full items-start gap-5 py-5 text-left"
                aria-expanded={expanded}
              >
                <span className="display flex-1 text-[clamp(1.05rem,2.1vw,1.35rem)]">{item.q}</span>
                <span
                  className={`mt-1 shrink-0 text-[1.1rem] leading-none text-ink-soft transition-transform duration-300 ${
                    expanded ? 'rotate-45' : ''
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              <div
                className="grid transition-[grid-template-rows,opacity] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ gridTemplateRows: expanded ? '1fr' : '0fr', opacity: expanded ? 1 : 0 }}
              >
                <div className="overflow-hidden">
                  <p className="max-w-xl pb-6 text-[0.98rem] leading-relaxed text-ink-soft">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
