# Bateria de Desafios 28

Lembre-se: se não foi explicado "como" fazer, descobrir é parte do desafio.

Os desafios são relacionados a aplicação de vagas do `frontendbr` que estamos desenvolvendo. 

Referências relevantes para esta bateria estão no rodapé. 

---

## Desafio 1

Impeça que o componente de paginação vá para o topo da aplicação enquanto o carregamento da próxima página acontece. 

Uma forma de fazer isso é manter, na tela, as informações da página atual enquanto o carregamento da próxima página acontece.

Dica: pesquise por `placeholderData` e `keepPreviousData`, features da v5 do React Query. 

---

## Desafio 2

Implemente a página de detalhes da issue, como mostrado em ui/01-detalhes-issue.jpg.

Isto é, na página inicial, ao clicar no título de uma issue da lista, as informações da issue devem ser exibidas em uma página que contém: 

1. Um link "Voltar";
2. O título da issue;
3. A descrição da issue.

Para parsear a descrição da issue de Markdown para HTML, você precisará usar uma lib, como a Marked. 

Para sanitizar a string HTML, DOMPurify pode ser usado. 

Para renderizar a string HTML com o React, você precisará conhecer `dangerouslySetInnerHTML`.

---

## Desafio 3

Faça cache das issues acessadas anteriormente. 

Quando o clique em uma issue acessada anteriormente acontecer, ao invés de fazer request para a API do GitHub, as informações em cache da issue em questão devem ser renderizadas. 

---

### Referências relevantes para esta bateria

- [`placeholderdata` e `keepPreviousData`](https://tanstack.com/query/latest/docs/framework/react/guides/migrating-to-v5#removed-keeppreviousdata-in-favor-of-placeholderdata-identity-function)
- [Marked](https://marked.js.org/)
- [DOMPurify](https://github.com/cure53/DOMPurify)
- [Dangerously setting the inner HTML](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html)
- [Data Library Integration (React Router Docs)](https://reactrouter.com/en/main/guides/data-libs)
- [React Query meets React Router](https://tkdodo.eu/blog/react-query-meets-react-router)
