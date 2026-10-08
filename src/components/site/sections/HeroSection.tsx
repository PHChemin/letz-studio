import { Reveal } from '@/components/site/Reveal'
import { OutlineCta } from '@/components/site/OutlineCta'
import { WhatsAppCta } from '@/components/site/WhatsAppCta'
import { LINKS } from '@/lib/links'

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden text-ink">
      <div
        aria-hidden
        className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black_72%,transparent)]"
      >
        <img
          src="/banner.png"
          alt=""
          className="h-full w-full object-cover object-[78%_center] lg:object-left"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-paper/95 via-paper/82 to-paper/60 sm:via-paper/70 sm:to-paper/30 lg:from-paper/55 lg:via-paper/18 lg:to-transparent" />
      </div>
      <div className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col justify-center px-6 pb-16 pt-24 md:px-10 md:pb-20 md:pt-28">
        <Reveal>
          <p className="mb-3 whitespace-nowrap font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink/75 sm:text-sm sm:tracking-[0.28em]">
            Letz Studio · Graphic designer
          </p>
        </Reveal>
        <Reveal>
          <h1 className="max-w-sm text-5xl leading-[1.05] break-words sm:max-w-md sm:text-6xl lg:max-w-xl lg:text-7xl lg:leading-[1.02]">
            Ajudo sua marca
            <br />a ser <span className="text-accent">lembrada</span>.
          </h1>
        </Reveal>
        <Reveal>
          <p className="mt-6 max-w-lg font-script text-3xl text-accent md:text-4xl">
            Cada detalhe importa!
          </p>
        </Reveal>
        <Reveal>
          <div className="mt-10 flex flex-wrap gap-4">
            <WhatsAppCta href={LINKS.whatsapp} />
            <OutlineCta href="#servicos">Ver serviços</OutlineCta>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
