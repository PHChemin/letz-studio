import { Reveal } from '@/components/site/Reveal'
import { LINKS } from '@/lib/links'

export function CursoTeaserSection() {
  return (
    <section id="curso" className="relative border-t border-ink/8 section-pad">
      <img
        src="/images/sticker-sparkle.png"
        alt=""
        className="sticker-float left-6 top-14 hidden w-14 -rotate-12 md:block"
        aria-hidden
      />

      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <Reveal>
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            Curso
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl">
            Curso Particular de Design para Redes Sociais da{' '}
            <span className="text-accent">Letz</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted md:text-xl">
            Aprenda a criar posts profissionais utilizando Canva e Affinity, mesmo
            começando do zero. As aulas são individuais, com acompanhamento,
            exercícios práticos, material de apoio e certificado de conclusão.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={LINKS.cursoForm}
              className="rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-paper shadow-[4px_4px_0_0_#181818] transition hover:bg-accent-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero me inscrever
            </a>
            <a
              href={LINKS.whatsappCurso}
              className="rounded-full border-2 border-ink px-7 py-3.5 text-base font-semibold text-ink transition hover:bg-ink hover:text-paper"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tirar dúvidas
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-ink shadow-[8px_8px_0_0_#fc549c]">
            <img
              src="/images/Curso.png"
              alt="Curso particular de Design gráfico para redes sociais — Letz Studio"
              className="h-auto w-full"
              loading="lazy"
              width={1920}
              height={1080}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
