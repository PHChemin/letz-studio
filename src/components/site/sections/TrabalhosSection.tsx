import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/site/Reveal'
import { BehanceIcon } from '@/components/site/icons'
import { LINKS } from '@/lib/links'

export function TrabalhosSection() {
  return (
    <section
      id="trabalhos"
      className="relative border-t border-ink/8 bg-paper-deep/50 section-pad"
    >
      <img
        src="/images/sticker-produzindo.png"
        alt=""
        className="sticker-float left-4 top-10 hidden w-32 -rotate-6 lg:block"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            Trabalhos
          </p>
        </Reveal>
        <Reveal>
          <h2 className="mt-3 text-4xl md:text-6xl">Feitos com muito ♥</h2>
        </Reveal>
        <Reveal>
          <p className="mt-4 max-w-4xl text-lg text-ink-muted md:text-xl">
            Identidades visuais, alinhamentos e posts. O portfólio completo — com
            todos os projetos organizados — está no Behance.
          </p>
        </Reveal>

        <Reveal className="mt-8">
          <a
            href={LINKS.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full max-w-xl items-center justify-between gap-4 rounded-full bg-ink px-5 py-4 text-paper transition hover:bg-ink/90 sm:px-6 sm:py-5"
          >
            <span className="inline-flex items-center gap-3.5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-paper text-ink sm:size-12">
                <BehanceIcon className="size-5 sm:size-6" />
              </span>
              <span className="text-left">
                <span className="block text-base font-semibold sm:text-lg">
                  Ver portfólio no Behance
                </span>
                <span className="mt-0.5 block text-sm font-normal text-paper/65">
                  Identidades visuais completas e organizadas
                </span>
              </span>
            </span>
            <ArrowUpRight className="size-5 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:size-6" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
