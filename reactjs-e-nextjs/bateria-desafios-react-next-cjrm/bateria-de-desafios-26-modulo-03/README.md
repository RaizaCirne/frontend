# Bateria de Desafios 26

Lembre-se: se não foi explicado "como" fazer, descobrir é parte do desafio.

---

## Desafio 1

Crie uma aplicação que contém 4 botões e fotos de usuários do GitHub, como mostrado em ui/4-usuarios.jpg.

Quando o clique acontecer em um dos botões, exiba o título informando o número do usuário, o username dele e a foto. 

Use o array de nomes de usuários abaixo para consultar a API do GitHub. 

```js
const usernames = ['Roger-Melo', 'ryanflorence', 'getify', 'gaearon']
```

O 1º usuário do array deve ser exibido quando a aplicação carregar. 

---

## Desafio 2

Instale o devtools do React Query na aplicação do desafio acima, pra você visualizar as informações que o React Query está colocando no cache. 

Instale a versão exata do devtools, com a mesma versão do React Query que você instalou. Isto é, se o seu projeto tem a versão 5.28.4 do React Query, a versão do devtools também deve ser a 5.28.4.

---

## Desafio 3

Após instalar o React Query Devtools, você verá que dados de usuários que já foram buscados estão cacheados.

Isto é, ao clicar no botão de um usuário que os dados foram buscados previamente, as informações do usuário serão exibidas imediatamente, sem o "Carregando informações..." ser exibido na tela. 

Porém, ao observar a aba "network" e clicar no botão de um usuário cacheado, você verá que ainda que o usuário esteja no cache, um novo request para a API do GitHub é executado. 

Se está cacheado, porquê o React Query está fazendo request para a API?

Este é o problema que você deve resolver neste desafio. Evite o request (desnecessário) caso o usuário esteja em cache. Afinal de contas, seu limite de requests para a API do GitHub é baixo. 

---

### Referências importantes

- Desafio 1
  - [Doc useQuery](https://tanstack.com/query/latest/docs/framework/react/reference/useQuery)

- Desafio 2 
  - [Doc React Query Devtools](https://tanstack.com/query/latest/docs/framework/react/devtools)

- Desafio 3
  - [Doc defaults do React Query](https://tanstack.com/query/latest/docs/framework/react/guides/important-defaults)
