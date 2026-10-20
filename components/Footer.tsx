import { ArrowUp } from "lucide-react";

const LINKS = [
  { id: "discover", label: "Discover" },
  { id: "resort", label: "The Resort" },
  { id: "experiences", label: "Experiences" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-[#172B25] pt-16 pb-10 sm:pt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 border-b border-[#F8F5EF]/10 pb-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12 lg:pb-14">
          <div className="sm:col-span-2 lg:col-span-5">
            <span className="font-serif text-2xl tracking-[0.3em] text-[#F8F5EF] sm:text-3xl sm:tracking-[0.35em]">
              AURELIA
            </span>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#F8F5EF]/55">
              A fictional island retreat, imagined as a study in slow living,
              natural light, and the art of escape.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#C5A574] sm:text-[11px]">
              Explore
            </h4>
            <ul className="mt-5 space-y-3">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="text-sm text-[#F8F5EF]/60 transition-colors hover:text-[#C5A574]"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#C5A574] sm:text-[11px]">
              Follow
            </h4>
            <ul className="mt-5 space-y-3">
              {["Instagram", "Pinterest", "Journal"].map((s) => (
                <li key={s}>
                  <span className="cursor-default text-sm text-[#F8F5EF]/40">
                    {s} (placeholder)
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-[#F8F5EF]/40">
            © {year} Aurelia — A fictional portfolio concept. All content is
            illustrative.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-[#F8F5EF]/60 transition-colors hover:text-[#C5A574]"
          >
            Back to top
            <ArrowUp
              size={16}
              className="transition-transform group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}