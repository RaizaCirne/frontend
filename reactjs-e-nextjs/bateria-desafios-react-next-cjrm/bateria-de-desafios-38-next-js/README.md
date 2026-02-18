# Bateria de Desafios 38

Lembre-se: se não foi explicado "como" fazer, descobrir é parte do desafio.

---

## Desafio 1

Observe se há oportunidades de refactoring nas funções da pasta `lib` e refatore-as, se avaliar que é necessário. 

---

## Desafio 2

Neste desafio, vamos **começar** a implementar paginação na página `/analises`. Afinal, apenas as últimas 6 análises estão sendo exibidas e ainda não há funcionalidade nesta página que torne possível o usuário visualizar as demais análises.

Ao implementar a paginação, também vamos ver outras funcionalidades do Next.js. 

Os screenshots dentro da pasta `img/` mostram a paginação inicial implementada na interface. 

Os ícones de seta usados foram ArrowLeft e ArrowRight da lucide-react. 

Ao acessar a página `/analises`, a URL deve ser `/analises` e "Página 1" deve ser exibido na paginação, como mostrado em `img/01-paginacao.jpg`.

Ao clicar na seta de próxima página, uma query string com o parâmetro page recebendo o número da próxima página deve ser inserida na URL (`/analises?page=2`) e a paginação deve exibir "Página 2", como mostrado em `img/02-clicou-prox-pag.jpg`. 

Ao clicar na seta de página anterior, a query string deve ser `/analises?page=1` e a paginação deve voltar a exibir "Página 1", como mostrado em `img/03-clicou-pag-anterior.jpg`. 

Se a seta de página anterior for clicada e não houver página anterior, nada deve acontecer. Isto é, a query string `/analises?page=1` deve permanecer intacta, e "Página 1" deve continuar exibido na interface. 

Se "abc" for inserido como valor do parâmetro "page" (`/analises?page=abc`), "Página 1" deve ser exibido na interface, como mostrado em `img/04-param-nao-numerico.jpg`

Dica: não é necessário usar client component. 

Como mencionado no início da descrição, este desafio é apenas o começo da implementação da paginação. Nas próximas aulas, vamos dar continuidade à implementação iniciada aqui. 

Links relevantes para este desafio:

- [searchParams](https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional)
