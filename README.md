# Letz Studio

Landing do **Letz Studio** (design para social media) — **Vite + React + TypeScript + Tailwind CSS v4**, hospedagem via **GitHub Pages**.

- Site: [www.letzdesignstudio.com.br](https://www.letzdesignstudio.com.br)
- Instagram: [@letz_studio](https://www.instagram.com/letz_studio/)
- Rotas: `/` (home) · `/curso` (placeholder da landing do curso)

## Stack

| Camada | Escolha |
| --- | --- |
| UI | React 19 + TypeScript |
| Estilo | Tailwind v4 + tokens Letz / shadcn |
| Motion bank | Magic UI + Originkit + handmade |
| Build | Vite → `dist/` |
| Deploy | GitHub Actions → GitHub Pages |

```
código (React, Tailwind, deps)
        │
        ▼  vite build (+ 404.html para SPA)
     dist/
        │
        ▼  Actions
  GitHub Pages
```

## Começar

```bash
npm install
npm run dev
```

Abra o endereço do terminal (geralmente `http://localhost:5173`).

## Docs

| Arquivo | Uso |
| --- | --- |
| [docs/CLIENT_BRIEF.md](docs/CLIENT_BRIEF.md) | Respostas do cliente |
| [docs/PRD.md](docs/PRD.md) | Requisitos |
| [docs/SDD.md](docs/SDD.md) | Arquitetura |
| [docs/UI_GUIDANCE.md](docs/UI_GUIDANCE.md) | Design |
| [docs/DEPLOY.md](docs/DEPLOY.md) | Pages e domínio |

## Personalizar

1. Brief / PRD (já preenchidos).
2. Tokens em `src/styles/main.css`.
3. Home: `src/pages/HomePage.tsx` + `src/components/site/`.
4. Curso: `src/pages/CursoPage.tsx`.
5. `npm run build` → `npm run preview`.

## Banco de componentes

Ver `src/components/README.md` (ui / originkit / handmade / site).

## Scripts

```bash
npm run dev       # desenvolvimento
npm run build     # gera dist/ (+ 404.html)
npm run preview   # testa o build
```

## Segurança / o que NÃO versionar

- `.env` / secrets
- `.originkit/`
- `node_modules/`, `dist/`
