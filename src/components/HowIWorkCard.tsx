import { useState } from "react";
import { howIWork } from "../data/site";

export function HowIWorkCard() {
  const [active, setActive] = useState(0);
  const step = howIWork[active];

  return (
    <article id="work" className="card flex min-h-[280px] flex-col p-5 sm:p-6">
      <h2 className="text-[13px] text-soft">How I work</h2>
      <div className="mt-8 flex flex-1 flex-col justify-center">
        <p className="text-[1.65rem] font-semibold tracking-[-0.03em] text-ink">
          {step.id} {step.title}
        </p>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-soft">{step.body}</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {howIWork.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(index)}
              className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium transition outline-none ${
                selected ? "bg-ink text-white" : "text-soft hover:bg-page"
              }`}
            >
              Step {item.id}
            </button>
          );
        })}
      </div>
    </article>
  );
}
