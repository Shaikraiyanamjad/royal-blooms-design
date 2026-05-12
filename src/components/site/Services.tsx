import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import g7 from "@/assets/gallery/g7.png";
import g5 from "@/assets/gallery/g5.png";
import g8 from "@/assets/gallery/g8.png";
import g1 from "@/assets/gallery/g1.png";

const services = [
  {
    title: "Mayun (Manjhe)",
    img: g7,
    desc: "It's a tradition to put Haldi (Turmeric) before the marriage.",
  },
  {
    title: "Sanchak (Mehndi)",
    img: g5,
    desc: "It's a tradition to put Haldi (Turmeric) before the marriage.",
  },
  {
    title: "Nikah (Marriage)",
    img: g8,
    desc: "It's a tradition to put Haldi (Turmeric) before the marriage.",
  },
  {
    title: "Walima (Reception)",
    img: g1,
    desc: "It's a tradition to put Haldi (Turmeric) before the marriage.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Our Services"
          title="Curated Ceremonies, Crafted to Perfection"
          subtitle="Every ritual deserves an atmosphere as memorable as the moment itself."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl shadow-soft hover:shadow-luxe transition-all"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold-soft">Tradition {String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-2 font-display text-2xl">{s.title}</h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm text-ivory/80 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                  {s.desc}
                </p>
                <div className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-soft">
                  <span className="h-px w-6 bg-gold-soft" /> Learn more
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
