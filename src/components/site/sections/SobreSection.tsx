import { Reveal } from '@/components/site/Reveal'
import {
  BehanceIcon,
  InstagramIcon,
  PinterestIcon,
} from '@/components/site/icons'
import { LINKS } from '@/lib/links'

export function SobreSection() {
  return (
    <section id="sobre" className="relative section-pad">
      <img
        src="/images/sticker-star-burst.png"
        alt=""
        className="sticker-float right-8 top-16 hidden w-16 rotate-[20deg] md:block"
        aria-hidden
      />

      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <Reveal>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-[2rem] bg-accent shadow-[8px_8px_0_0_#181818]">
              <img
                src="/images/portrait.jpg"
                alt="Leticia Silva — Letz Studio"
                className="h-full w-full object-cover"
                loading="lazy"
                width={800}
                height={800}
              />
            </div>
            <img
              src="/images/sticker-feito.png"
              alt=""
              className="pointer-events-none absolute -bottom-5 -right-3 z-30 w-44 rotate-6 drop-shadow-md md:-right-4 md:w-52"
              width={208}
              aria-hidden
            />
          </div>
        </Reveal>

        <Reveal>
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            Sobre
          </p>
          <h2 className="mt-3 text-4xl md:text-6xl">Oi, eu sou a Leticia</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted md:text-xl">
            Designer gráfica especializada em artes para redes sociais e identidade
            visual. Meu foco é criar marcas que se comuniquem de forma autêntica,
            estratégica e marcante.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted md:text-xl">
            Trabalho alinhando estética e propósito — traduzindo ideias em posts e
            identidades fortes e memoráveis. Feito com muito{' '}
            <span className="text-accent" aria-hidden>
              ♥
            </span>
            .
          </p>

          <nav
            aria-label="Portfólio e redes"
            className="mt-8 flex flex-wrap items-center gap-2.5"
          >
            <a
              href={LINKS.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2.5 rounded-full bg-ink pl-1.5 pr-5 text-sm font-semibold text-paper transition hover:bg-ink/85"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-paper text-ink">
                <BehanceIcon className="size-4" />
              </span>
              Behance
            </a>
            <a
              href={LINKS.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest Letz Studio"
              className="inline-flex size-12 items-center justify-center rounded-full bg-ink text-paper transition hover:bg-ink/85"
            >
              <PinterestIcon className="size-5" />
            </a>
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @letz_studio"
              className="inline-flex size-12 items-center justify-center rounded-full bg-ink text-paper transition hover:bg-ink/85"
            >
              <InstagramIcon className="size-5" />
            </a>
          </nav>
        </Reveal>
      </div>
    </section>
  )
}
