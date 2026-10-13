import { ExperienceCard } from "./components/ExperienceCard";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowIWorkCard } from "./components/HowIWorkCard";
import { MapCard } from "./components/MapCard";
import { PlaylistCard } from "./components/PlaylistCard";
import { ReadingCard } from "./components/ReadingCard";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-page">
      <div className="page-grain pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply" />
      <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-white/80 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-white blur-3xl" />

      <main className="relative mx-auto w-full max-w-[1080px] px-5 pb-16 pt-6 sm:px-8 lg:px-10">
        <Header />
        <Hero />

        <section className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          <ExperienceCard />
          <PlaylistCard />
          <ReadingCard />
          <MapCard />
          <div className="md:col-span-2">
            <HowIWorkCard />
          </div>
        </section>
      </main>
    </div>
  );
}
