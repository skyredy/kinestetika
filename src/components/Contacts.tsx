import { studio } from '../data/studio';
import { Reveal } from './ui/Reveal';
import { Cta } from './ui/Cta';

const mapSrc = `https://yandex.ru/map-widget/v1/?ll=${studio.coords.lon}%2C${studio.coords.lat}&z=16&mode=search&oid=${studio.yandexOrgId}&ol=biz`;

export function Contacts() {
  return (
    <section id="contacts" className="bg-surface edge bay">
      <Reveal>
        <span className="eyebrow">Контакты</span>
        <h2 className="display mt-6 max-w-2xl text-[clamp(1.9rem,5vw,3.4rem)]">Записаться — в Telegram</h2>
      </Reveal>

      <div className="mt-[clamp(2.5rem,5vw,4rem)] grid gap-x-14 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal className="flex flex-col gap-5">
            <Cta href={studio.telegram} external className="w-fit">
              @{studio.tgHandle}
            </Cta>
            <a
              href={studio.phoneHref}
              className="text-sm text-ink-soft tabular-nums underline-offset-4 hover:text-ink hover:underline"
            >
              {studio.phone}
            </a>
          </Reveal>

          <Reveal delay={0.08} className="mt-10 grid gap-5">
            {[
              ['Адрес', studio.address],
              ['Метро', studio.metro.join(' · ')],
              ['Часы', studio.hours],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-line pt-3">
                <dt className="text-[0.8rem] font-semibold text-ink-faint">{k}</dt>
                <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-ink">{v}</dd>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="h-[44svh] w-full overflow-hidden rounded-2xl border border-line lg:h-[52svh]">
            <iframe
              src={mapSrc}
              title="Кинестетика на карте"
              loading="lazy"
              className="h-full w-full grayscale transition-[filter] duration-700 hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
