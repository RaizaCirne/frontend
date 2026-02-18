# Bateria de Desafios 41

Lembre-se: se não foi explicado "como" fazer, descobrir é parte do desafio.

---

## Desafio 1

Agora que a aplicação game-reviews funciona também com a versão em produção do Strapi, faça um novo deploy para produção da sua aplicação na Vercel. 

Antes de fazer este deploy lembre-se que o plano gratuito do Strapi contempla 14 dias gratuitos e, portanto, após estes 14 dias, essa versão da aplicação do novo deploy fará requisições para um server desativado. 

Por isso, ao invés de fazer este novo deploy na branch main do mesmo projeto que criamos na Vercel em aulas passadas, você pode criar um novo projeto no dashboard da Vercel, fazer deploy na branch main inicialmente (isso já é feito por padrão), mas após esse primeiro build, você pode fazer um novo build selecionando a branch que contém a implementação do uso do Strapi em produção. Foi o que eu fiz, usando a branch `dev`. 

Existe, claro, a opção de fazer este deploy na branch main do projeto que criamos na Vercel em aulas passadas, mas o rollback do plano gratuito da Vercel não é muito flexível. Portanto, esse é mais um motivo para criar um novo projeto separado na Vercel e ter 2 projetos com diferentes versões da aplicação Next. 

---

## Início da fase 3 do projeto

A partir de agora, vamos começar a fase 3 do projeto game-reviews. Nesta fase, vamos implementar a funcionalidade de postagem de comentários em uma análise. 

Isto é, abaixo de cada análise, será exibida uma lista com os comentários deixados pelos usuários, juntamente com um form onde um usuário pode inserir seu nome, deixar um comentário sobre o jogo e enviar. 

Essa funcionalidade nos dará a oportunidade de aprender novos conceitos sobre o Next.js.

Até aqui, estamos carregando todas as informações do CMS. Mas também é possível conectar a aplicação a um banco de dados para buscar informações desse banco. E a partir daqui, vamos entender como fazer isso. 

Os comentários serão armazenados em um database SQL e carregados antes de serem exibidos na página de uma análise. Com essa funcionalidade, vamos entender como fazer essa integração da aplicação a um banco de dados. 

Vamos usar uma biblioteca chamada Prisma, para trabalharmos com estes dados. 

Em breve, vamos entender também como funciona o envio de forms, através de Server Actions e Streaming, com Suspense.  

A partir daqui, você pode voltar a usar a versão de desenvolvimento do CMS. 

---

## Desafio 2

Adicione a marcação JSX do `src/jsx/comment-section.jsx` na página da análise, abaixo do `<article />`. 

Os componentes `CommentForm` e `CommentList` também estão em `src/jsx/`. 

A interface deve ficar como demonstrado em `src/img/01-comentarios-pag-analise.jpg`.

---

## Desafio 3

Por enquanto, o componente `CommentList` usa um array `comments` para exibir os comentários. 

Para implementar essa funcionalidade, vamos precisar manter os comentários em um outro lugar, onde seja possível salvar novos comentários e carregá-los em uma determinada análise. 

Já estamos usando um CMS para gerenciar imagens e análises em si, então seria possível adicionarmos um novo collection "Comment" para armazenar os comentários no CMS e continuar usando o Strapi para todos os dados que vem de fora. Essa escolha seria sensata em um projeto em produção porém, como estamos em um treinamento, faz sentido aprender coisas novas, como fazer conexões diretas a um banco de dados. 

Isso é o que vamos fazer a partir daqui. 

Desta vez, ao contrário do CJRM, vamos usar um banco de dados relacional, o SQLite, por ser uma opção simples de rodar localmente em sua máquina. Ou seja, você não irá precisar passar por um processo de instalação ou fazer cadastro em alguma plataforma em nuvem. 

Não se preocupe se você ainda não conhece o SQLite e/ou o Prisma, você terá uma introdução sobre eles nas aulas seguintes. 

Instale a versão 5.16.1 do Prisma, como dependência de desenvolvimento. 

- [Installation](https://www.prisma.io/docs/orm/tools/prisma-cli#installation)

---

## Desafio 4

Na página linkada abaixo, encontre o comando que cria um novo diretório `prisma` com um arquivo `prisma.schema` e configura o SQLite como database. Execute o comando em seu terminal. 

- [Quickstart](https://www.prisma.io/docs/getting-started/quickstart#1-create-typescript-project-and-set-up-prisma-orm)

Ao executar o comando, provavelmente será uma exibida uma recomendação específica sobre algo que você deve fazer em seu .gitignore. Siga a recomendação. 

---

## Desafio 5

Instale a extensão oficial do Prisma para o VSCode. Isso habilitará, entre outras coisas, syntax highlighting, linting, auto-complete, formatação e jump-to-definition nos arquivos de schema do Prisma (como o `prisma/schema.prisma`).

- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)

Após instalar a extensão, confira se o arquivo `schema.prisma` está com syntax highlighting.
