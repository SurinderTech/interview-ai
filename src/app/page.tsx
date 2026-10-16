import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ForWhom } from "@/components/sections/ForWhom";
import { CareerCategories } from "@/components/sections/CareerCategories";
import { FeaturesNew } from "@/components/sections/FeaturesNew";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SkillsTracker } from "@/components/sections/SkillsTracker";
import { FAQNew } from "@/components/sections/FAQNew";
import { FinalCTANew } from "@/components/sections/FinalCTANew";
import { Footer } from "@/components/sections/Footer";
import { ThreeBackground } from "@/components/sections/ThreeBackground";

export default function Home() {
  return (
    <>
      {/* Global Three.js particle field — fixed behind everything */}
      <ThreeBackground />

      <Navbar />
      <main className="relative z-10">
        {/* 1. Hero — live AI interviewer */}
        <Hero />

        {/* 2. For Whom — students / job seekers / professionals */}
        <ForWhom />

        {/* 3. Career categories — pick your path */}
        <CareerCategories />

        {/* 4. Features — what makes us different */}
        <FeaturesNew />

        {/* 5. How It Works — 5-step timeline */}
        <HowItWorks />

        {/* 6. AI Skills Tracker — live confidence score + weak area map */}
        <SkillsTracker />

        {/* 7. FAQ */}
        <FAQNew />

        {/* 8. Final CTA */}
        <FinalCTANew />
      </main>

      <Footer />
    </>
  );
}
