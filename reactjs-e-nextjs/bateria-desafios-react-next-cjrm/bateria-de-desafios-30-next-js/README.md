# Bateria de Desafios 30

Lembre-se: se não foi explicado "como" fazer, descobrir é parte do desafio.

---

## Desafio 1

Usar `create-next-app` é conveniente, pois coloca um projeto Next.js de pé muito rápido. 

Porém, quem está começando a conhecer o Next pode se sentir sobrecarregado, pois com um único comando, vários arquivos e configurações são criados de uma só vez. 

Por isso, nesta bateria, vamos começar a criar um projeto Next.js do zero, sem `create-next-app`, para que seja possível entender com mais calma o quê cada arquivo faz. 

Crie um repositório `game-reviews` em seu Github e clone-o para a sua máquina. 

---

## Desafio 2

Crie um `package.json` que contenha as entradas name recebendo game-reviews e private recebendo true. 

---

## Desafio 3

Instale react v18.2.0, react-dom v18.2.0 e next v14.2.2.

Após a instalação, faça o Git ignorar o diretório node_modules. 

---

## Desafio 4

Crie o diretório `app` e, dentro dele, crie os arquivos e componentes necessários para exibir uma interface como a `ui/homepage.jpg`, sendo que:

- O layout é composto por: 
  - html;
  - body;
  - header;
  - h2 com o texto "Análises de Jogos";
  - main;
  - footer com o texto "Rodapé". 

- A página Home é composta por:
  - h1 com o texto "Bem vindo(a) ao Análises de Jogos!";
  - parágrafo com o texto "Parágrafo da página inicial".

Ao rodar o servidor, faça o Git ignorar o diretório .next.

- [Creating directories](https://nextjs.org/docs/getting-started/installation#creating-directories)

---

## Desafio 5

Instale eslint v8.57.0 e eslint-config-next v14.2.2. 

No .eslintrc.json, insira a configuração que lança erros caso o projeto afete o Core Web Vitals. 

- [Core Web Vitals](https://nextjs.org/docs/app/building-your-application/configuring/eslint#core-web-vitals)
- [Web Vitals](https://web.dev/articles/vitals)

---

## Desafio 6

Faça que um erro de lint seja lançado caso o projeto contenha alguma const não-utilizada. 
