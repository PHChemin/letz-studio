# UI Guidance

Diretrizes visuais para landings deste esqueleto. Leia junto com o `PRD.md` do cliente.

## Princípios (sempre)

1. **Uma composição no primeiro viewport** — marca + 1 headline + 1 frase + 1 grupo de CTA + visual dominante. Nada de dashboard.
2. **Marca em primeiro plano** — se remover o nav, ainda dá para saber de quem é o site.
3. **Hero full-bleed** — imagem/fundo de borda a borda; sem cards flutuando em cima do hero.
4. **Uma função por seção** — um título, uma frase de apoio.
5. **Poucos cards** — só se forem necessários para interação; serviços podem ser lista tipográfica.
6. **Movimento com intenção** — 2–3 animações leves no máximo (fade/entrada), não ruído.

## Tipografia

- Use fontes com personalidade (`@theme` em `src/styles/main.css`).
- Evite stacks default: Inter, Roboto, Arial, system-ui como face principal de marca.
- Display (títulos) ≠ corpo (parágrafos).

## Cor e clima

- Defina 4–6 tokens no `@theme`: ink, paper, accent, muted, surface…
- Alinhar à área do cliente (ex.: arquitetura ≠ food ≠ saúde).
- Evitar clichês: roxo/indigo genérico; cream + serif + terracotta “AI default”; glow; pills demais; multi-shadow.

## Conteúdo no hero

Permitido: marca, headline, uma frase, CTAs, imagem de fundo.  
Evitar no primeiro viewport: stats, agenda, endereço, badges flutuantes, listas de preços.

## Contato

Botões claros para WhatsApp / e-mail / rede. Sem formulário server-side neste stack.

## Checklist antes de entregar

- [ ] Tokens de cor/fonte ajustados ao cliente
- [ ] Imagens reais no lugar de placeholders
- [ ] Contraste legível (texto claro no hero escuro e vice-versa)
- [ ] Mobile: menu e CTAs usáveis com o polegar
- [ ] Sem overlay de “chips” decorativos no hero
