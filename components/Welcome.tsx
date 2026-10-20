import { useReveal } from "@/hooks/useReveal";

export default function Welcome() {
  const { ref, visible } = useReveal();

  return (
    <section id="discover" className="relative bg-[#F8F5EF] py-20 sm:py-24 lg:py-36">
      <div
        ref={ref}
        className={`mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 transition-all duration-1000 sm:px-6 lg:grid-cols-12 lg:gap-20 lg:px-10 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="lg:col-span-5">
          <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
            <span className="h-px w-8 bg-[#C5A574] sm:w-10" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A574] sm:text-[11px] sm:tracking-[0.4em]">
              The Aurelia Experience
            </span>
          </div>
          <h2 className="font-serif text-3xl leading-tight text-[#172B25] sm:text-5xl lg:text-6xl">
            A place beyond
            <br />
            the ordinary.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-[#242521]/70 sm:mt-8 sm:text-base">
            Hidden along a quiet stretch of coastline, Aurelia is a sanctuary
            shaped by the sea, the light, and the unhurried rhythm of island
            life. Here, mornings begin with the sound of water and end beneath a
            sky of amber and rose.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#242521]/70 sm:mt-5 sm:text-base">
            Every detail — from the hand-woven thatch to the candlelit decks —
            is designed to return you to a simpler, more generous way of being.
          </p>
          <button className="group mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#172B25] transition-colors hover:text-[#C5A574] sm:mt-10">
            Our Philosophy
            <span className="h-px w-8 bg-current transition-all duration-300 group-hover:w-14" />
          </button>
        </div>

        <div className="relative lg:col-span-7">
          <div className="relative overflow-hidden shadow-2xl shadow-[#172B25]/20">
            <img
              src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
              alt="Aurelia resort villa overlooking the ocean at dusk"
              loading="lazy"
              className="h-72 w-full object-cover transition-transform duration-[1400ms] hover:scale-105 sm:h-[420px] lg:h-[560px]"
            />
          </div>
          <div className="absolute -bottom-8 -left-3 hidden w-44 overflow-hidden border-8 border-[#F8F5EF] shadow-xl sm:block lg:-left-16 lg:w-72">
            <img
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"
              alt="Detail of a tropical pool deck with candle lanterns"
              loading="lazy"
              className="h-32 w-full object-cover sm:h-40 lg:h-52"
            />
          </div>
        </div>
      </div>
    </section>
  );
}