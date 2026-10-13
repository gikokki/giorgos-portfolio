import { site } from "../data/site";

export function MapCard() {
  return (
    <article className="card relative min-h-[280px] overflow-hidden">
      <img
        src="/map.svg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover grayscale contrast-[1.05]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-white/30" />
      <p className="relative z-10 p-5 text-[13px] text-soft">Map</p>
      <div className="absolute inset-x-0 bottom-6 z-10 text-center">
        <p className="text-[1.65rem] font-extrabold tracking-[0.28em] text-ink">{site.city.toUpperCase()}</p>
        <p className="mt-1 text-xs tracking-[0.22em] text-soft">{site.location.toUpperCase()}</p>
        <p className="mt-2 text-[11px] tracking-wide text-muted">{site.coordinates}</p>
      </div>
    </article>
  );
}
