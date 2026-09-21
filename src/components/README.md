# Component bank

Inventário do que já vem no projeto. Amplie aos poucos; prefira o que já está aqui.

## Site (`site/`) — landing Letz

| Component | File | Notes |
| --- | --- | --- |
| SiteHeader / SiteFooter | `SiteHeader.tsx`, `SiteFooter.tsx` | Nav + rodapé |
| Reveal | `Reveal.tsx` | Scroll reveal |
| LetzMagicCard | `LetzMagicCard.tsx` | MagicCard com tokens Letz |
| SectionBreak | `SectionBreak.tsx` | Divisor scrapbook |
| Sections | `sections/*` | Blocos da home |

## Originkit (`originkit/ui/`)

| Component | File | Notes |
| --- | --- | --- |
| Typewriter | `typewriter.tsx` | Bank |
| GlitchText | `glitch-text.tsx` | Bank |

```bash
npx originkit login
npx originkit add <nome>
```

## Magic UI / shadcn / Aceternity (`ui/`)

| Component | File | Source |
| --- | --- | --- |
| Button | `button.tsx` | shadcn/ui |
| Accordion | `accordion.tsx` | shadcn/ui |
| Sheet | `sheet.tsx` | shadcn/ui |
| Carousel | `carousel.tsx` | shadcn/ui (Embla) |
| Particles | `particles.tsx` | Magic UI |
| RetroGrid | `retro-grid.tsx` | Magic UI |
| ShimmerButton | `shimmer-button.tsx` | Magic UI |
| InteractiveHoverButton | `interactive-hover-button.tsx` | Magic UI |
| AnimatedGradientText | `animated-gradient-text.tsx` | Magic UI |
| BlurFade | `blur-fade.tsx` | Magic UI |
| TypingAnimation | `typing-animation.tsx` | Magic UI |
| DotPattern | `dot-pattern.tsx` | Magic UI |
| Marquee | `marquee.tsx` | Magic UI |
| Dock | `dock.tsx` | Magic UI |
| BentoGrid / BentoCard | `bento-grid.tsx` | Magic UI |
| NumberTicker | `number-ticker.tsx` | Magic UI |
| Lens | `lens.tsx` | Magic UI |
| MagicCard | `magic-card.tsx` | Magic UI |
| StickyScroll | `sticky-scroll-reveal.tsx` | Aceternity UI |
| ParallaxHeroImages | `parallax-hero-images.tsx` | Aceternity UI |

Mais sob demanda:

```bash
npx shadcn@latest add @magicui/<nome>
npx shadcn@latest add @aceternity/<nome>
npx shadcn@latest add <nome>
```

Registries em `components.json`: `@magicui`, `@aceternity`.

## Handmade (`handmade/`)

| Component | File |
| --- | --- |
| ClickEffects | `click-effects.tsx` |

## Util

- `src/lib/utils.ts` — `cn()` (clsx + tailwind-merge)
- `src/lib/links.ts` — URLs de contato / Hotmart / forms
