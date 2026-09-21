import { Reveal } from '@/components/site/Reveal'
import { OutlineCta } from '@/components/site/OutlineCta'
import { WhatsAppCta } from '@/components/site/WhatsAppCta'
import { LINKS } from '@/lib/links'

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-paper-deep text-ink">
      <div className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col justify-center px-6 pb-16 pt-24 md:px-10 md:pb-20 md:pt-28">
        <Reveal>
          <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-[0.28em] text-ink/70">
            Letz Studio · Graphic designer
          </p>
        </Reveal>
        <Reveal>
          <h1 className="max-w-3xl text-5xl leading-[1.05] break-words md:text-8xl md:leading-[1.02]">
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
