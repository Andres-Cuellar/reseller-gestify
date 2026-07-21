import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PlatformFeatures from "@/components/PlatformFeatures";
import WhatsappAddon from "@/components/WhatsappAddon";
import Ventajas from "@/components/Ventajas";
import Pricing from "@/components/Pricing";
import AddonsExtra from "@/components/AddonsExtra";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import StickyMobileCta from "@/components/StickyMobileCta";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <PlatformFeatures />
        <WhatsappAddon />
        <Ventajas />
        <Pricing />
        <AddonsExtra />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
