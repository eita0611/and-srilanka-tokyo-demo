import { About } from "@/components/About";
import { Access } from "@/components/Access";
import { DemoStrip } from "@/components/DemoStrip";
import { Dishes } from "@/components/Dishes";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MobileActionBar } from "@/components/MobileActionBar";
import { RevealObserver } from "@/components/RevealObserver";
import { Story } from "@/components/Story";
import { site, store } from "@/data/store";

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: store.name,
  alternateName: store.formerName,
  servesCuisine: ["スリランカ料理", "カレー"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
    streetAddress: store.address,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: store.coordinates.lat,
    longitude: store.coordinates.lng,
  },
  openingHours: `Mo-Su ${store.hours.open}-${store.hours.close}`,
  url: site.url,
  sameAs: [store.links.instagram.url],
};

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        本文へ移動
      </a>
      {site.isDemo ? (
        <DemoStrip />
      ) : (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
      )}
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Dishes />
        <Story />
        <Gallery />
        <Access />
      </main>
      <Footer />
      <MobileActionBar />
      <RevealObserver />
    </>
  );
}
