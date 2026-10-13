import { site } from "../data/site";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "How I work", href: "#work" },
  { label: "Email", href: `mailto:${site.email}` },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mx-auto w-full max-w-[1080px] px-5 pb-10 sm:px-8 lg:px-10">
      <div className="card flex flex-col gap-6 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <a href={`mailto:${site.email}`} className="flex min-w-0 items-center gap-3">
          <span className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center text-ink">
            <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
              <path d="M16 5 27 26H5L16 5Z" fill="currentColor" />
            </svg>
            <span className="absolute top-0.5 right-0.5 h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="min-w-0">
            <span className="block font-semibold tracking-[-0.02em] text-ink">{site.name}</span>
            <span className="block truncate text-[13px] text-soft">
              {site.role} · {site.city}, {site.location}
            </span>
          </span>
        </a>

        <nav className="flex flex-wrap items-center gap-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-soft transition hover:bg-page hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.bookingUrl}
            className="inline-flex rounded-full bg-ink px-4 py-1.5 text-[13px] font-semibold text-white transition hover:bg-black"
          >
            Book a call
          </a>
        </nav>
      </div>
      <p className="mt-4 text-center text-[13px] text-muted">
        © {year} {site.name}
      </p>
    </footer>
  );
}
