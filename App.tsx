import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Resort from "@/components/Resort";
import Experiences from "@/components/Experiences";
import Gallery from "@/components/Gallery";
import Difference from "@/components/Difference";
import Testimonials from "@/components/Testimonials";
import Inquiry from "@/components/Inquiry";
import Footer from "@/components/Footer";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F8F5EF] text-[#242521] antialiased selection:bg-[#C5A574] selection:text-[#172B25]">
      <Nav scrolled={scrolled} />
      <main>
        <Hero />
        <Welcome />
        <Resort />
        <Experiences />
        <Gallery />
        <Difference />
        <Testimonials />
        <Inquiry />
      </main>
      <Footer />
    </div>
  );
}