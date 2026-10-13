import { reading } from "../data/site";

export function ReadingCard() {
  return (
    <article className="card flex min-h-[280px] flex-col p-5">
      <h2 className="text-[13px] text-soft">What I&apos;m reading</h2>
      <div className="mt-4 flex flex-1 items-end justify-between gap-4">
        <div className="min-w-0 pb-2">
          <p className="text-[1.35rem] leading-tight font-semibold tracking-[-0.03em] text-ink">
            {reading.title}
          </p>
          <p className="mt-2 text-sm text-soft">{reading.author}</p>
        </div>
        <img
          src={reading.cover}
          alt={reading.title}
          className="h-40 w-[6.5rem] shrink-0 rounded-md object-cover shadow-[4px_8px_20px_rgba(0,0,0,0.18)]"
        />
      </div>
    </article>
  );
}
