import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Calendar } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Luxury wedding decoration with floral arch and chandelier"
          className="h-full w-full object-cover object-center"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* floating petals */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="absolute h-3 w-3 rounded-full bg-gradient-gold opacity-40"
          style={{
            left: `${(i * 13 + 5) % 95}%`,
            top: `${(i * 17 + 10) % 80}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 12, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-gold"
        >
          <Sparkles size={14} /> Heritage since 1825
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl text-ivory drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]"
        >
          Creating Memorable
          <span className="block italic" style={{ color: "var(--blush)" }}>Celebrations</span>
          <span className="block">With Tradition & Elegance</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-6 max-w-2xl text-base md:text-lg text-ivory/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
        >
          Specialists in complete marriage and party decorations with over 200 years of cultural heritage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-luxe transition-all hover:scale-105"
          >
            <Calendar size={16} /> Book Appointment
          </a>
          <a
            href="#services"
            className="group inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ivory/70 px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-all hover:bg-ivory"
          >
            Explore Services
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        <div className="gold-divider mt-16 w-40" />
      </div>
    </section>
  );
}
