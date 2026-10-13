import { playlist } from "../data/site";

export function PlaylistCard() {
  return (
    <article className="card relative min-h-[280px] overflow-hidden p-5">
      <h2 className="relative z-10 text-[13px] text-soft">My music playlist</h2>
      <div className="relative mx-auto mt-6 h-[170px] w-[170px] sm:h-[180px] sm:w-[180px]">
        {playlist.covers.map((src, index) => {
          const rotation = [-18, 8, 22, -6][index] ?? 0;
          const x = [-18, 22, -8, 16][index] ?? 0;
          const y = [10, -6, 18, -12][index] ?? 0;
          return (
            <img
              key={src}
              src={src}
              alt=""
              className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-2xl object-cover shadow-lg"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotation}deg)`,
                zIndex: index + 1,
              }}
            />
          );
        })}
      </div>
      <a
        href={playlist.href}
        target="_blank"
        rel="noreferrer"
        className="relative z-10 mt-2 block text-center"
      >
        <p className="font-semibold text-ink">{playlist.title}</p>
        <p className="mt-0.5 text-[13px] text-soft">▶ {playlist.subtitle}</p>
      </a>
    </article>
  );
}
