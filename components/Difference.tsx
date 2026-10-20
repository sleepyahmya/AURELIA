import { Gem, Leaf, Heart, Compass } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const VALUES = [
  {
    icon: Gem,
    title: "Thoughtful Luxury",
    text: "Considered comfort over excess — every material chosen for how it feels, not how it looks.",
  },
  {
    icon: Leaf,
    title: "Natural Beauty",
    text: "The island leads. We build lightly, plant generously, and let the landscape remain itself.",
  },
  {
    icon: Heart,
    title: "Personalized Experiences",
    text: "No two stays are alike. Your days are shaped quietly around what matters to you.",
  },
  {
    icon: Compass,
    title: "Meaningful Escapes",
    text: "Time that returns something — rest, perspective, and a slower sense of the world.",
  },
];

export default function Difference() {
  const { ref, visible } = useReveal();

  return (
    <section className="bg-[#172B25] py-20 sm:py-24 lg:py-36">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div
          className={`mb-12 max-w-2xl transition-all duration-1000 sm:mb-16 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
            <span className="h-px w-8 bg-[#C5A574] sm:w-10" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A574] sm:text-[11px] sm:tracking-[0.4em]">
              The Aurelia Difference
            </span>
          </div>
          <h2 className="font-serif text-3xl leading-tight text-[#F8F5EF] sm:text-5xl lg:text-6xl">
            What we hold to.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <div
              key={v.title}
              style={{ transitionDelay: `${i * 120}ms` }}
              className={`transition-all duration-1000 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <v.icon size={26} className="text-[#C5A574]" strokeWidth={1.2} />
              <h3 className="mt-5 font-serif text-lg text-[#F8F5EF] sm:mt-6 sm:text-xl">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#F8F5EF]/55">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}