import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

type Offering = {
  id: string;
  title: string;
  short: string;
  long: string;
  image: string;
  highlights: string[];
};

const OFFERINGS: Offering[] = [
  {
    id: "oceanfront",
    title: "Oceanfront Villas",
    short:
      "Private accommodation with uninterrupted views across the open ocean.",
    long: "Perched at the water's edge, each Oceanfront Villa opens onto a private deck where the horizon becomes your only neighbour. Glass-railed balconies, hand-carved timber, and warm amber lighting create a space that feels both sheltered and boundless.",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      "Direct ocean access and private plunge deck",
      "Floor-to-ceiling glass with sunset orientation",
      "Hand-woven thatch and reclaimed timber interiors",
      "Outdoor rain shower beneath the palms",
    ],
  },
  {
    id: "garden",
    title: "Garden Retreats",
    short: "Secluded villas wrapped in lush tropical greenery.",
    long: "Set back among frangipani and dense foliage, the Garden Retreats offer a quieter kind of privacy. Stone pathways wind between the villas, and the air carries the scent of rain and blossom long after dusk.",
    image:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      "Hidden courtyards with outdoor bathing",
      "Shaded terraces surrounded by native planting",
      "Steps from the spa and wellness pavilion",
      "Deep quiet, day and night",
    ],
  },
  {
    id: "sunset",
    title: "Sunset Residences",
    short: "Spacious luxury stays designed around the evening light.",
    long: "The Sunset Residences are built for the golden hour — wide, open living spaces that turn toward the west, framing the sky as it shifts from lavender to rose to deep amber over the water.",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      "Expansive living and dining pavilions",
      "Private infinity edge overlooking the bay",
      "Candlelit decks for evening gatherings",
      "Designed for families and longer stays",
    ],
  },
];

export default function Resort() {
  const { ref, visible } = useReveal();
  const [open, setOpen] = useState<Offering | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section id="resort" className="bg-[#172B25] py-20 sm:py-24 lg:py-36">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div
          className={`mb-12 max-w-2xl transition-all duration-1000 sm:mb-16 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
            <span className="h-px w-8 bg-[#C5A574] sm:w-10" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A574] sm:text-[11px] sm:tracking-[0.4em]">
              The Resort
            </span>
          </div>
          <h2 className="font-serif text-3xl leading-tight text-[#F8F5EF] sm:text-5xl lg:text-6xl">
            Three ways to stay.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[#F8F5EF]/65 sm:mt-6 sm:text-base">
            Each retreat is a distinct expression of the same philosophy —
            space, light, and the natural world, held in careful balance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {OFFERINGS.map((o, i) => (
            <button
              key={o.id}
              onClick={() => setOpen(o)}
              style={{ transitionDelay: `${i * 120}ms` }}
              className={`group text-left transition-all duration-1000 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={o.image}
                  alt={o.title}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110 sm:h-72 lg:h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172B25]/70 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
              </div>
              <div className="mt-5 sm:mt-6">
                <h3 className="font-serif text-xl text-[#F8F5EF] transition-colors group-hover:text-[#C5A574] sm:text-2xl">
                  {o.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#F8F5EF]/60">
                  {o.short}
                </p>
                <span className="mt-4 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-[#C5A574] sm:mt-5">
                  Discover
                  <span className="h-px w-6 bg-[#C5A574] transition-all duration-300 group-hover:w-12" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-[#172B25]/85 p-0 backdrop-blur-sm sm:items-center sm:p-4"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto bg-[#F8F5EF] shadow-2xl sm:max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center bg-[#172B25]/80 text-[#F8F5EF] transition-colors hover:bg-[#C5A574] hover:text-[#172B25] sm:right-4 sm:top-4"
            >
              <X size={20} />
            </button>
            <img
              src={open.image}
              alt={open.title}
              className="h-52 w-full object-cover sm:h-80"
            />
            <div className="p-6 sm:p-8 lg:p-12">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A574] sm:text-[11px] sm:tracking-[0.4em]">
                The Resort
              </span>
              <h3 className="mt-3 font-serif text-2xl text-[#172B25] sm:mt-4 sm:text-3xl lg:text-4xl">
                {open.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#242521]/70 sm:mt-5 sm:text-base">
                {open.long}
              </p>
              <div className="mt-6 border-t border-[#172B25]/10 pt-6 sm:mt-8 sm:pt-8">
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#172B25] sm:text-[11px]">
                  Key Highlights
                </h4>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:mt-5 sm:grid-cols-2">
                  {open.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-sm text-[#242521]/70"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#C5A574]" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}