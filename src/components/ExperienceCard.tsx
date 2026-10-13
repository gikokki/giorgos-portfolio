import { experience } from "../data/site";

export function ExperienceCard() {
  return (
    <article id="experience" className="card flex h-full min-h-[280px] flex-col p-5">
      <h2 className="text-[13px] text-soft">My Experience</h2>
      <ol className="mt-5 flex flex-1 flex-col justify-center">
        {experience.map((item, index) => (
          <li key={`${item.title}-${item.period}`} className="grid grid-cols-[18px_1fr] gap-x-3">
            <div className="flex flex-col items-center">
              <span
                className={`mt-1.5 h-2.5 w-2.5 rounded-full ${index === 0 ? "bg-ink" : "bg-zinc-300"}`}
              />
              {index < experience.length - 1 ? <span className="my-1 w-px flex-1 bg-zinc-200" /> : null}
            </div>
            <div className={index < experience.length - 1 ? "pb-5" : ""}>
              <p className="font-semibold tracking-[-0.02em] text-ink">{item.title}</p>
              <p className="text-sm text-soft">
                {item.company} · {item.period} · {item.type}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}
