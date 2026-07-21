# Software Design Document

Visão técnica do esqueleto Letz Studio para landings freelance.

## Stack

| Camada | Escolha | Motivo |
| --- | --- | --- |
| Markup | HTML | Simples, estático, fácil de personalizar |
| Estilo | Tailwind CSS v4 (via Vite plugin) | Utilitários + tokens `@theme`, bom para IA |
| Build | Vite | Dev rápido, `dist/` estático para Pages |
| Deploy | GitHub Pages + Actions | Hospedagem sem mensalidade |
| Contato | Links externos (wa.me, mailto, IG) | Sem backend |

## Arquitetura

```
código-fonte (repo)
  → npm run build (local ou GitHub Actions)
  → pasta dist/ (HTML/CSS/JS/assets)
  → artifact → GitHub Pages
  → URL github.io ou domínio do cliente
```

## Estrutura de pastas

```
/
├── index.html                 # página da landing
├── src/
│   ├── main.js                # JS leve + import do CSS
│   └── styles/main.css        # Tailwind + tokens do cliente
├── public/                    # arquivos copiados para dist/
│   ├── .nojekyll
│   └── favicon.svg
├── docs/                      # documentação para humanos + IA
├── .github/workflows/deploy.yml
└── vite.config.js
```

## Regras de design técnico

1. Site 100% estático após o build.
2. Sem `node_modules` em produção — só o conteúdo de `dist/`.
3. `base` do Vite: `./` por padrão (funciona em repo Pages e domínio custom).
4. Imagens preferencialmente em `public/` ou otimizadas antes do commit.
5. Sem frameworks UI pesados (React/Next) neste esqueleto.

## Domínio

Ver `DEPLOY.md`. Em resumo:

1. Pages Source = **GitHub Actions**
2. Cliente configura DNS (A / CNAME) para GitHub
3. Em Settings → Pages → Custom domain + Enforce HTTPS

## Extensões futuras (opcional)

- Segunda página HTML → adicionar em `vite.config.js` → `build.rollupOptions.input`
- Formulário → serviço externo (Formspree etc.), não servidor próprio
- Trocar host → Cloudflare Pages consome o mesmo `dist/`
