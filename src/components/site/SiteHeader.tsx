import { useEffect, useRef, useState } from 'react'
import { Menu } from 'lucide-react'
import { WhatsAppCta } from '@/components/site/WhatsAppCta'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '#servicos', id: 'servicos', label: 'Serviços' },
  { href: '#produtos', id: 'produtos', label: 'Templates' },
  { href: '#sobre', id: 'sobre', label: 'Sobre' },
  { href: '#trabalhos', id: 'trabalhos', label: 'Trabalhos' },
  { href: '#feedbacks', id: 'feedbacks', label: 'Feedbacks' },
  { href: '#contato', id: 'contato', label: 'Contato' },
] as const

const SECTION_IDS = NAV_LINKS.map((l) => l.id)

function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) setActive(visible[0].target.id)
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0, 0.15, 0.35, 0.55],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}

/** Hide while scrolling down; show again when scrolling up (or near top). */
function useScrollDirection() {
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    lastY.current = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      const delta = y - lastY.current

      if (y < 48) {
        setHidden(false)
      } else if (delta > 6) {
        setHidden(true)
      } else if (delta < -6) {
        setHidden(false)
      }

      lastY.current = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return hidden
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)
  const hidden = useScrollDirection()

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <div
        className={cn(
          'mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 pt-5 transition-all duration-300 ease-out md:px-10 md:pt-6',
          hidden
            ? 'pointer-events-none -translate-y-4 opacity-0'
            : 'pointer-events-auto translate-y-0 opacity-100',
        )}
      >
        {/* Logo flutuante */}
        <a
          href="/"
          className="inline-flex h-12 items-center rounded-full border border-ink/8 bg-paper-deep px-3 transition hover:border-ink/15"
          aria-label="Letz Studio — início"
        >
          <img
            src="/images/logo-nav.png"
            alt="Letz Studio"
            className="h-9 w-auto md:h-10"
            width={120}
            height={56}
          />
        </a>

        {/* Dock de navegação — desktop, alinhado à direita */}
        <nav
          className="hidden h-12 items-center gap-0.5 rounded-full border border-ink/8 bg-paper-deep px-1.5 md:flex"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map(({ href, id, label }) => {
            const isActive = active === id
            return (
              <a
                key={href}
                href={href}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200',
                  isActive
                    ? 'text-accent'
                    : 'text-ink/65 hover:text-ink',
                )}
              >
                {label}
              </a>
            )
          })}
        </nav>

        {/* Mobile — sheet */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex h-12 items-center gap-2 rounded-full border border-ink/8 bg-paper-deep px-4 text-base font-medium text-ink transition hover:border-ink/15 hover:text-accent md:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="size-4" aria-hidden />
            Menu
          </SheetTrigger>

          <SheetContent
            side="right"
            className="pointer-events-auto w-[min(100%,20rem)] border-l border-ink/10 bg-paper text-ink sm:max-w-sm"
          >
            <SheetHeader className="border-b border-ink/8 px-5 pb-4 pt-2">
              <SheetTitle className="font-display text-2xl text-ink">
                Menu
              </SheetTitle>
              <SheetDescription className="font-script text-xl text-accent">
                Cada detalhe importa!
              </SheetDescription>
            </SheetHeader>

            <nav
              className="flex flex-1 flex-col gap-1 px-3 py-4"
              aria-label="Navegação mobile"
            >
              {NAV_LINKS.map(({ href, id, label }) => (
                <SheetClose asChild key={href}>
                  <a
                    href={href}
                    aria-current={active === id ? 'true' : undefined}
                    className={cn(
                      'rounded-xl px-4 py-3 text-lg font-medium transition',
                      active === id
                        ? 'bg-paper-deep text-accent'
                        : 'text-ink/85 hover:bg-paper-deep hover:text-accent',
                    )}
                  >
                    {label}
                  </a>
                </SheetClose>
              ))}
            </nav>

            <SheetFooter className="border-t border-ink/8 px-5">
              <SheetClose asChild>
                <WhatsAppCta size="md" className="w-full" />
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
