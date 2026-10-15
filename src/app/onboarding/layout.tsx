import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started — InterviewAI Onboarding",
  description: "Tell us what you're preparing for and we'll build a personalized roadmap just for you.",
};

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
