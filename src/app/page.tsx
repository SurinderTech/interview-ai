import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustedCompanies } from "@/components/sections/TrustedCompanies";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { InteractiveDemo } from "@/components/sections/InteractiveDemo";
import { CareerCategories } from "@/components/sections/CareerCategories";
import { AIInterviewers } from "@/components/sections/AIInterviewers";
import { AnalyticsPreview } from "@/components/sections/AnalyticsPreview";
import { Features } from "@/components/sections/Features";
import { ImprovementTimeline } from "@/components/sections/ImprovementTimeline";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedCompanies />
        <Problem />
        <Solution />
        <InteractiveDemo />
        <CareerCategories />
        <AIInterviewers />
        <AnalyticsPreview />
        <Features />
        <ImprovementTimeline />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
