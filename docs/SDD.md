# Software Design Document

Visão técnica do Letz Studio (landing + rota do curso).

## Stack

| Camada | Escolha | Motivo |
| --- | --- | --- |
| UI | React 19 + TypeScript | Componentes, rotas, banco Magic UI / Originkit |
| Estilo | Tailwind CSS v4 (`@tailwindcss/vite`) + tokens shadcn | Utilitários + identidade Letz |
| Routing | React Router | `/` home · `/curso` (placeholder → landing do curso) |
| Build | Vite → `dist/` estático | Dev rápido, Pages |
| Deploy | GitHub Pages + Actions | Sem mensalidade |
| Contato | Links externos (wa.me, mailto, IG, Hotmart) | Sem backend |

## Arquitetura

```
código-fonte (repo)
  → npm run build (Vite + copia index.html → 404.html para SPA)
  → pasta dist/
  → artifact → GitHub Pages
  → www.letzdesignstudio.com.br
```

## Estrutura de pastas

```
/
├── index.html
├── src/
│   ├── main.tsx / App.tsx
│   ├── pages/                 # HomePage, CursoPage
│   ├── components/
│   │   ├── site/              # UI da landing Letz
│   │   ├── ui/                # Magic UI / shadcn
│   │   ├── originkit/
│   │   └── handmade/
│   ├── lib/
│   └── styles/main.css        # tokens Letz + shadcn
├── public/                    # CNAME, imagens, favicon
├── docs/
└── .github/workflows/deploy.yml
```

## Regras de design técnico

1. Site 100% estático após o build.
2. Sem `node_modules` em produção — só `dist/`.
3. `base` do Vite: `/` (domínio custom + rotas SPA). Override com `VITE_BASE_PATH` só se publicar em `user.github.io/repo/` sem domínio.
4. Imagens em `public/`.
5. Banco de motion (Magic UI / Originkit) disponível; a home atual preserva o visual Letz sem forçar esses efeitos.

## Domínio

Ver `DEPLOY.md`. Em resumo:

1. Pages Source = **GitHub Actions**
2. Cliente configura DNS (A / CNAME) para GitHub
3. Settings → Pages → Custom domain + Enforce HTTPS
4. `public/CNAME` = `www.letzdesignstudio.com.br`

## Extensões

- Conteúdo de `/curso` → `src/pages/CursoPage.tsx`
- Formulário → serviço externo (Forms / wa.me), não servidor próprio
