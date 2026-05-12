import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { SectionTitle } from "./SectionTitle";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Get In Touch"
          title="Let's Design Your Celebration"
          subtitle="Visit us by appointment, call, or send a note — we reply within 24 hours."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-4"
          >
            <InfoCard icon={<Phone />} title="Call Us">
              <a href="tel:6302054201" className="block hover:text-gold">630-205-4201</a>
              <a href="tel:6306893610" className="block hover:text-gold">630-689-3610</a>
            </InfoCard>
            <InfoCard icon={<Mail />} title="Email">
              <a href="mailto:mumtazcompany@yahoo.com" className="hover:text-gold">
                mumtazcompany@yahoo.com
              </a>
            </InfoCard>
            <InfoCard icon={<MapPin />} title="Showroom (By Appointment)">
              <p>2301 West Devon Avenue</p>
              <p>Chicago, Illinois 60659</p>
            </InfoCard>
            <InfoCard icon={<MapPin />} title="Office">
              <p>2301 West Devon Avenue</p>
              <p>Chicago, Illinois 60659</p>
            </InfoCard>
          </motion.div>

          {/* Form + Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 space-y-6"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 4000);
              }}
              className="rounded-3xl glass p-6 md:p-8 shadow-soft"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" />
                <Field label="Email" name="email" type="email" required className="md:col-span-2" />
                <Field label="Event Date" name="date" type="date" />
                <Field label="Service" name="service" placeholder="Mayun, Mehndi, Nikah, Walima…" />
                <div className="md:col-span-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-border bg-ivory/70 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                    placeholder="Tell us about your dream celebration…"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-luxe transition-transform hover:scale-105"
              >
                <Send size={16} /> {sent ? "Sent — we'll call you soon" : "Send Inquiry"}
              </button>
            </form>

            <div className="overflow-hidden rounded-3xl shadow-soft border border-border">
              <iframe
                title="Mumtaz Company location"
                src="https://www.google.com/maps?q=2301+West+Devon+Avenue+Chicago+IL+60659&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-20 overflow-hidden rounded-3xl bg-gradient-gold p-10 md:p-16 text-center text-primary-foreground shadow-luxe"
        >
          <div className="absolute inset-0 animate-shimmer opacity-40" />
          <div className="relative">
            <h3 className="font-display text-3xl md:text-5xl">Ready to begin your story?</h3>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">
              Reserve a private consultation at our Chicago showroom and let our designers craft your vision.
            </p>
            <a
              href="tel:6302054201"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ivory px-8 py-3.5 text-sm font-medium text-foreground transition-transform hover:scale-105"
            >
              <Phone size={16} /> Call 630-205-4201
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-2xl glass p-5 transition-transform hover:-translate-y-1">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-gold text-primary-foreground shadow-luxe">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-gold">{title}</div>
        <div className="mt-1 text-sm text-foreground/85 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className={className}>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-border bg-ivory/70 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
      />
    </div>
  );
}
