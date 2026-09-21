import {
  useEffect,
  useRef,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  as?: ElementType
} & HTMLAttributes<HTMLElement>

/** Scroll-in reveal — same behavior as the old data-reveal + IntersectionObserver. */
export function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.classList.add('reveal')

    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={className || undefined} {...rest}>
      {children}
    </Tag>
  )
}
