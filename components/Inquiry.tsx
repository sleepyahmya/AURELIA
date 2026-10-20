import { useState } from "react";
import { Check } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

type Errors = Partial<Record<string, string>>;

export default function Inquiry() {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState({
    name: "",
    email: "",
    experience: "",
    arrival: "",
    guests: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (k: string, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Please enter a valid email address.";
    if (!form.experience)
      next.experience = "Please select a preferred experience.";
    if (!form.arrival) next.arrival = "Please choose an estimated arrival date.";
    if (!form.guests || Number(form.guests) < 1)
      next.guests = "Please enter at least one guest.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  const field =
    "w-full border border-[#172B25]/20 bg-[#F8F5EF] px-4 py-3 text-base text-[#242521] outline-none transition-colors focus:border-[#C5A574] sm:text-sm";

  return (
    <section id="contact" className="bg-[#F8F5EF] py-20 sm:py-24 lg:py-36">
      <div
        ref={ref}
        className={`mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 transition-all duration-1000 sm:px-6 lg:grid-cols-12 lg:gap-20 lg:px-10 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="lg:col-span-5">
          <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
            <span className="h-px w-8 bg-[#C5A574] sm:w-10" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A574] sm:text-[11px] sm:tracking-[0.4em]">
              Plan Your Escape
            </span>
          </div>
          <h2 className="font-serif text-3xl leading-tight text-[#172B25] sm:text-5xl">
            Your next unforgettable escape begins here.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[#242521]/70 sm:mt-6 sm:text-base">
            Tell us a little about the journey you have in mind. This is a
            fictional portfolio concept — your inquiry is a demo and is not
            transmitted, stored, or booked.
          </p>
        </div>

        <div className="lg:col-span-7">
          {sent ? (
            <div className="flex flex-col items-start border border-[#C5A574]/40 bg-[#E9E0D3]/60 p-6 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#172B25] text-[#C5A574]">
                <Check size={22} />
              </div>
              <h3 className="mt-6 font-serif text-2xl text-[#172B25]">
                Thank you, {form.name.split(" ")[0] || "friend"}.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#242521]/70">
                Your demo inquiry was validated successfully. No reservation has
                been made and nothing was sent — this is a portfolio
                demonstration only.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setForm({
                    name: "",
                    email: "",
                    experience: "",
                    arrival: "",
                    guests: "",
                    message: "",
                  });
                }}
                className="mt-8 border border-[#172B25] px-6 py-3 text-xs uppercase tracking-[0.2em] text-[#172B25] transition-colors hover:bg-[#172B25] hover:text-[#F8F5EF]"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#242521]/70 sm:text-[11px]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    className={field}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-xs text-red-700">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#242521]/70 sm:text-[11px]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    className={field}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-xs text-red-700">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#242521]/70 sm:text-[11px]">
                    Preferred Experience
                  </label>
                  <select
                    value={form.experience}
                    onChange={(e) => set("experience", e.target.value)}
                    className={field}
                  >
                    <option value="">Select…</option>
                    <option>Ocean & Sailing</option>
                    <option>Wellness & Spa</option>
                    <option>Island Dining</option>
                    <option>Nature & Exploration</option>
                  </select>
                  {errors.experience && (
                    <p className="mt-2 text-xs text-red-700">
                      {errors.experience}
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#242521]/70 sm:text-[11px]">
                    Arrival Date
                  </label>
                  <input
                    type="date"
                    value={form.arrival}
                    onChange={(e) => set("arrival", e.target.value)}
                    className={field}
                  />
                  {errors.arrival && (
                    <p className="mt-2 text-xs text-red-700">{errors.arrival}</p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#242521]/70 sm:text-[11px]">
                    Guests
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={form.guests}
                    onChange={(e) => set("guests", e.target.value)}
                    className={field}
                    placeholder="2"
                  />
                  {errors.guests && (
                    <p className="mt-2 text-xs text-red-700">{errors.guests}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#242521]/70 sm:text-[11px]">
                  Message (optional)
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                  className={field}
                  placeholder="Tell us about the escape you have in mind…"
                />
              </div>

              <button
                type="submit"
                className="w-full border border-[#172B25] bg-[#172B25] px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#F8F5EF] transition-colors hover:bg-[#C5A574] hover:text-[#172B25] sm:w-auto"
              >
                Submit Inquiry
              </button>
              <p className="text-xs text-[#242521]/50">
                Demo only — no data is transmitted or stored.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}