# Letz Studio

Landing do **Letz Studio** (design para social media) — Vite + Tailwind CSS, hospedagem gratuita via **GitHub Pages**.

- Site: [www.letzdesignstudio.com.br](https://www.letzdesignstudio.com.br) (após DNS)
- Instagram: [@letz_studio](https://www.instagram.com/letz_studio/)

## O que é o Vite?

O **Vite** é a ferramenta de desenvolvimento e build:

- No dia a dia (`npm run dev`): sobe um servidor local rápido e atualiza a página ao salvar.
- Na entrega (`npm run build`): **compila** HTML, CSS (Tailwind) e JS em arquivos estáticos na pasta `dist/`.

O GitHub Pages **não** roda Vite nem `npm`. Ele só recebe o resultado do build (`dist/`), gerado na sua máquina ou no **GitHub Actions**.

```
código (Tailwind, JS, deps)
        │
        ▼  vite build
     dist/  (HTML/CSS/JS prontos)
        │
        ▼  Actions
  GitHub Pages (site no ar)
```

## Começar

```bash
npm install
npm run dev
```

Abra o endereço que o terminal mostrar (geralmente `http://localhost:5173`).

## Docs (para você e para a IA)

| Arquivo | Uso |
| --- | --- |
| [docs/CLIENT_BRIEF.md](docs/CLIENT_BRIEF.md) | Respostas rápidas do cliente |
| [docs/PRD.md](docs/PRD.md) | Requisitos do projeto |
| [docs/SDD.md](docs/SDD.md) | Decisão técnica / arquitetura |
| [docs/UI_GUIDANCE.md](docs/UI_GUIDANCE.md) | Regras de design |
| [docs/DEPLOY.md](docs/DEPLOY.md) | Pages, Actions e domínio custom |

## Deploy

1. Suba o repo no GitHub.
2. **Settings → Pages → Source → GitHub Actions**.
3. Push na `main` (workflow em `.github/workflows/deploy.yml`).
4. Domínio: siga `docs/DEPLOY.md`.

## Personalizar um cliente

1. Preencha o brief / PRD.
2. Ajuste tokens em `src/styles/main.css`.
3. Substitua textos, links e imagens em `index.html`.
4. `npm run build` e confira com `npm run preview`.
