import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const CATEGORIES = [
  "Ocean & Sailing",
  "Wellness & Spa",
  "Island Dining",
  "Nature & Exploration",
];

const DATA: Record<string, { image: string; text: string }> = {
  "Ocean & Sailing": {
    image:
      "https://images.unsplash.com/photo-1500514966906-fe245eea9344?auto=format&fit=crop&w=1400&q=80",
    text: "Set out at first light aboard a traditional wooden sloop. Drift past hidden coves, drop anchor in water so clear it seems to disappear, and return as the sun begins to fall.",
  },
  "Wellness & Spa": {
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=80",
    text: "Our open-air pavilion blends island botanicals with slow, deliberate rituals. Warm stone, cold water, and the steady sound of the sea — a return to stillness.",
  },
  "Island Dining": {
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
    text: "Dine barefoot on the sand or beneath the thatch. Menus follow the tide and the garden, written each morning around whatever the island offers that day.",
  },
  "Nature & Exploration": {
    image:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1400&q=80",
    text: "Walk the ridge at dawn, follow the reef with a naturalist, or simply wander the garden paths. The island rewards those who move slowly.",
  },
};

export default function Experiences() {
  const { ref, visible } = useReveal();
  const [active, setActive] = useState(CATEGORIES[0]);

  return (
    <section id="experiences" className="bg-[#E9E0D3] py-20 sm:py-24 lg:py-36">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div
          className={`mb-10 transition-all duration-1000 sm:mb-14 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
            <span className="h-px w-8 bg-[#C5A574] sm:w-10" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A574] sm:text-[11px] sm:tracking-[0.4em]">
              Experiences
            </span>
          </div>
          <h2 className="max-w-2xl font-serif text-3xl leading-tight text-[#172B25] sm:text-5xl lg:text-6xl">
            Days shaped by the water.
          </h2>
        </div>

        <div className="mb-8 flex flex-wrap gap-2 sm:mb-12 sm:gap-3">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`border px-4 py-2.5 text-[10px] uppercase tracking-[0.18em] transition-all duration-300 sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.2em] ${
                active === c
                  ? "border-[#172B25] bg-[#172B25] text-[#F8F5EF]"
                  : "border-[#172B25]/25 text-[#172B25]/70 hover:border-[#172B25] hover:text-[#172B25]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="overflow-hidden shadow-2xl shadow-[#172B25]/15">
            <img
              key={active}
              src={DATA[active].image}
              alt={active}
              loading="lazy"
              className="h-64 w-full object-cover sm:h-80 lg:h-[520px]"
              style={{ animation: "fadeIn 0.8s ease" }}
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl text-[#172B25] sm:text-3xl lg:text-4xl">
              {active}
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-[#242521]/70 sm:mt-6 sm:text-base">
              {DATA[active].text}
            </p>
            <div className="mt-8 grid grid-cols-1 gap-5 border-t border-[#172B25]/10 pt-6 sm:grid-cols-2 sm:gap-6 sm:pt-8">
              {CATEGORIES.filter((c) => c !== active).map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className="group text-left"
                >
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A574]">
                    Also explore
                  </span>
                  <p className="mt-2 font-serif text-lg text-[#172B25]/80 transition-colors group-hover:text-[#C5A574]">
                    {c}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes fadeIn { from { opacity: 0; transform: scale(1.03); } to { opacity: 1; transform: scale(1); } }`}</style>
    </section>
  );
}