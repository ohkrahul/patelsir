import AnimationEngine from "@/components/AnimationEngine";
import DesktopSidebar from "@/components/Navigation/DesktopSidebar";
import MobileNav from "@/components/Navigation/MobileNav";
import Hero from "@/components/Hero/Hero";
import Journey from "@/components/Journey/Journey";
import Explorations from "@/components/Explorations/Explorations";
import Curiosity from "@/components/Curiosity/Curiosity";
import Interests from "@/components/Interests/Interests";
import FutureCTA from "@/components/CTA/FutureCTA";
import Voices from "@/components/Voices/Voices";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <AnimationEngine />
      <DesktopSidebar />
      <MobileNav />
      <main className="page">
        <Hero />
        <Journey />
        <Explorations />
        <Curiosity />
        <Interests />
        <FutureCTA />
        <Voices />
        <Footer />
      </main>
    </>
  );
}
