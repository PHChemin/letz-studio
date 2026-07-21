# Product Requirements Document — Letz Studio

Este arquivo orienta o que construir — não como (veja `SDD.md` e `UI_GUIDANCE.md`).

## Identidade

| Campo                   | Valor                          |
| ----------------------- | ------------------------------ |
| Nome do cliente / marca | Letz Studio                    |
| Área de atuação         | Design Gráfico / Social Media  |
| Público-alvo            | Autônomos e Empresas           |
| Tom de voz              | Acolhedor e divertido          |
| Idioma do site          | pt-BR                          |

## Objetivo da landing

O visitante deve ver os projetos, a venda de templates editáveis e informações sobre o estúdio, para: entrar em contato via WhatsApp ou Instagram, ou pedir o link da Hotmart dos templates.

## Conteúdo obrigatório

- [x] Nome / marca em destaque (hero)
- [x] Headline + frase de apoio
- [x] Serviços ou produtos (lista)
- [x] Sobre / credibilidade
- [x] Contato (WhatsApp / Instagram)
- [x] Seção de templates (Hotmart via WhatsApp até o link oficial)

## Contatos a linkar

| Canal     | URL / número                                                   |
| --------- | -------------------------------------------------------------- |
| WhatsApp  | https://wa.me/5542988179602 · (42) 98817-9602                  |
| E-mail    | letzia.contato@outlook.com                                     |
| Instagram | https://www.instagram.com/letz_studio/                         |
| Hotmart   | A definir nos slots `#produto-*`                               |

## Domínio

| Campo                          | Valor                       |
| ------------------------------ | --------------------------- |
| URL desejada                   | www.letzdesignstudio.com.br |
| Quem compra / renova o domínio | Cliente                     |
| Já possui domínio?             | Sim                         |
| CNAME no repo                  | `public/CNAME`              |

## Fora de escopo (padrão)

- Login / área do cliente
- Carrinho / pagamento online no site (Hotmart externo)
- CMS / painel admin
- Formulário com backend (Pages é estático)
- Mensalidade de hospedagem (usa GitHub Pages)

## Critérios de aceite

- [x] Mobile e desktop legíveis
- [x] Links de contato funcionando
- [ ] HTTPS no domínio (após DNS + Enforce HTTPS no GitHub)
- [x] Textos do cliente no lugar dos placeholders (imagens do IG pendentes)
- [ ] Deploy via GitHub Actions ok (após push + Pages Source = Actions)

## Referências

- Instagram: https://www.instagram.com/letz_studio/
- Identidade aplicada: fundo escuro, tipografia Syne + Figtree, accent rosa `#e85a8c`
