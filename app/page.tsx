import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturedJourneys from "@/components/FeaturedJourneys";
import RouteSection from "@/components/RouteSection";
import Story from "@/components/Story";
import IndiaRegions from "@/components/IndiaRegions";
import Gallery from "@/components/Gallery";
import TravelTips from "@/components/TravelTips";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <FeaturedJourneys />
        <RouteSection />
        <Story />
        <IndiaRegions />
        <Gallery />
        <TravelTips />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
