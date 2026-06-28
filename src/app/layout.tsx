import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "InterviewAI — Practice smarter. Interview better.",
  description:
    "InterviewAI is the AI-powered platform for interview preparation — live mock interviews, instant feedback, and a roadmap that tracks your progress to confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#09090B] text-white">
        {children}
      </body>
    </html>
  );
}
