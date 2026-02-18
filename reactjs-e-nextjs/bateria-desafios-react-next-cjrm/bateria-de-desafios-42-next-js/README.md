# Bateria de Desafios 42

Lembre-se: se não foi explicado "como" fazer, descobrir é parte do desafio.

Agora que configuramos o Prisma usando SQLite, vamos entender como ler e escrever dados no banco. 

Você pode usar o guia linkado abaixo como consulta nos desafios. Não se preocupe em criar a função `main` nem `then` e `catch` neste momento. Foque apenas em criar e testar as queries que os desafios pedem. 

- [4. Explore how to send queries to your database with Prisma Client](https://www.prisma.io/docs/getting-started/quickstart#4-explore-how-to-send-queries-to-your-database-with-prisma-client)

Crie um arquivo `scripts/test-db.mjs` em sua aplicação. Vamos usar este arquivo no decorrer desta Bateria, para testar chamadas para o banco de forma mais isolada usando o Node.js, como fizemos anteriormente ao testar chamadas para o CMS. 

---

## Desafio 1

Implemente uma query que cria um comentário no banco. O comentário deve ter os seguintes dados:

- fall-guys como slug
- Joaquina como usuária
- Teste 1 como mensagem

---

## Desafio 2

Utilizando o código que você implementou no desafio acima, crie mais 2 comentários com os seguintes dados:

- fall-guys como slug
- Joaquim como usuário
- Teste 2 como mensagem

- stardew-valley como slug
- Roberto como usuário
- Teste 3 como mensagem

---

## Desafio 3

Comente a implementação que cria o comentário no banco. 

Implemente uma query que retorna todos comentários criados no banco. 

- [Model queries](https://www.prisma.io/docs/orm/reference/prisma-client-reference#model-queries)

---

## Desafio 4

Modifique a query que você implementou no Desafio acima, de forma que ela retorne apenas os comentários do Fall Guys. 

---

## Desafio 5

Agora, exiba na página da análise os comentários armazenados no banco. 

Se a análise em questão não tem comentários, exiba o parágrafo abaixo ao invés da lista de comentários:

```jsx
<p className="italic mt-3">Seja o primeiro(a) a deixar um comentário!</p>
```
