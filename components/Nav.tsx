import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { id: "discover", label: "Discover" },
  { id: "resort", label: "The Resort" },
  { id: "experiences", label: "Experiences" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export default function Nav({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("discover");

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean
    ) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-[#172B25]/95 backdrop-blur-md shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-10">
        <button
          onClick={() => {
            setOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex flex-col items-start leading-none"
        >
          <span className="font-serif text-xl tracking-[0.3em] text-[#F8F5EF] transition-colors group-hover:text-[#C5A574] sm:text-2xl sm:tracking-[0.35em]">
            AURELIA
          </span>
          <span className="mt-1 text-[9px] tracking-[0.35em] text-[#C5A574]/80 sm:text-[10px] sm:tracking-[0.4em]">
            THE ART OF ESCAPE
          </span>
        </button>

        <nav className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`relative text-xs uppercase tracking-[0.22em] transition-colors ${
                active === l.id
                  ? "text-[#C5A574]"
                  : "text-[#F8F5EF]/80 hover:text-[#F8F5EF]"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-px bg-[#C5A574] transition-all duration-300 ${
                  active === l.id ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => go("contact")}
            className="hidden border border-[#C5A574]/70 px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-[#C5A574] transition-all duration-300 hover:bg-[#C5A574] hover:text-[#172B25] lg:block"
          >
            Plan Your Escape
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center text-[#F8F5EF] lg:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden bg-[#172B25]/98 backdrop-blur-md transition-all duration-500 lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-6 sm:px-6">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="border-b border-[#F8F5EF]/10 py-4 text-left text-sm uppercase tracking-[0.2em] text-[#F8F5EF]/85 transition-colors hover:text-[#C5A574]"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go("contact")}
            className="mt-5 border border-[#C5A574] py-4 text-xs uppercase tracking-[0.2em] text-[#C5A574]"
          >
            Plan Your Escape
          </button>
        </nav>
      </div>
    </header>
  );
}