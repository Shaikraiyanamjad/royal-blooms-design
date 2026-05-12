import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import g1 from "@/assets/gallery/g1.png";
import g2 from "@/assets/gallery/g2.png";
import g3 from "@/assets/gallery/g3.png";
import g4 from "@/assets/gallery/g4.png";
import g5 from "@/assets/gallery/g5.png";
import g6 from "@/assets/gallery/g6.png";
import g7 from "@/assets/gallery/g7.png";
import g8 from "@/assets/gallery/g8.png";
import g9 from "@/assets/gallery/g9.png";

type Item = { src: string; cat: string; alt: string };

const items: Item[] = [
  { src: g1, cat: "Stage", alt: "Red floral arch wedding stage" },
  { src: g2, cat: "Floral", alt: "Peach floral wall with chandeliers" },
  { src: g3, cat: "Reception", alt: "Gold draped reception stage" },
  { src: g4, cat: "Stage", alt: "Lavender draped wedding stage" },
  { src: g5, cat: "Mehndi", alt: "Mehndi setup with lanterns" },
  { src: g6, cat: "Reception", alt: "Coral draped grand hall" },
  { src: g7, cat: "Mehndi", alt: "Outdoor marigold mehndi cabana" },
  { src: g8, cat: "Stage", alt: "Floral arch with petal aisle" },
  { src: g9, cat: "Nikah", alt: "Royal red and gold nikah stage" },
];

const categories = ["All", "Stage", "Floral", "Reception", "Mehndi", "Nikah"];

export function Gallery() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? items : items.filter((i) => i.cat === filter)),
    [filter]
  );

  const close = () => setOpen(null);
  const next = () => setOpen((i) => (i === null ? null : (i + 1) % filtered.length));
  const prev = () => setOpen((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));

  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Gallery"
          title="A Cinematic Portfolio of Celebrations"
          subtitle="From intimate Mehndi nights to grand receptions — explore the stages we've designed."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2 text-sm transition-all ${
                filter === c
                  ? "bg-gradient-gold text-primary-foreground shadow-luxe"
                  : "glass text-foreground/80 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]"
        >
          <AnimatePresence>
            {filtered.map((it, idx) => (
              <motion.button
                key={it.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setOpen(idx)}
                className="group relative mb-5 block w-full overflow-hidden rounded-2xl shadow-soft hover:shadow-luxe focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="w-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-ivory/85 px-3 py-1 text-[10px] uppercase tracking-widest text-foreground opacity-0 transition group-hover:opacity-100">
                  {it.cat}
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-foreground/85 p-4 backdrop-blur-md"
            onClick={close}
          >
            <button
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-ivory/90 text-foreground hover:bg-ivory"
              onClick={close}
              aria-label="Close"
            >
              <X />
            </button>
            <button
              className="absolute left-3 md:left-8 grid h-12 w-12 place-items-center rounded-full bg-ivory/90 text-foreground hover:bg-ivory"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
            >
              <ChevronLeft />
            </button>
            <button
              className="absolute right-3 md:right-8 grid h-12 w-12 place-items-center rounded-full bg-ivory/90 text-foreground hover:bg-ivory"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
            >
              <ChevronRight />
            </button>
            <motion.img
              key={filtered[open].src}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={filtered[open].src}
              alt={filtered[open].alt}
              className="max-h-[85vh] max-w-[92vw] rounded-2xl object-contain shadow-luxe"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
