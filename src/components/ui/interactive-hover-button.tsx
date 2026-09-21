import { ArrowRight } from 'lucide-react'
import type { ComponentPropsWithoutRef, ElementType } from 'react'

import { cn } from '@/lib/utils'

type InteractiveHoverButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: React.ReactNode
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

export function InteractiveHoverButton<T extends ElementType = 'button'>({
  as,
  children,
  className,
  ...props
}: InteractiveHoverButtonProps<T>) {
  const Comp = as ?? 'button'

  return (
    <Comp
      className={cn(
        'group relative w-auto cursor-pointer overflow-hidden rounded-full border border-ink/10 bg-paper p-2 px-6 text-center font-semibold text-ink',
        className,
      )}
      {...props}
    >
      <div className="relative z-10 flex items-center justify-center gap-2">
        <div className="h-2 w-2 rounded-full bg-accent transition-all duration-300 group-hover:scale-[100.8]" />
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-paper opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight className="size-4" />
      </div>
      <div
        className="absolute inset-0 z-0 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden
      />
    </Comp>
  )
}
