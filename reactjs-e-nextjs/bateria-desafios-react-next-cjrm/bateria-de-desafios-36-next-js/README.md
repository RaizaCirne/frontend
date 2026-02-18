# Bateria de Desafios 36

Todos os desafios desta bateria são relacionados à aplicação `game-reviews`.

Importante: se você fizer push da resolução destes desafios para o GitHub (em uma branch `dev`, por exemplo), o dashboard na Vercel exibirá uma mensagem de erro. Não se preocupe. Esse erro acontece por que requests estão sendo feitos para o **localhost** do seu CMS e o build na Vercel é feito em um container com apenas o Node.js instalado, portanto, este container não contém um servidor Strapi local rodando. Mais à frente, falaremos sobre deployment de um projeto Strapi. 

Lembre-se: se não foi explicado "como" fazer, descobrir é parte do desafio.

---

## Desafio 1

Atualize a função `getReviews` para que, ao invés de obter as análises de arquivos Markdown, as análises sejam obtidas do CMS. 

---

## Desafio 2

Agora, atualize a função `getReview` (singular) para obter uma análise do CMS. 

Antes de atualizar de fato o arquivo da função `getReview`, você pode usar o `cms-request.mjs` para testar seu código. 

Em relação a paginação, a API pode ser configurada (através de parâmetros) para responder com as informações abaixo, pois a função `getReview` obtém apenas uma única análise do CMS.

```json
"meta": {
  "pagination": {
    "page": 1,
    "pageSize": 1
  }
}
```

Referências relevantes para este desafio:

- [Get an entry](https://docs.strapi.io/dev-docs/api/rest#get-an-entry)
- [Filtering](https://docs.strapi.io/dev-docs/api/rest/filters-locale-publication#filtering)
- [Pagination by page](https://docs.strapi.io/dev-docs/api/rest/sort-pagination#pagination-by-page)

---

## Desafio 3

Algumas análises, como a do Disco Elysium, contém um h3. 

Por padrão, um h3 não está estilizado com a cor correta a ser exibida na interface. Conserte isso.

---

## Desafio 4

Agora, atualize a função `getReviewSlugs` para obter os slugs do CMS. 

Apenas para garantir que os slugs de todas as análises vão ser obtidos, o `pageSize` pode ser 100. 
