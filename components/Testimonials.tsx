import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const QUOTES = [
  {
    quote:
      "We arrived exhausted and left with a completely different sense of time. Aurelia doesn't ask anything of you — it simply lets you slow down.",
    name: "Illustrative Guest — 'Elena M.'",
  },
  {
    quote:
      "The light at dusk, the lanterns along the water, the quiet. It felt less like a hotel and more like a place that had always been there.",
    name: "Illustrative Guest — 'Marcus T.'",
  },
  {
    quote:
      "Every detail was considered without ever feeling designed. That balance is rare, and it's what we remember most.",
    name: "Illustrative Guest — 'Priya & Sam'",
  },
];

export default function Testimonials() {
  const { ref, visible } = useReveal();
  const [i, setI] = useState(0);

  const prev = () => setI((v) => (v - 1 + QUOTES.length) % QUOTES.length);
  const next = () => setI((v) => (v + 1) % QUOTES.length);

  return (
    <section className="bg-[#E9E0D3] py-20 sm:py-24 lg:py-36">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl px-5 text-center transition-all duration-1000 sm:px-6 lg:px-10 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="mb-8 flex items-center justify-center gap-3 sm:mb-10 sm:gap-4">
          <span className="h-px w-8 bg-[#C5A574] sm:w-10" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A574] sm:text-[11px] sm:tracking-[0.4em]">
            Guest Impressions
          </span>
          <span className="h-px w-8 bg-[#C5A574] sm:w-10" />
        </div>

        <blockquote className="min-h-[200px] sm:min-h-[180px]">
          <p className="font-serif text-xl italic leading-relaxed text-[#172B25] sm:text-3xl lg:text-4xl">
            “{QUOTES[i].quote}”
          </p>
          <footer className="mt-6 text-[10px] uppercase tracking-[0.25em] text-[#242521]/60 sm:mt-8 sm:text-[11px] sm:tracking-[0.3em]">
            {QUOTES[i].name}
          </footer>
        </blockquote>

        <div className="mt-10 flex items-center justify-center gap-5 sm:mt-12 sm:gap-6">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center border border-[#172B25]/25 text-[#172B25] transition-colors hover:border-[#C5A574] hover:text-[#C5A574]"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {QUOTES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-1.5 transition-all duration-300 ${
                  idx === i ? "w-8 bg-[#C5A574]" : "w-1.5 bg-[#172B25]/25"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center border border-[#172B25]/25 text-[#172B25] transition-colors hover:border-[#C5A574] hover:text-[#C5A574]"
          >
            <ChevronRight size={18} />
          </button>
        </div>
        <p className="mt-8 text-xs text-[#242521]/45">
          Illustrative sample content — not verified customer reviews.
        </p>
      </div>
    </section>
  );
}