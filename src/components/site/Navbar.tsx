import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ivory shadow-soft border-b border-border" : "bg-ivory/95 border-b border-border/60"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8 md:py-4">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-navy text-primary-foreground font-display text-xl shadow-luxe ring-1 ring-teal/30">
            M
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg md:text-xl tracking-wide text-navy">Mumtaz Company</div>
            <div className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-teal">Heritage · Since 1825</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-foreground/75 hover:text-navy transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-teal after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-luxe transition-transform hover:scale-105"
        >
          Book Appointment
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-10 w-10 place-items-center rounded-full bg-beige text-navy border border-border"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-ivory border-t border-border"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-foreground/80 hover:bg-secondary hover:text-foreground transition"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-navy px-5 py-3 text-center text-primary-foreground shadow-luxe"
              >
                Book Appointment
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
