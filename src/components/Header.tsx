import { useState } from "react";
import { site } from "../data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 flex items-center justify-between py-2">
      <a
        href={`mailto:${site.email}`}
        className="flex min-w-0 items-center gap-3 text-[13px] text-ink/80 transition hover:text-ink"
      >
        <span className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center">
          <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
            <path d="M16 5 27 26H5L16 5Z" fill="currentColor" />
          </svg>
          <span className="absolute top-0.5 right-0.5 h-2 w-2 rounded-full bg-accent" />
        </span>
        <span className="truncate">{site.email}</span>
      </a>

      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full text-ink"
        aria-expanded={open}
        aria-label="Open menu"
        onClick={() => setOpen((value) => !value)}
      >
        <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden="true">
          <path d="M1 1.5h20M1 7h20M7 12.5h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>

      {open ? (
        <nav className="absolute top-12 right-0 z-30 w-52 max-w-[calc(100vw-2.5rem)] rounded-2xl border border-line bg-white p-3 shadow-[var(--shadow-card)]">
          <a className="block rounded-xl px-3 py-2 text-sm hover:bg-page" href="#work" onClick={() => setOpen(false)}>
            How I work
          </a>
          <a className="block rounded-xl px-3 py-2 text-sm hover:bg-page" href="#experience" onClick={() => setOpen(false)}>
            Experience
          </a>
          <a className="block rounded-xl px-3 py-2 text-sm hover:bg-page" href={site.bookingUrl} onClick={() => setOpen(false)}>
            Book a call
          </a>
        </nav>
      ) : null}
    </header>
  );
}
