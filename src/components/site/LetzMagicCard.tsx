import { MagicCard } from '@/components/ui/magic-card'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type LetzMagicCardProps = {
  children: ReactNode
  className?: string
  contentClassName?: string
  /** Pink border + charcoal offset — “fav” packages */
  accent?: boolean
  /** Charcoal offset shadow (templates) instead of pink hover shadow */
  charcoalShadow?: boolean
}

/**
 * MagicCard tuned to Letz identity: pink/charcoal gradient glow,
 * scrapbook radius/shadow language kept on the shell.
 */
export function LetzMagicCard({
  children,
  className,
  contentClassName,
  accent = false,
  charcoalShadow = false,
}: LetzMagicCardProps) {
  return (
    <MagicCard
      className={cn(
        'h-full rounded-2xl border-2',
        accent
          ? 'border-accent shadow-[4px_4px_0_0_#181818]'
          : charcoalShadow
            ? 'border-ink/10 shadow-[4px_4px_0_0_#181818]'
            : 'border-ink/10 shadow-none transition-shadow hover:shadow-[4px_4px_0_0_#fc549c]',
        className,
      )}
      gradientSize={240}
      gradientFrom="#fc549c"
      gradientTo="#181818"
      gradientColor="rgba(252, 84, 156, 0.14)"
      gradientOpacity={0.5}
    >
      <div
        className={cn(
          'relative flex h-full flex-col',
          accent ? 'bg-paper-deep' : 'bg-paper',
          contentClassName,
        )}
      >
        {children}
      </div>
    </MagicCard>
  )
}
