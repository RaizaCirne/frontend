# Bateria de Desafios 29

Lembre-se: se não foi explicado "como" fazer, descobrir é parte do desafio.

---

## Desafio 1

Atualize a versão do Vite do seu vite-boilerplate para a v5.2.8.

Crie um novo repositório no seu GitHub, baseado em seu vite-boilerplate. 

Sugestão de nome do novo repositório: `testing-react-query-mutation`. 

---

## Desafio 2

Desinstale o React Router do novo repositório. 

Instale React Query v5.29.2 como dependência e eslint-plugin-query v5.28.11 como dependência de desenvolvimento. 

Um dos objetivos deste desafio é exatamente testar se você está confortável em instalar e desinstalar ferramentas via linha de comando, pois no dia a dia, podem haver momentos em que você precisará fazer isso. 

Caso precise relembrar a diferença entre dependency e devDependency:

- [Dependencies x devDependencies](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file)

---

## Desafio 3

Aqui, o aviso "se não foi mostrado como fazer, descobrir é parte do desafio" vale mais do que nunca. 

Leia a documentação e fique atento aos avisos no terminal (se houverem). 

Em seu novo repositório, use o código JSX e CSS que estão dentro da pasta src. 

No array games, se algum link estiver quebrado, basta substituir por outro produto da Amazon. 

Instale o json-server v0.17.4: 

- [json-server](https://github.com/typicode/json-server/tree/v0)

JSON Server é uma ferramenta pra você criar uma API fake, sem precisar escrever código. Isto é, você cria os dados do seu banco mas não cria, por exemplo, um back-end em NodeJS com Express especificando qual recurso deve ser retornado caso um determinado endpoint seja acessado. Com o JSON Server, isso é feito automaticamente pra você, por baixo dos panos, sem você precisar escrever código pra isso. 

No momento em que escrevo este desafio, a v1-alpha do json-server pode ser testada. Porém, por ser uma versão alpha, pode haver breaking changes. Por isso, o recomendado é usar a versão estável (v0.17.4) como mencionado acima. 

Migre o array `games` do app.jsx para um arquivo JSON, para utilizá-lo com o json-server. 

Ao usar o json-server, não faça o request diretamente para o arquivo json.

- Exemplo do que **não fazer**: `fetch('db/db.json')`

Sua aplicação precisa exibir os jogos na tela, mas os jogos devem ser buscados na API fake que o json-server disponibiliza. O request precisa ser feito **para o endpoint do servidor**. 

Além disso, implemente o cache dos jogos com React Query. 

---

## Desafio 4

Quando o form for enviado, faça um request do tipo POST para criar um jogo no banco de dados. 

- [Supplying request options](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options)

Provavelmente, ao criar o jogo no banco, a aba "Network" exibirá algo como "Preflighted request" na linha do request POST. 

Preflighted request é apenas um mecanismo de proteção contra certos tipos de requests cross-origin potencialmente maliciosos. 

Aprofundar-se neste assunto aqui neste momento é opcional. Caso queira, veja os materiais abaixo. 

- [What is that "Preflight request" in chrome devtools network tab?](https://chat.openai.com/share/c0c1cec4-2ab6-4ce6-b5ea-68f15097014b)
- [Preflight request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request)
- [Preflighted requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#preflighted_requests)

Após enviar o form, você pode observar se o novo jogo foi criado em seu arquivo json. 

Porém, ainda há um problema... para ver o jogo na tela, é necessário recarregar a página, ou mudar de aba e voltar, já que o react query, por padrão, faz refetch neste caso. 

Para exibir na tela o novo jogo criado (sem precisar recarregar pág. ou mudar de aba), vamos para o próximo desafio 👇🏻

---

## Desafio 5

Utilize Mutations para criar novos jogos. 

- [Mutations Guide](https://tanstack.com/query/latest/docs/framework/react/guides/mutations)
- [Mastering Mutations in React Query](https://tkdodo.eu/blog/mastering-mutations-in-react-query)
- [Query Invalidation](https://tanstack.com/query/latest/docs/framework/react/guides/query-invalidation)
