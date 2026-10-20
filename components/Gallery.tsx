import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    alt: "Infinity pool reflecting a thatched pavilion at dusk",
    span: "col-span-2 sm:col-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    alt: "Turquoise water meeting a pale sandy shoreline",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80",
    alt: "Palm fronds overhanging a quiet beach at golden hour",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=900&q=80",
    alt: "Candle lanterns lining a resort pool deck at night",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=80",
    alt: "Wooden boat drifting on calm open water",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=1200&q=80",
    alt: "Aerial view of a tropical coastline and reef",
    span: "col-span-2 sm:col-span-2 lg:col-span-2",
  },
];

export default function Gallery() {
  const { ref, visible } = useReveal();
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () =>
      setIndex((i) => (i === null ? i : (i - 1 + IMAGES.length) % IMAGES.length)),
    []
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % IMAGES.length)),
    []
  );

  useEffect(() => {
    if (index === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, prev, next]);

  return (
    <section id="gallery" className="bg-[#F8F5EF] py-20 sm:py-24 lg:py-36">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div
          className={`mb-10 transition-all duration-1000 sm:mb-14 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
            <span className="h-px w-8 bg-[#C5A574] sm:w-10" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A574] sm:text-[11px] sm:tracking-[0.4em]">
              Destination Gallery
            </span>
          </div>
          <h2 className="max-w-2xl font-serif text-3xl leading-tight text-[#172B25] sm:text-5xl lg:text-6xl">
            Moments from the island.
          </h2>
        </div>

        <div className="grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 lg:grid-cols-4 lg:auto-rows-[220px]">
          {IMAGES.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setIndex(i)}
              className={`group relative overflow-hidden ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#172B25]/0 transition-colors duration-500 group-hover:bg-[#172B25]/25" />
            </button>
          ))}
        </div>
      </div>

      {index !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#172B25]/95 p-4"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close lightbox"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center text-[#F8F5EF] transition-colors hover:text-[#C5A574] sm:right-6 sm:top-6"
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-1 z-10 flex h-12 w-12 items-center justify-center text-[#F8F5EF] transition-colors hover:text-[#C5A574] sm:left-4 lg:left-10"
          >
            <ChevronLeft size={34} />
          </button>
          <figure
            className="max-h-[85vh] w-full max-w-5xl px-10 sm:px-0"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={IMAGES[index].src}
              alt={IMAGES[index].alt}
              className="mx-auto max-h-[70vh] w-auto max-w-full object-contain sm:max-h-[78vh]"
            />
            <figcaption className="mt-4 text-center text-xs text-[#F8F5EF]/70 sm:text-sm">
              {IMAGES[index].alt} · {index + 1} / {IMAGES.length}
            </figcaption>
          </figure>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-1 z-10 flex h-12 w-12 items-center justify-center text-[#F8F5EF] transition-colors hover:text-[#C5A574] sm:right-4 lg:right-10"
          >
            <ChevronRight size={34} />
          </button>
        </div>
      )}
    </section>
  );
}