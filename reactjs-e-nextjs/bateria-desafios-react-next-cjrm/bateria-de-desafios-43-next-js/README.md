# Bateria de Desafios 43

Lembre-se: se não foi explicado "como" fazer, descobrir é parte do desafio.

---

## Desafio 1

Substitua o parágrafo de fallback do Suspense por um Skeleton, como demonstrado em `src/videos/skeleton.mp4`.

Para o efeito de aparecimento e desaparecimento gradual, pesquise por `animate-pulse` na doc do Tailwind. 

Para criar as barras horizontais de placeholder do texto, usei as divs do JSX abaixo:

```jsx
<div className="bg-slate-500 rounded h-3 w-24" />
// ...
<div className="bg-slate-500 rounded h-3 w-2/3" />
```

---

## Desafio 2

Implemente um spinner global para a aplicação, como demonstrado em `src/videos/global-spinner.mp4`.

A ideia é que seja um spinner global e portanto, funcione em todas as páginas da aplicação. 

O ícone que usei é o `LoaderPinwheel` da lucide-react. Pesquise também por `animate-spin` na doc do Tailwind. 

- [loading.js](https://nextjs.org/docs/app/api-reference/file-conventions/loading)
- [Instant Loading States](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#instant-loading-states)

---

## Desafio 3

Sanitize os dados do form de criação de comentários. 

---

## Desafio 4

Sanitize os dados do Combobox da página de listagem das análises. 
