# Bateria de Desafios 02

Implemente os desafios abaixo usando uma cópia do boilerplate que fizemos com Vite em aulas passadas. 

Implemente suas resoluções no app.jsx.

A marcação CSS a ser usada em cada desafio está na pasta css.

As imagens com o resultado final das interfaces que você implementará estão na pasta ui-examples. 

Se o desafio não especificar como você deve "quebrar" a interface em diferentes componentes, isso fica a seu critério.

Provavelmente, as suas resoluções dos desafios serão usadas futuramente. Portanto, se organize de forma que cada código que você implementou nesta bateria esteja salvo para usar no futuro. 

Se a descrição do desafio não especificou "como" fazer, descobrir é parte do desafio.

Se nas aulas não foi mostrado "como" fazer, descobrir é parte do desafio.

---


# Desafio 01

Implemente o 01-contador-de-data.jpg. 

O CSS dessa interface está no arquivo date-counter.css.

Ao clicar no botão "-" ao lado de Intervalo: 1, exiba no console a mensagem "Clicou no menos do Intervalo".

Ao clicar no botão "-" ao lado de Contagem: 0, exiba no console a mensagem "Clicou no menos da Contagem".

Ao clicar no botão "+" ao lado de Intervalo: 1, exiba no console a mensagem "Clicou no mais do Intervalo".

Ao clicar no botão "+" ao lado de Contagem: 0, exiba no console a mensagem "Clicou no mais da Contagem".

Futuramente, a forma que essa aplicação irá funcionar será explicada.

---

# Desafio 02

Implemente o 02-passos.jpg. 

O CSS está no arquivo steps.css.

Ao clicar nos botões Fechar, Anterior e Próximo, o texto do botão clicado deve ser exibido no console. 

Não escreva o texto do botão manualmente em seus console.log. Use as propriedades específicas para isso. 

---

# Desafio 03

Implemente o 03-flashcards.jpg. 

Use o array abaixo para preencher os cards com informações. 

Quando um card for clicado, o id do card deve ser exibido no console. 

Não faça cardsInfo[index] para exibir o id do card no console. 

O console.log não deve ser inserido diretamente na propriedade onClick. Declare uma função acima do retorno do componente e use o console.log nela. 

```js
const cardsInfo = [
  {
    id: 7336,
    question: "Do quê aplicações React são feitas?",
    answer: "Componentes",
  },
  {
    id: 8832,
    question: "Qual é o nome da sintaxe usada para descrever UI no React?",
    answer: "JSX",
  },
  {
    id: 3457,
    question: "Em qual linguagem o React é baseado?",
    answer: "JavaScript",
  },
  {
    id: 9103,
    question: "Qual método usar para renderizar uma lista no React?",
    answer: "map",
  },
  {
    id: 1297,
    question: "Qual empresa criou o React?",
    answer: "Meta",
  },
  {
    id: 2002,
    question: "Como passar informações para um componente React?",
    answer: "Através de props",
  },
]
```

---

# Desafio 04

Baseado no que você viu nas aulas dessa semana, melhore a lista de habilidades do card feito na Bateria de Desafios anterior. 

---

# Desafio 05

Implemente o 04-accordion.jpg. 

Use o array abaixo para preencher a interface com informações. 

```js
const faqs = [
  {
    id: crypto.randomUUID(),
    title: "Quem é a maior celebridade do mundo dos games no BR?",
    answer: "A apresentadora Ana Maria Braga. Joga 3h pra desocupar a cabeça.",
  },
  {
    id: crypto.randomUUID(),
    title: "Onde fica a europa da américa do sul?",
    answer: "Argentina. BR vive como rei em Buenos Aires.",
  },
  {
    id: crypto.randomUUID(),
    title: "Qual é a grande oportunidade para desenvolvedores BR?",
    answer: "Aproveitar a alta demanda pra ganhar em dólar ou euro.",
  },
]
```

---

# Desafio 06

Implemente o 05-burgao-do-ze.jpg.

O logo e as imagens dos burgers estão na pasta img.

O componente App deve conter os componentes Header, Menu e Footer.

O cardápio só deve ser renderizado se houver itens no array burgers (abaixo).

O texto abaixo do título "Cardápio" é: "Depois de uma semana desafiadora, nada melhor do que saborear um burger onde cada mordida é um abraço saboroso, não é mesmo?🍔✨".

O hamburger "Prime" no jpg da interface é um exemplo de como o hamburger deve ser renderizado caso tenha esgotado. 

Se a aplicação for acessada entre meio-dia e 21:59h, o rodapé deve exibir "🕛 Tamo aberto até as 22h. Vem visitar a gente ou faça seu pedido online." + o botão Fazer pedido.

Ao clicar no botão Fazer pedido, a mensagem abaixo deve ser exibida no console:

"Direcionando para fazer pedido..."

Se a aplicação for acessada fora do horário comercial da hamburgueria, o rodapé deve exibir apenas a mensagem "🕛 Vamo abrir amanhã as 12h".

```js
const burgers = [
  {
    name: "Duo",
    ingredients:
      "Pão selado na manteiga, hambúrguer BOVINO de 160gr, cheddar, cebola caramelizada e molho especial",
    price: 37,
    photoName: "img/burgers/duo.jpg",
    soldOut: false,
  },
  {
    name: "Kids",
    ingredients:
      "Burger de blend de cogumelos e mandioca, abacaxi caramelizado, muçarela, alface, tomate e molho verde",
    price: 29,
    photoName: "img/burgers/kids.jpg",
    soldOut: false,
  },
  {
    name: "Master",
    ingredients:
      "Pão selado na manteiga, hambúrguer BOVINO de 100gr, bacon, cheddar e barbecue",
    price: 51,
    photoName: "img/burgers/master.jpg",
    soldOut: false,
  },
  {
    name: "Monster",
    ingredients:
      "Pão selado na manteiga, 2x hambúrguer BOVINO de 100gr, bacon, cheddar e barbecue",
    price: 47,
    photoName: "img/burgers/monster.jpg",
    soldOut: false,
  },
  {
    name: "Prime",
    ingredients:
      "Pão selado na manteiga, hambúrguer de CARNE DE SOL de 160gr, queijo coalho, bacon, alface, tomate, cebola roxa e melaço de cana",
    price: 43,
    photoName: "img/burgers/prime.jpg",
    soldOut: true,
  },
  {
    name: "Slim",
    ingredients:
      "Pão selado na manteiga, hambúrguer CUPIM de 180gr, 2 fatias de muçarela, alface, tomate, picles de cebola roxa e molho especial de alho",
    price: 27,
    photoName: "img/burgers/slim.jpg",
    soldOut: false,
  },
]
```
