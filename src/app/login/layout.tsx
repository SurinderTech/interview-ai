import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In — InterviewAI",
  description: "Sign in to continue your AI-powered preparation journey for exams, interviews and professional assessments.",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
