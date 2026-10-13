import { site } from "../data/site";

export function Hero() {
  return (
    <section className="mt-8 sm:mt-12">
      <h1 className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[clamp(2rem,5vw,3.5rem)] leading-[1.08] font-extrabold tracking-[-0.045em] text-ink">
        <span>Hi, I&apos;m</span>
        <img
          src={site.avatar}
          alt=""
          className="h-[0.92em] w-[0.92em] rounded-full object-cover grayscale"
        />
        <span>{site.firstName}</span>
        <span>{site.lastName}!</span>
      </h1>

      <p className="mt-4 text-[clamp(1.7rem,4.4vw,3.05rem)] leading-[1.12] font-medium tracking-[-0.04em] text-muted italic">
        I&apos;m a {site.role}
      </p>
      <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-3">
        <p className="text-[clamp(1.7rem,4.4vw,3.05rem)] leading-[1.12] font-extrabold tracking-[-0.045em] text-accent">
          based in {site.location}.
        </p>
        {site.openToWork ? (
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-[13px] text-soft">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Open to work
          </span>
        ) : null}
      </div>

      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
        <a
          href={site.bookingUrl}
          className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
        >
          Book a call
        </a>
        <p className="max-w-sm text-[15px] leading-relaxed text-soft sm:max-w-md">{site.intro}</p>
      </div>
    </section>
  );
}
