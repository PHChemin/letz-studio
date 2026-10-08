import { MagicCard } from '@/components/ui/magic-card'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type LetzMagicCardProps = {
  children: ReactNode
  className?: string
  contentClassName?: string
  /** Pink border + deep-pink offset — “fav” packages */
  accent?: boolean
  /** Fixed deep-pink offset shadow instead of the pink hover shadow */
  charcoalShadow?: boolean
}

/**
 * MagicCard tuned to Letz identity: pink/charcoal gradient border,
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
          ? 'border-accent shadow-pop'
          : charcoalShadow
            ? 'border-ink/10 shadow-pop'
            : 'border-ink/10 shadow-none transition-shadow hover:shadow-sticker',
        className,
      )}
      gradientSize={240}
      gradientFrom="#f39bc4"
      gradientTo="#242424"
      gradientColor="rgba(243, 155, 196, 0.08)"
      gradientOpacity={0.5}
    >
      <div
        className={cn(
          'relative flex h-full flex-col bg-surface',
          contentClassName,
        )}
      >
        {children}
      </div>
    </MagicCard>
  )
}
