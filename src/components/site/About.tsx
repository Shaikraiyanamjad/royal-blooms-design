import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionTitle } from "./SectionTitle";
import g3 from "@/assets/gallery/g3.png";
import g2 from "@/assets/gallery/g2.png";

const milestones = [
  { year: "1825", title: "Karkhana Abbasiya", desc: "Founded in the old city of Hyderabad, India." },
  { year: "1955", title: "Shalimar Furniture", desc: "The chain continued for over 70 years of craftsmanship." },
  { year: "2018", title: "Mumtaz Company Inc.", desc: "Bringing our cultural heritage to the United States." },
  { year: "Today", title: "Memories that last", desc: "Specialists in complete marriage and party decorations." },
];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now();
          const dur = 1600;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Our Heritage"
          title="About Mumtaz Company Inc."
          subtitle="A legacy of artistry, tradition and celebration — passed down through seven generations."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-gold opacity-20 blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <img src={g3} alt="Heritage decoration" className="h-72 w-full rounded-2xl object-cover shadow-luxe" loading="lazy" />
              <img src={g2} alt="Floral wedding stage" className="mt-10 h-72 w-full rounded-2xl object-cover shadow-luxe" loading="lazy" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5 text-foreground/85 leading-relaxed"
          >
            <p>
              We provide a number of different setups and styles to your occasions. Along with stage
              decorations, we also provide natural and artificial flower setups, various wedding services
              like catering for all occasions of any size. We make a difference to your occasions and
              make it a complete memorable event.
            </p>
            <p>
              <strong className="text-foreground">Mumtaz Company Inc.</strong> was founded 200 years ago
              by the name <em className="text-gold">"Karkhana Abbasiya"</em> in the old city of Hyderabad,
              India. The chain continued by the name <em className="text-gold">Shalimar Furniture</em>,
              a 70-year-old company. Now, we are in the US to spread our cultural heritage since seven years.
            </p>
            <p>
              We are specialists in complete marriage and party decorations. Our work is unique and
              makes a memorable place in all hearts — leaving our ancestral insignia.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { v: 200, s: "+", l: "Years of Heritage" },
                { v: 1500, s: "+", l: "Events Designed" },
                { v: 100, s: "%", l: "Handcrafted" },
              ].map((m) => (
                <div key={m.l} className="rounded-2xl glass p-5 text-center">
                  <div className="font-display text-3xl md:text-4xl text-gradient-gold">
                    <Counter to={m.v} suffix={m.s} />
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">{m.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <div className="gold-divider mx-auto w-40" />
          <h3 className="mt-10 text-center font-display text-3xl md:text-4xl">A Lineage of Craft</h3>
          <div className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-gold to-transparent lg:block" />
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative rounded-2xl glass p-6 text-center"
              >
                <div className="mx-auto -mt-12 grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-primary-foreground font-display shadow-luxe">
                  {i + 1}
                </div>
                <div className="mt-4 font-display text-2xl text-gold">{m.year}</div>
                <div className="mt-1 font-medium">{m.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
