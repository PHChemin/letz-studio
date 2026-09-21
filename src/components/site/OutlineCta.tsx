import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type OutlineCtaProps = ComponentPropsWithoutRef<'a'> & {
  children: ReactNode
  size?: 'md' | 'lg'
  /** Soft fill hover — turn off next to a stronger primary CTA */
  animated?: boolean
}

/**
 * Secondary CTA — text only; optional fill hover for standalone use.
 */
export function OutlineCta({
  children,
  className,
  size = 'lg',
  animated = true,
  ...props
}: OutlineCtaProps) {
  if (!animated) {
    return (
      <a
        className={cn(
          'inline-flex items-center justify-center rounded-full border-2 border-ink/15 font-semibold text-ink/70',
          size === 'lg' ? 'px-7 py-3.5 text-base' : 'h-11 px-5 text-sm',
          className,
        )}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <a
      className={cn(
        'cta-outline group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-ink font-semibold text-ink',
        size === 'lg' ? 'px-7 py-3.5 text-base' : 'h-11 px-5 text-sm',
        className,
      )}
      {...props}
    >
      <span
        className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-300 ease-out group-hover:scale-y-100"
        aria-hidden
      />
      <span className="relative z-10 inline-flex items-center gap-2 transition-colors duration-300 group-hover:text-paper">
        {children}
      </span>
    </a>
  )
}
