import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const reviews = [
  {
    name: "Aisha & Hamza",
    role: "Walima · Chicago",
    text: "Mumtaz transformed our reception into a fairytale. Every petal, every drape — flawless. Guests are still talking about the floral arch!",
  },
  {
    name: "Rabia Khan",
    role: "Mehndi Night",
    text: "The team brought the warmth of Hyderabad to our backyard. Marigolds, lanterns, and storytelling decor. Truly heritage in motion.",
  },
  {
    name: "The Siddiqui Family",
    role: "Nikah Ceremony",
    text: "Royal, elegant, on-time, and within budget. Their craftsmanship has 200 years of soul behind it — and it shows.",
  },
  {
    name: "Sana Ahmed",
    role: "Sanchak Setup",
    text: "Easily the most beautiful Sanchak setup I've ever seen. Cinematic without losing tradition. We felt like royalty.",
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle eyebrow="Kind Words" title="Loved by Families Across America" />

        <div className="relative mt-16 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto max-w-3xl rounded-3xl glass p-8 md:p-12 text-center shadow-soft"
            >
              <Quote className="mx-auto text-gold" size={36} />
              <p className="mt-6 font-display text-2xl md:text-3xl leading-relaxed text-foreground/90">
                "{reviews[idx].text}"
              </p>
              <div className="mt-8 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <div className="mt-4 font-medium">{reviews[idx].name}</div>
              <div className="text-sm text-muted-foreground">{reviews[idx].role}</div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Show review ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === idx ? "w-8 bg-gradient-gold" : "w-2 bg-border hover:bg-gold/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
