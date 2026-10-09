export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="section-band px-6 py-8 text-base text-ink-muted md:px-10">
      <p className="mx-auto flex max-w-5xl items-center justify-center gap-4">
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
    </footer>
  )
}
