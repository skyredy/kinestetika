export function Watermark() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-[7vh] overflow-hidden select-none"
      aria-hidden
    >
      {[0, 1, 2, 3].map((row) => (
        <span
          key={row}
          className="display whitespace-nowrap"
          style={{
            fontSize: 'clamp(3.5rem,11vw,8rem)',
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: 'var(--color-ink)',
            opacity: 0.03,
            transform: 'rotate(-28deg) translateX(-3vw)',
          }}
        >
          SKYREDY&nbsp;&nbsp;SKYREDY&nbsp;&nbsp;SKYREDY
        </span>
      ))}
    </div>
  );
}
