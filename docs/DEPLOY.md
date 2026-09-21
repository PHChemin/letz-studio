# Deploy — GitHub Pages e domínio

**Cliente:** Letz Studio · domínio `www.letzdesignstudio.com.br`  
**Repo:** `PHChemin/letz-studio` · Pages user: `PHChemin.github.io`  
**CNAME no build:** `public/CNAME` (copiado para `dist/` no deploy)

## 1. Ativar Pages com Actions (uma vez por repo)

1. No GitHub: **Settings → Pages**
2. Em **Build and deployment → Source**, escolha **GitHub Actions**
3. Faça push na `main` (ou rode o workflow manualmente em **Actions**)
4. O workflow `.github/workflows/deploy.yml` faz: `npm ci` → `npm run build` → publica `dist/`

Site padrão (enquanto o DNS não propaga): `https://phchemin.github.io/letz-studio/`

> Se a URL for *project page* (`/letz-studio/`) e os CSS/JS quebrarem **sem** domínio custom, descomente `VITE_BASE_PATH: /letz-studio/` no workflow. Com domínio custom o `base` padrão é `/` (necessário para a rota SPA `/curso`).

## 2. Domínio personalizado (`www.letzdesignstudio.com.br`)

Documentação oficial: [Configuring a custom domain](https://docs.github.com/pt/pages/configuring-a-custom-domain-for-your-github-pages-site).

### No GitHub

1. **Settings → Pages → Custom domain**
2. Digite `www.letzdesignstudio.com.br`
3. Salve e aguarde a checagem DNS
4. Depois de ok, marque **Enforce HTTPS**

### No DNS do domínio (registrador do cliente)

**Opção A — só www (recomendada neste projeto)**

| Tipo | Nome | Valor |
| --- | --- | --- |
| CNAME | www | `phchemin.github.io` |

**Opção B — apex (`letzdesignstudio.com.br`) + www**

| Tipo | Nome | Valor |
| --- | --- | --- |
| A | @ | `185.199.108.153` |
| A | @ | `185.199.109.153` |
| A | @ | `185.199.110.153` |
| A | @ | `185.199.111.153` |
| CNAME | www | `phchemin.github.io` |

Propagação: minutos a 48h. Enquanto isso o `*.github.io` já funciona.

### Atenção

- Domínio tem custo anual (geralmente do cliente) — hospedagem Pages é R$ 0.
- Se desativar o Pages com DNS ainda apontando, risco de *domain takeover*. Remova o custom domain e limpe o DNS ao encerrar o projeto.

## 3. Fluxo local

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # testa o build
```

## 4. Checklist de entrega

- [ ] Source do Pages = GitHub Actions
- [ ] Último workflow em verde
- [ ] Domínio configurado (se houver) + HTTPS
- [ ] WhatsApp / e-mail / redes testados no ar
