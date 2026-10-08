export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="section-band px-6 py-8 text-base text-ink-muted md:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-4">
          <img
            src="/images/logo-letz-studio-branco.png"
            alt="Letz Studio"
            width={640}
            height={333}
            className="h-12 w-auto"
          />
          <span className="text-sm font-semibold tracking-[0.14em] text-ink/80">
            {year}
          </span>
        </p>
        <p className="font-script text-2xl text-accent">feito com muito ♥</p>
      </div>
    </footer>
  )
}
