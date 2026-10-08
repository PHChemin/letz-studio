import { Mail } from 'lucide-react'
import { Reveal } from '@/components/site/Reveal'
import { OutlineCta } from '@/components/site/OutlineCta'
import { WhatsAppCta } from '@/components/site/WhatsAppCta'
import { BehanceIcon, InstagramIcon } from '@/components/site/icons'
import { Particles } from '@/components/ui/particles'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { LINKS } from '@/lib/links'

export function ContatoSection() {
  return (
    <section
      id="contato"
      className="section-band overflow-hidden"
    >
      <Particles
        className="absolute inset-0"
        quantity={48}
        ease={70}
        color="#f39bc4"
        size={0.45}
        staticity={40}
      />

      <div className="relative mx-auto max-w-5xl section-pad">
        <Reveal>
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            Contato
          </p>
        </Reveal>
        <Reveal>
          <h2 className="mt-3 text-4xl md:text-6xl">Vamos criar juntas?</h2>
        </Reveal>
        <Reveal>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-ink-muted md:text-xl">
            Quer fechar um orçamento? Responde o pré-briefing — e se ficar com
            qualquer dúvida, me chama no WhatsApp.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ShimmerButton
              as="a"
              href={LINKS.briefing}
              target="_blank"
              rel="noopener noreferrer"
              background="#f39bc4"
              shimmerColor="#fffafa"
              className="border-accent px-7 py-3.5 text-base font-semibold text-charcoal shadow-pop"
            >
              Preencher pré-briefing
            </ShimmerButton>

            <WhatsAppCta size="md" label="WhatsApp" />

            <OutlineCta
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              className="border-ink/25 bg-paper/70 backdrop-blur-sm"
            >
              <InstagramIcon className="size-4" />
              Instagram
            </OutlineCta>
            <OutlineCta
              href={LINKS.behance}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              className="border-ink/25 bg-paper/70 backdrop-blur-sm"
            >
              <BehanceIcon className="size-4" />
              Behance
            </OutlineCta>
            <OutlineCta
              href={LINKS.email}
              size="md"
              className="border-ink/25 bg-paper/70 backdrop-blur-sm"
            >
              <Mail className="size-4" />
              E-mail
            </OutlineCta>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
