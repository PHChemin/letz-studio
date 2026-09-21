export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/8 bg-paper px-6 py-10 text-base text-ink-muted md:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-display text-2xl text-accent">Letz</span>
          <span className="ml-1 text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            Studio
          </span>{' '}
          · {year}
        </p>
        <p className="font-script text-2xl text-accent">feito com muito ♥</p>
      </div>
    </footer>
  )
}
