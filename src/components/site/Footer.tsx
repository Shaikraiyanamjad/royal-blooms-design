import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-primary-foreground font-display text-xl shadow-luxe">
                M
              </div>
              <div>
                <div className="font-display text-xl">Mumtaz Company Inc.</div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-gold">Heritage · Elegance · Tradition</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-muted-foreground leading-relaxed">
              Specialists in complete marriage and party decorations with over 200 years of cultural heritage —
              now serving the United States from Chicago.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Ic, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-10 w-10 place-items-center rounded-full glass transition-transform hover:-translate-y-1 hover:text-gold"
                >
                  <Ic size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-muted-foreground transition hover:text-gold">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone size={14} className="text-gold" /> 630-205-4201</li>
              <li className="flex items-center gap-2"><Phone size={14} className="text-gold" /> 630-689-3610</li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-gold" /> mumtazcompany@yahoo.com</li>
              <li className="pt-2">2301 West Devon Avenue<br />Chicago, IL 60659</li>
            </ul>
          </div>
        </div>

        <div className="gold-divider mt-12" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Mumtaz Company Inc. All rights reserved.</p>
          <p>Crafted with tradition · Designed with love</p>
        </div>
      </div>
    </footer>
  );
}
