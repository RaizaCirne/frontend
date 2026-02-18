# Bateria de Desafios 44

Lembre-se: se não foi explicado "como" fazer, descobrir é parte do desafio.

---

## Desafio 1

Implemente o seguinte comportamento em sua aplicação:

- Ao fazer login pelo botão na parte inferior da página da análise, a página a ser exibida deve ser a página da análise em que o usuário já estava. 

- Ao fazer login pela página `/sign-in`, a página a ser exibida deve ser a página de listagem das análises (`/analises`). 

[Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)

---

## Desafio 2

Substitua o botão de login atual pelo JSX em `src/google-button.jsx`.

Após essa substituição, na className da div que contém o `<SignInForm />` na página da análise, precisei acrescentar `items-center` e substituir `gap-1` por `gap-3`. 

---

## Desafio 3

Adicione no banco uma tabela/model `User`, para armazenar dados do usuário. 

Este model deve conter os fields `id`, `email` e `name`.

O field `email` deve ser único, para assegurar que cada usuário tenha um email diferente. 

Para sincronizar o banco com o `prisma/schema.prisma`, você precisará executar `npx prisma db push`. 

Após sincronizar, ao abrir o Prisma Studio provavelmente a nova tabela `User` não será exibida. Você precisa clicar no `+` ao lado da aba da tabela `Comment` para que a opção de exibir a tabela `User` apareça. 

- [Defining a unique field](https://www.prisma.io/docs/orm/prisma-schema/data-model/models#defining-a-unique-field)

---

## Desafio 4

Quando o usuário fizer login na aplicação, crie um novo record na tabela `User`.

Para isso, você precisará usar a propriedade `callbacks.signIn` no objeto `authConfig`. 

Dentro da nova função que você criar, verifique se o usuário já existe no banco. Se existir, não é necessário criar um novo record. 

- [callbacks](https://authjs.dev/reference/nextjs#callbacks)
- [findUnique()](https://www.prisma.io/docs/orm/reference/prisma-client-reference#findunique)
