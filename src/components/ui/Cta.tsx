import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  href: string;
  external?: boolean;
  tone?: 'solid' | 'line';
  className?: string;
};

export function Cta({ children, href, external = false, tone = 'solid', className = '' }: Props) {
  const base =
    'group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold transition-colors duration-300';
  const tones =
    tone === 'solid'
      ? 'bg-pine text-paper hover:bg-ink'
      : 'border border-line text-ink hover:border-ink';

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={`${base} ${tones} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 grid h-4 w-4 place-items-center overflow-hidden">
        <span className="transition-transform duration-[420ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-5">→</span>
        <span className="absolute -translate-x-5 transition-transform duration-[420ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-0">
          →
        </span>
      </span>
    </a>
  );
}
