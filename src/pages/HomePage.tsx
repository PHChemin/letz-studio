import ClickEffects from '@/components/handmade/click-effects'
import { SectionBreak } from '@/components/site/SectionBreak'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { ContatoSection } from '@/components/site/sections/ContatoSection'
import { FeedbacksSection } from '@/components/site/sections/FeedbacksSection'
import { HeroSection } from '@/components/site/sections/HeroSection'
import { ProdutosSection } from '@/components/site/sections/ProdutosSection'
import { ServicosSection } from '@/components/site/sections/ServicosSection'
import { SobreSection } from '@/components/site/sections/SobreSection'
import { TrabalhosSection } from '@/components/site/sections/TrabalhosSection'

const LETZ_PINK = '#fc549c'

export default function HomePage() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-paper"
      >
        Ir para o conteúdo
      </a>

      <ClickEffects color={LETZ_PINK} effectSize={72} duration={0.45} />

      <SiteHeader />

      <main id="conteudo">
        <HeroSection />
        <SectionBreak />
        <ServicosSection />
        <ProdutosSection />
        <SobreSection />
        <TrabalhosSection />
        <FeedbacksSection />
        <ContatoSection />
      </main>

      <SiteFooter />
    </>
  )
}
