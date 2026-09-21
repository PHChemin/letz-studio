import { Reveal } from "@/components/site/Reveal";
import { Marquee } from "@/components/ui/marquee";

const FEEDBACKS = [
  "/images/feedbacks/feedback-01-card.jpg",
  "/images/feedbacks/feedback-02-card.jpg",
  "/images/feedbacks/feedback-03-card.jpg",
  "/images/feedbacks/feedback-04-card.jpg",
  "/images/feedbacks/feedback-05-card.jpg",
  "/images/feedbacks/feedback-06-card.jpg",
  "/images/feedbacks/feedback-07-card.jpg",
] as const;

function FeedbackCard({ src }: { src: string }) {
  return (
    <figure className="h-28 w-[9.5rem] shrink-0 overflow-hidden rounded-xl border border-ink/10 bg-paper-deep shadow-[2px_2px_0_0_#fc549c] sm:h-32 sm:w-[11rem]">
      <img
        src={src}
        alt="Feedback de cliente"
        className="h-full w-full object-cover object-center"
        loading="lazy"
      />
    </figure>
  );
}

export function FeedbacksSection() {
  return (
    <section id="feedbacks" className="relative overflow-hidden py-14 md:py-16">
      <img
        src="/images/sticker-feito.png"
        alt=""
        className="sticker-float right-6 top-8 hidden w-24 rotate-6 md:block"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <Reveal>
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            Feedbacks
          </p>
        </Reveal>
        <Reveal>
          <h2 className="mt-3 text-3xl md:text-5xl">O que as clientes dizem</h2>
        </Reveal>
      </div>

      <Reveal className="relative mt-8">
        <Marquee
          pauseOnHover
          repeat={3}
          className="[--duration:50s] [--gap:0.75rem] px-0 pb-3 pt-1"
        >
          {FEEDBACKS.map((src) => (
            <FeedbackCard key={src} src={src} />
          ))}
        </Marquee>

        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-paper via-paper/80 to-transparent md:w-16"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-paper via-paper/80 to-transparent md:w-16"
          aria-hidden
        />
      </Reveal>
    </section>
  );
}
