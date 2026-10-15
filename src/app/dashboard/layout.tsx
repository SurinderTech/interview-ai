import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard — InterviewAI",
  description: "Your personalized preparation dashboard. Track progress, practice and improve with AI-powered insights.",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
