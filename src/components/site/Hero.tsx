import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Calendar, Star } from "lucide-react";
import heroImg from "@/assets/hero-portrait.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 md:pt-28 pb-16 md:pb-24">
      {/* decorative ornaments */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-navy/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-12 lg:gap-12">
        {/* LEFT — text */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-beige px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-teal"
          >
            <Sparkles size={13} /> Heritage since 1825
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 font-display text-[2.6rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[5.25rem] text-navy"
          >
            Where Tradition
            <span className="block italic text-teal">Meets Celebration</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-5 max-w-xl text-base md:text-lg text-foreground/75 leading-relaxed"
          >
            Seven generations of artisans crafting unforgettable South Asian weddings
            and cultural events — from Mayun and Mehndi to Nikah and Walima.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-luxe transition-all hover:scale-105"
            >
              <Calendar size={16} /> Book Appointment
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full border border-navy/25 bg-transparent px-7 py-3.5 text-sm font-medium text-navy transition-all hover:bg-navy hover:text-primary-foreground"
            >
              Explore Services
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 grid grid-cols-3 max-w-lg gap-4 sm:gap-6"
          >
            {[
              { k: "200+", v: "Years heritage" },
              { k: "1500+", v: "Events designed" },
              { k: "5.0", v: "Avg. rating", icon: true },
            ].map((s) => (
              <div key={s.v} className="border-l border-teal/30 pl-3 sm:pl-4">
                <div className="flex items-baseline gap-1 font-display text-2xl sm:text-3xl text-navy">
                  {s.k}
                  {s.icon && <Star size={14} className="fill-teal text-teal" />}
                </div>
                <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — image card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 order-1 lg:order-2"
        >
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* frame ornament */}
            <div aria-hidden className="absolute -inset-3 rounded-[2rem] border border-teal/30" />
            <div aria-hidden className="absolute -bottom-5 -right-5 h-24 w-24 rounded-full bg-teal/15 blur-2xl" />

            <div className="relative overflow-hidden rounded-[1.75rem] shadow-luxe ring-1 ring-navy/10">
              <img
                src={heroImg}
                alt="Luxury South Asian wedding stage with navy and teal drapes"
                className="block h-auto w-full object-cover"
                width={896}
                height={1216}
              />
              {/* badge */}
              <div className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-navy border border-border">
                Karkhana Abbasiya · Est. 1825
              </div>
            </div>

            {/* floating chip */}
            <div className="absolute -bottom-6 left-6 hidden sm:flex items-center gap-3 rounded-2xl bg-ivory px-4 py-3 shadow-luxe border border-border">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-teal text-primary-foreground">
                <Sparkles size={16} />
              </div>
              <div className="leading-tight">
                <div className="text-xs font-medium text-navy">Handcrafted Décor</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Mayun · Mehndi · Nikah</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="gold-divider mx-auto mt-16 w-40" />
    </section>
  );
}
