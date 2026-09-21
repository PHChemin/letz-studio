import type { ReactNode } from 'react'
import { Reveal } from '@/components/site/Reveal'
import { LetzMagicCard } from '@/components/site/LetzMagicCard'
import { OutlineCta } from '@/components/site/OutlineCta'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import { LINKS } from '@/lib/links'

type ServiceCard = {
  id: string
  index: string
  title: string
  description: ReactNode
  image: string
  imageAlt: string
  sticker: string
  stickerClass: string
  whatsapp: string
  cta: string
}

const SERVICES: ServiceCard[] = [
  {
    id: 'servico-posts',
    index: '01',
    title: 'Design para Posts',
    description: (
      <>
        Crie um feed{' '}
        <strong className="font-semibold text-ink">altamente estético</strong> com
        planos sob medida — carrosséis, estáticos e stories alinhados à sua marca.
      </>
    ),
    image: '/images/servicos/servico-posts.jpg',
    imageAlt: 'Ilustração — Design para Posts',
    sticker: '/images/sticker-produzindo.png',
    stickerClass: 'sticker-badge -right-2 -top-3 w-24 rotate-6 md:w-28',
    whatsapp: LINKS.whatsappPosts,
    cta: 'Quero saber mais',
  },
  {
    id: 'servico-identidade',
    index: '02',
    title: 'Identidade Visual',
    description: (
      <>
        Marcas fortes e memoráveis — do{' '}
        <strong className="font-semibold text-ink">logo às aplicações</strong> no
        Instagram, com personalidade e consistência.
      </>
    ),
    image: '/images/servicos/servico-identidade.jpg',
    imageAlt: 'Ilustração — Identidade Visual',
    sticker: '/images/sticker-sparkle.png',
    stickerClass: 'sticker-badge -right-1 -top-4 w-14 rotate-12 md:w-16',
    whatsapp: LINKS.whatsappIdentidade,
    cta: 'Quero minha identidade',
  },
  {
    id: 'servico-alinhamento',
    index: '03',
    title: 'Alinhamento Visual',
    description: (
      <>
        Tipografia, paleta e estilo para uma presença{' '}
        <strong className="font-semibold text-ink">reconhecível</strong> — mesmo
        sem um logo novo.
      </>
    ),
    image: '/images/servicos/servico-alinhamento.jpg',
    imageAlt: 'Ilustração — Alinhamento Visual',
    sticker: '/images/sticker-heart.png',
    stickerClass: 'sticker-badge -right-1 -top-2 w-14 -rotate-12',
    whatsapp: LINKS.whatsappAlinhamento,
    cta: 'Quero alinhar minha marca',
  },
  {
    id: 'servico-copys',
    index: '04',
    title: 'Posts & Copys',
    description: (
      <>
        Design + texto: artes com{' '}
        <strong className="font-semibold text-ink">copys e CTAs</strong> que
        conversam com o seu público.
      </>
    ),
    image: '/images/servicos/servico-copys.jpg',
    imageAlt: 'Ilustração — Posts e Copys',
    sticker: '/images/sticker-feito.png',
    stickerClass: 'sticker-badge -right-2 -top-1 w-28 rotate-6 md:w-32',
    whatsapp: LINKS.whatsappCopys,
    cta: 'Quero posts com copy',
  },
]

export function ServicosSection() {
  return (
    <section id="servicos" className="relative section-pad">
      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            Serviços
          </p>
        </Reveal>
        <Reveal>
          <h2 className="mt-3 text-4xl md:text-6xl">O que eu crio</h2>
        </Reveal>
        <Reveal>
          <p className="mt-4 max-w-4xl text-lg text-ink-muted md:text-xl">
            Do feed à identidade — me chama pra montarmos o que faz sentido pra
            você.
          </p>
        </Reveal>

        <ul className="mt-12 flex list-none flex-col gap-6 p-0 md:gap-8">
          {SERVICES.map((service, i) => {
            const reverse = i % 2 === 1
            return (
              <Reveal key={service.id} as="li" id={service.id} className="scroll-mt-28">
                <LetzMagicCard
                  className="rounded-[1.75rem]"
                  contentClassName="grid gap-0 overflow-hidden p-0 md:grid-cols-2"
                >
                  <figure
                    className={`relative aspect-[4/3] overflow-hidden bg-paper-deep md:aspect-auto md:min-h-[15rem] ${
                      reverse ? 'md:order-2' : ''
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <img
                      src={service.sticker}
                      alt=""
                      className={service.stickerClass}
                      aria-hidden
                    />
                  </figure>

                  <div
                    className={`relative flex flex-col justify-center px-6 py-8 md:px-10 md:py-10 ${
                      reverse ? 'md:order-1' : ''
                    }`}
                  >
                    <p className="font-sans text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                      {service.index} · Serviço
                    </p>
                    <h3 className="mt-2 font-display text-3xl text-ink md:text-4xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
                      {service.description}
                    </p>

                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      <InteractiveHoverButton
                        as="a"
                        href={service.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-accent/20 bg-paper text-ink"
                      >
                        {service.cta}
                      </InteractiveHoverButton>
                      <OutlineCta
                        href={LINKS.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="md"
                        animated={false}
                      >
                        Ver no Behance
                      </OutlineCta>
                    </div>
                  </div>
                </LetzMagicCard>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
