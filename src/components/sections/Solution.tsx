import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const STEPS = [
  {
    label: "Resume analysis",
    description: "Upload your resume — InterviewAI reads your experience and tailors questions to your actual background.",
    color: "var(--color-purple)",
  },
  {
    label: "AI interview",
    description: "Talk through real questions with a live AI interviewer that adapts based on how you answer.",
    color: "var(--color-blue)",
  },
  {
    label: "Evaluation",
    description: "Every answer is scored on technical depth, communication, and confidence — instantly.",
    color: "var(--color-green)",
  },
  {
    label: "Roadmap",
    description: "Get a clear, personal plan for what to practice next so every session moves you forward.",
    color: "var(--color-warning)",
  },
];

export function Solution() {
  return (
    <section id="solution" className="py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <Eyebrow color="blue">The solution</Eyebrow>
          <h2 className="mt-5 text-[34px] font-bold leading-[1.15] tracking-tight text-white sm:text-[44px]">
            One platform, start to offer.
          </h2>
          <p className="mt-4 text-[17px] leading-[1.6] text-[var(--color-text-secondary)]">
            InterviewAI connects every step of preparation into a single
            loop — so progress compounds instead of resetting each time.
          </p>
        </div>

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-[26px] top-0 hidden h-full w-px bg-white/[0.08] md:left-1/2 md:block" />

          <div className="space-y-10 md:space-y-0">
            {STEPS.map((step, i) => (
              <div
                key={step.label}
                className={`relative flex flex-col gap-5 md:flex-row md:items-center md:gap-0 md:py-8 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex items-center gap-4 md:w-1/2 md:justify-end md:pr-12">
                  <div
                    className={`flex w-full items-center gap-4 ${
                      i % 2 === 1 ? "md:flex-row-reverse md:text-left md:pl-12 md:pr-0" : "md:justify-end md:text-right"
                    }`}
                  >
                    <span
                      className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full text-[14px] font-bold text-white md:hidden"
                      style={{ background: step.color }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-[19px] font-semibold text-white">
                        {step.label}
                      </h3>
                      <p className="mt-1.5 max-w-[340px] text-[14.5px] leading-[1.55] text-[var(--color-text-secondary)] md:ml-auto">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* center dot for desktop timeline */}
                <span
                  className="absolute left-[26px] top-0 hidden h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-[#09090B] md:left-1/2 md:top-1/2 md:block md:-translate-y-1/2"
                  style={{ background: step.color }}
                />

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
