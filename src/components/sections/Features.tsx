import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const FEATURES = [
  {
    title: "Resume review",
    description: "Get a breakdown of strengths and gaps before you even start practicing.",
    icon: <path d="M9 12h6m-6 4h6m-7 5h8a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />,
  },
  {
    title: "LinkedIn review",
    description: "See how your profile reads to a recruiter, and what to fix first.",
    icon: <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />,
  },
  {
    title: "Voice interview",
    description: "Speak your answers out loud and get evaluated the way a real panel would.",
    icon: <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3zM19 10v2a7 7 0 01-14 0v-2M12 19v4" />,
  },
  {
    title: "Adaptive questions",
    description: "Every follow-up depends on what you just said — not a fixed script.",
    icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  },
  {
    title: "Company interviews",
    description: "Practice the actual format and style used by specific companies.",
    icon: <path d="M3 21h18M5 21V7l8-4 8 4v14M9 9v.01M9 13v.01M9 17v.01M15 9v.01M15 13v.01M15 17v.01" />,
  },
  {
    title: "Progress tracking",
    description: "Every interview is logged, scored, and compared to your last one.",
    icon: <path d="M3 3v18h18M7 14l4-4 4 4 5-6" />,
  },
  {
    title: "Roadmaps",
    description: "A clear next step after every session — never guess what to practice.",
    icon: <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.85V8.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />,
  },
  {
    title: "AI coach",
    description: "An always-on assistant that reviews patterns across all your interviews.",
    icon: <path d="M12 8V4H8M12 4l4 4M4 16h16M4 12h16M4 20h16" />,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <Eyebrow color="purple">Everything included</Eyebrow>
          <h2 className="mt-5 text-[34px] font-bold leading-[1.15] tracking-tight text-white sm:text-[44px]">
            One subscription. Every capability.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-panel)] border-subtle bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-[var(--color-card)] p-6 transition-colors duration-200 hover:bg-white/[0.03]"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-purple)"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {f.icon}
              </svg>
              <h3 className="mt-4 text-[15.5px] font-semibold text-white">
                {f.title}
              </h3>
              <p className="mt-1.5 text-[13.5px] leading-[1.5] text-[var(--color-text-secondary)]">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
