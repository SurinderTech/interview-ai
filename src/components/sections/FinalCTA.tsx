import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 aurora-bg opacity-60" />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-[680px] text-[36px] font-bold leading-[1.15] tracking-tight text-white sm:text-[48px]">
          Your next interview starts with this one.
        </h2>
        <p className="mx-auto mt-5 max-w-[480px] text-[17px] leading-[1.6] text-[var(--color-text-secondary)]">
          Three free mock interviews. No credit card. Start the moment
          you&rsquo;re ready.
        </p>
        <div className="mt-9 flex justify-center">
          <Button variant="primary" size="lg">
            Start practicing free
          </Button>
        </div>
      </Container>
    </section>
  );
}
