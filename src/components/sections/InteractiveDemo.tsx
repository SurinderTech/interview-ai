import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function InteractiveDemo() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <Eyebrow color="purple">See it in action</Eyebrow>
          <h2 className="mt-5 text-[34px] font-bold leading-[1.15] tracking-tight text-white sm:text-[44px]">
            Not a demo. The real interview.
          </h2>
          <p className="mt-4 text-[17px] leading-[1.6] text-[var(--color-text-secondary)]">
            Voice, transcript, and evaluation — all running live while you
            talk.
          </p>
        </div>

        <div className="group relative mx-auto mt-14 max-w-[920px]">
          <div className="overflow-hidden rounded-[var(--radius-video)] glass shadow-soft transition-transform duration-300 ease-out group-hover:scale-[1.01]">
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

          {/* Analytics overlay cards */}
          <div className="absolute -bottom-6 -right-4 hidden w-[200px] rounded-[var(--radius-card)] glass p-4 shadow-soft sm:block md:-right-10">
            <p className="text-[11px] font-medium text-[var(--color-text-muted)]">
              Recommendation
            </p>
            <p className="mt-1.5 text-[13.5px] font-medium leading-snug text-white">
              Strong on React fundamentals — focus next on system design.
            </p>
          </div>

          <div className="absolute -top-6 -left-4 hidden rounded-[var(--radius-card)] glass px-4 py-3 shadow-soft sm:block md:-left-10">
            <p className="text-[11px] font-medium text-[var(--color-text-muted)]">
              Confidence score
            </p>
            <p className="mt-0.5 text-[20px] font-bold text-[var(--color-purple)]">
              82%
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
