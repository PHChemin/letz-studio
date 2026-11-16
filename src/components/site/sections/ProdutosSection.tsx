import { Reveal } from '@/components/site/Reveal'
import { LINKS } from '@/lib/links'

export function ProdutosSection() {
  return (
    <section
      id="produtos"
      className="section-band overflow-x-clip section-pad"
    >
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "url('/images/pattern-waves.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden
      />

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
          <p className="mt-4 max-w-3xl text-lg text-ink-muted md:text-xl">
            Modelos prontos no Canva — personalize e adapte à sua identidade.
            Disponível na Hotmart.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <article
            id="creative-pack"
            className="scroll-mt-28 overflow-hidden rounded-[1.75rem] border border-ink/10 bg-surface shadow-sticker-sm"
          >
            <div className="grid md:grid-cols-[minmax(0,18rem)_1fr] lg:grid-cols-[minmax(0,22rem)_1fr]">
              <div className="bg-charcoal">
                <img
                  src="/images/templates/creative-pack.jpg"
                  alt="Creative Pack — templates para maquiagem e lash designer"
                  className="h-auto w-full object-cover"
                  loading="lazy"
                  width={1080}
                  height={1350}
                />
              </div>

              <div className="flex flex-col justify-center p-6 md:p-10">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                  Kit único · 28 templates
                </p>
                <h3 className="mt-3 font-display text-3xl md:text-4xl">
                  Creative Pack
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
                  Templates para designers e social medias, nicho de maquiagem e
                  lash designer. Modelos prontos para editar e personalizar —
                  materiais para utilizar como inspiração e adaptar à sua
                  identidade visual.
                </p>
                <div className="mt-8">
                  <a
                    href={LINKS.hotmart.creativePack}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-charcoal shadow-pop transition hover:bg-accent-hover"
                  >
                    Comprar na Hotmart →
                  </a>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
