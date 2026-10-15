import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account — InterviewAI",
  description: "Join InterviewAI and start your personalized preparation journey for exams, interviews and professional assessments.",
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
