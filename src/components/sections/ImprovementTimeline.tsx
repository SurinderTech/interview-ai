import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const MILESTONES = [
  { label: "Interview #1", score: 42, note: "First attempt — nervous, unstructured answers." },
  { label: "Interview #5", score: 67, note: "Clearer structure, faster recall under pressure." },
  { label: "Interview #12", score: 91, note: "Confident, specific, ready for the real thing." },
];

export function ImprovementTimeline() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_1fr]">
          <div className="relative mx-auto w-full max-w-[360px] order-2 lg:order-1">
            <div className="overflow-hidden rounded-[var(--radius-video)] glass shadow-soft">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/media/progress-loop-poster.jpg"
              >
                <source src="/media/progress-loop.webm" type="video/webm" />
                <source src="/media/progress-loop.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Eyebrow color="green">Real progress</Eyebrow>
            <h2 className="mt-5 text-[34px] font-bold leading-[1.15] tracking-tight text-white sm:text-[44px]">
              Every interview moves the score.
            </h2>
            <p className="mt-4 max-w-[440px] text-[17px] leading-[1.6] text-[var(--color-text-secondary)]">
              Progress isn&rsquo;t a feeling here — it&rsquo;s a number you
              can watch climb, session after session.
            </p>

            <div className="mt-10 space-y-6">
              {MILESTONES.map((m) => (
                <div key={m.label} className="flex items-center gap-5">
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                    <svg width="56" height="56" viewBox="0 0 56 56" className="-rotate-90">
                      <circle cx="28" cy="28" r="23" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
                      <circle
                        cx="28"
                        cy="28"
                        r="23"
                        fill="none"
                        stroke="var(--color-green)"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 23 * (m.score / 100)} ${2 * Math.PI * 23}`}
                      />
                    </svg>
                    <span className="absolute text-[13px] font-bold text-white">
                      {m.score}%
                    </span>
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-white">
                      {m.label}
                    </p>
                    <p className="text-[13.5px] text-[var(--color-text-secondary)]">
                      {m.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
