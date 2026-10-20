import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 120);
    return () => clearTimeout(t);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[560px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=80')",
          animation: "heroZoom 22s ease-in-out infinite alternate",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#172B25]/70 via-[#172B25]/35 to-[#172B25]/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#172B25]/60 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-5 pt-20 sm:px-6 lg:px-10">
        <div
          className={`max-w-3xl transition-all duration-1000 ${
            ready ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
            <span className="h-px w-8 bg-[#C5A574] sm:w-12" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A574] sm:text-[11px] sm:tracking-[0.45em]">
              Your Private Island Retreat
            </span>
          </div>
          <h1 className="font-serif text-4xl leading-[1.08] text-[#F8F5EF] sm:text-6xl lg:text-7xl xl:text-8xl">
            Where the world
            <br />
            <span className="italic text-[#E9E0D3]">fades away.</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#F8F5EF]/80 sm:mt-8 sm:text-lg">
            Discover a slower rhythm of life, surrounded by untouched nature and
            the endless blue.
          </p>
          <div className="mt-8 flex flex-col items-start gap-5 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
            <button
              onClick={() => go("resort")}
              className="group relative w-full overflow-hidden border border-[#C5A574] bg-[#C5A574] px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#172B25] transition-colors duration-500 hover:bg-transparent hover:text-[#C5A574] sm:w-auto sm:px-9"
            >
              Explore the Resort
            </button>
            <button
              onClick={() => go("discover")}
              className="group flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#F8F5EF]/85 transition-colors hover:text-[#C5A574]"
            >
              Discover Our Story
              <span className="h-px w-8 bg-current transition-all duration-300 group-hover:w-14" />
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => go("discover")}
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[#F8F5EF]/70 transition-colors hover:text-[#C5A574] sm:bottom-8"
      >
        <ChevronDown size={28} className="animate-bounce" />
      </button>

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1); }
          to { transform: scale(1.12); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes heroZoom { from { transform: scale(1); } to { transform: scale(1); } }
        }
      `}</style>
    </section>
  );
}