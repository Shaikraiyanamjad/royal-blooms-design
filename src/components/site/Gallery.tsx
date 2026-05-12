import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Plus, Maximize2 } from "lucide-react";
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

type Item = { src: string; cat: string; alt: string; title: string };

const items: Item[] = [
  { src: g1, cat: "Stage", alt: "Red floral arch wedding stage", title: "Crimson Bloom Arch" },
  { src: g2, cat: "Floral", alt: "Peach floral wall with chandeliers", title: "Peach Reverie" },
  { src: g3, cat: "Reception", alt: "Gold draped reception stage", title: "Golden Hour Hall" },
  { src: g4, cat: "Stage", alt: "Lavender draped wedding stage", title: "Lavender Mirage" },
  { src: g5, cat: "Mehndi", alt: "Mehndi setup with lanterns", title: "Lantern Soirée" },
  { src: g6, cat: "Reception", alt: "Coral draped grand hall", title: "Coral Cathedral" },
  { src: g7, cat: "Mehndi", alt: "Outdoor marigold mehndi cabana", title: "Marigold Cabana" },
  { src: g8, cat: "Stage", alt: "Floral arch with petal aisle", title: "Petal Procession" },
  { src: g9, cat: "Nikah", alt: "Royal red and gold nikah stage", title: "Royal Nikah" },
];

const categories = ["All", "Stage", "Floral", "Reception", "Mehndi", "Nikah"];

// Consistent uniform grid (mobile 1 col, tablet 2, desktop 3)

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
      {/* Decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full" style={{ background: "color-mix(in oklab, var(--blush) 55%, transparent)", filter: "blur(80px)" }} />
        <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full" style={{ background: "color-mix(in oklab, var(--sky) 55%, transparent)", filter: "blur(90px)" }} />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionTitle
          eyebrow="Portfolio"
          title="Stories Told Through Décor"
          subtitle="A curated bento of celebrations — each frame a memory designed by Mumtaz."
        />

        {/* Filter pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => {
            const active = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`relative rounded-full px-5 py-2 text-xs sm:text-sm font-medium uppercase tracking-[0.18em] transition-all ${
                  active
                    ? "text-primary-foreground shadow-soft"
                    : "text-foreground/70 hover:text-foreground border border-border bg-ivory/60"
                }`}
                style={active ? { backgroundColor: "var(--primary)" } : undefined}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Uniform responsive grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filtered.map((it, idx) => {
              return (
                <button
                  key={it.src}
                  onClick={() => setOpen(idx)}
                  className="group relative h-[320px] sm:h-[340px] lg:h-[380px] overflow-hidden rounded-[28px] focus:outline-none focus:ring-2 focus:ring-ring"
                  style={{
                    boxShadow: "0 18px 50px -25px color-mix(in oklab, var(--primary) 35%, transparent)",
                  }}
                >
                  {/* Image */}
                  <img
                    src={it.src}
                    alt={it.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
                  />

                  {/* Inner ornate frame */}
                  <span aria-hidden className="pointer-events-none absolute inset-2 rounded-[22px] ring-1 ring-inset ring-ivory/40 transition-opacity duration-500 group-hover:opacity-0" />

                  {/* Hover wash */}
                  <span aria-hidden className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(180deg, transparent 35%, color-mix(in oklab, var(--primary) 78%, transparent) 100%)",
                    }}
                  />

                  {/* Index pill */}
                  <span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground backdrop-blur">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {/* Category chip */}
                  <span
                    className="absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-foreground"
                    style={{ backgroundColor: "color-mix(in oklab, var(--blush) 75%, white)" }}
                  >
                    {it.cat}
                  </span>

                  {/* Hover content */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <h3 className="font-display text-2xl text-ivory leading-tight">{it.title}</h3>
                        <div className="mt-1 h-px w-10" style={{ background: "var(--blush)" }} />
                      </div>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ivory text-foreground transition-transform group-hover:rotate-45">
                        <Plus size={18} />
                      </span>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <span aria-hidden className="absolute -right-6 -top-6 h-16 w-16 rotate-45"
                    style={{ background: "color-mix(in oklab, var(--sky) 70%, white)" }}
                  />
                </button>
              );
            })}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-10 bg-border" />
          <span>Tap any frame to view in detail</span>
          <span className="h-px w-10 bg-border" />
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center p-4 backdrop-blur-md"
            style={{ background: "color-mix(in oklab, var(--primary) 80%, transparent)" }}
            onClick={close}
          >
            <button
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-ivory/95 text-foreground hover:bg-ivory"
              onClick={close}
              aria-label="Close"
            >
              <X />
            </button>
            <button
              className="absolute left-3 md:left-8 grid h-12 w-12 place-items-center rounded-full bg-ivory/95 text-foreground hover:bg-ivory"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
            >
              <ChevronLeft />
            </button>
            <button
              className="absolute right-3 md:right-8 grid h-12 w-12 place-items-center rounded-full bg-ivory/95 text-foreground hover:bg-ivory"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
            >
              <ChevronRight />
            </button>
            <motion.figure
              key={filtered[open].src}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[88vh] max-w-[94vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[open].src}
                alt={filtered[open].alt}
                className="max-h-[80vh] max-w-[94vw] rounded-2xl object-contain shadow-luxe"
              />
              <figcaption className="mt-3 flex items-center justify-between text-ivory">
                <div>
                  <div className="font-display text-xl">{filtered[open].title}</div>
                  <div className="text-xs uppercase tracking-[0.3em] opacity-80">{filtered[open].cat}</div>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs opacity-80">
                  <Maximize2 size={14} /> {open + 1} / {filtered.length}
                </div>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
