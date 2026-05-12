import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ScrollToTop } from "@/components/site/ScrollToTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mumtaz Company Inc. — Luxury Wedding & Event Decorations | Chicago" },
      {
        name: "description",
        content:
          "Mumtaz Company Inc. — 200 years of heritage in luxury South Asian wedding and event decorations. Mayun, Mehndi, Nikah, Walima specialists in Chicago.",
      },
      { name: "keywords", content: "wedding decoration Chicago, South Asian wedding, mehndi setup, walima reception, mumtaz company" },
      { property: "og:title", content: "Mumtaz Company Inc. — Luxury Wedding Decorations" },
      { property: "og:description", content: "200 years of heritage in luxury wedding and cultural event decorations." },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
