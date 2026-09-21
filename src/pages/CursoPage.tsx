import { Link } from 'react-router-dom'

/**
 * Placeholder for the dedicated course landing (`/curso`).
 * Content will be built in a follow-up on this PR / branch.
 */
export default function CursoPage() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center bg-paper-deep px-6 text-center text-ink">
      <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-accent">
        Em breve
      </p>
      <h1 className="mt-4 max-w-xl font-display text-4xl md:text-5xl">
        Página do curso
      </h1>
      <p className="mt-4 max-w-md text-lg text-ink-muted">
        Esta rota (`/curso`) está pronta para receber o conteúdo da landing do
        curso.
      </p>
      <Link
        to="/"
        className="mt-10 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-paper transition hover:bg-accent-hover"
      >
        Voltar ao início
      </Link>
    </main>
  )
}
