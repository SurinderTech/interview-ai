import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DashboardMockup } from "./DashboardMockup";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 md:pt-32"
    >
      <div className="aurora-bg pointer-events-none absolute inset-0" />

      <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
        {/* Left: copy */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[13px] font-medium text-[var(--color-text-secondary)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)]" />
            Trusted by candidates at 1,200+ companies
          </div>

          <h1 className="mt-6 text-[42px] font-bold leading-[1.08] tracking-[-0.02em] text-white sm:text-[52px] lg:text-[60px]">
            Practice interviews
            <br />
            like the real thing.
          </h1>

          <p className="mt-6 max-w-[480px] text-[18px] leading-[1.6] text-[var(--color-text-secondary)]">
            InterviewAI runs live mock interviews with an AI interviewer,
            scores every answer, and builds you a roadmap back to your next
            offer.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button variant="primary" size="lg">
              Start practicing free
            </Button>
            <Button variant="secondary" size="lg">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M8 5.5V18.5L19 12L8 5.5Z" fill="currentColor" />
              </svg>
              Watch demo
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2.5">
              {["#7C3AED", "#3B82F6", "#10B981", "#F59E0B"].map((c, i) => (
                <span
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-[#09090B]"
                  style={{ background: c }}
                />
              ))}
            </div>
            <p className="text-[14px] text-[var(--color-text-muted)]">
              <span className="font-semibold text-white">40,000+</span>{" "}
              interviews practiced this month
            </p>
          </div>
        </div>

        {/* Right: product visual */}
        <div className="relative">
          <div className="animate-float-slow">
            <DashboardMockup />
          </div>

          {/* Floating glass video card — real product-feel footage, used as ambient proof */}
          <div className="animate-float-slower absolute -bottom-12 -left-10 hidden w-[230px] overflow-hidden rounded-[var(--radius-video)] glass shadow-soft sm:block">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/media/hero-card-poster.jpg"
            >
              <source src="/media/hero-card.webm" type="video/webm" />
              <source src="/media/hero-card.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Floating stat chip */}
          <div className="absolute -top-6 -right-4 hidden rounded-[var(--radius-card)] glass px-4 py-3 shadow-soft sm:block">
            <p className="text-[11px] font-medium text-[var(--color-text-muted)]">
              Confidence
            </p>
            <p className="mt-0.5 text-[20px] font-bold text-[var(--color-green)]">
              +64%
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
