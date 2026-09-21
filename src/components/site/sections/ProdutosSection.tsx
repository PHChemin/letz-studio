import { Reveal } from '@/components/site/Reveal'
import { BentoGrid } from '@/components/ui/bento-grid'
import { cn } from '@/lib/utils'
import { LINKS } from '@/lib/links'

const TEMPLATES = [
  {
    id: 'template-midia-kit',
    title: 'Template Mídia Kit',
    description:
      '100% Canva — kit visual pronto pra apresentar o trabalho com autoridade.',
    href: LINKS.hotmart.midiaKit,
    image: '/images/templates/midia-kit.jpg',
    imageAlt: 'Template Mídia Kit — Canva',
    className: 'col-span-1 md:col-span-2 md:row-span-2',
  },
  {
    id: 'template-social-media',
    title: 'Kit Social Media Viral',
    description: 'Posts editáveis com cara de tendência.',
    href: LINKS.hotmart.socialMedia,
    image: '/images/templates/social-media-viral.jpg',
    imageAlt: 'Kit Social Media Viral — templates editáveis',
    className: 'col-span-1',
  },
  {
    id: 'template-lash-designer',
    title: 'Lash Designer',
    description: 'Feed alinhado pra quem trabalha com cílios.',
    href: LINKS.hotmart.lash,
    image: '/images/templates/lash-designer.jpg',
    imageAlt: 'Template Lash Designer — Canva editável',
    className: 'col-span-1',
  },
  {
    id: 'template-glam-beauty',
    title: 'Glam & Beauty',
    description: 'Vibe glam pra lojas de maquiagem e beleza.',
    href: LINKS.hotmart.glam,
    image: '/images/templates/glam-beauty.jpg',
    imageAlt: 'Template Glam & Beauty — Canva editável',
    className: 'col-span-1 md:col-span-2',
  },
] as const

export function ProdutosSection() {
  return (
    <section
      id="produtos"
      className="relative overflow-hidden border-y border-ink/8 section-pad"
    >
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: "url('/images/pattern-waves.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-surface/90" aria-hidden />

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            Produtos
          </p>
        </Reveal>
        <Reveal>
          <h2 className="mt-3 text-4xl md:text-6xl">Templates editáveis</h2>
        </Reveal>
        <Reveal>
          <p className="mt-4 max-w-4xl text-lg text-ink-muted md:text-xl">
            Posts e artes pré-prontas no Canva — personalize e publique.
            Disponíveis na Hotmart.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <BentoGrid className="auto-rows-[11rem] grid-cols-1 gap-3 sm:grid-cols-2 md:auto-rows-[10.5rem] md:grid-cols-3 md:gap-4">
            {TEMPLATES.map((t) => (
              <a
                key={t.id}
                id={t.id}
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-ink/10 bg-ink shadow-[3px_3px_0_0_#fc549c] outline-none transition hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-accent',
                  t.className,
                )}
              >
                <img
                  src={t.image}
                  alt={t.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/10"
                  aria-hidden
                />
                <div className="relative z-10 p-4 md:p-5">
                  <h3 className="font-display text-xl text-paper md:text-2xl">
                    {t.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-paper/80">
                    {t.description}
                  </p>
                  <span className="mt-3 inline-flex text-sm font-semibold text-accent transition group-hover:text-blush">
                    Comprar na Hotmart →
                  </span>
                </div>
              </a>
            ))}
          </BentoGrid>
        </Reveal>
      </div>
    </section>
  )
}
