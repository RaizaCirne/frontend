# Bateria de Desafios 03

Sugestão: para uma melhor organização, implemente cada desafio abaixo usando uma cópia do boilerplate que fizemos com Vite em aulas passadas. 

Um repositório para cada desafio. 

Isso vai tender a deixar cada aplicação mais fácil de ser encontrada no futuro, caso você precise.

Cada desafio pressupõe que você tem o código-fonte de cada aplicação implementada na Bateria de Desafios 02.

A pasta ui-examples (desta pasta bateria-de-desafios-03) contém exemplos de como a interface de cada aplicação deve ficar em determinados momentos. 

Lembrando:

Se o desafio não especificar como você deve "quebrar" a interface em diferentes componentes, isso fica a seu critério. Não existe melhor ou pior, apenas faça.

Se a descrição do desafio não especificou "como" fazer, descobrir é parte do desafio.

Se nas aulas não foi mostrado "como" fazer, descobrir é parte do desafio.

---

# Desafio 01

A aplicação Passos agora precisa ter as seguintes funcionalidades...

Quando a aplicação carregar, o círculo com o número 1 deve estar verde e o passo exibido deve ser o 1, como mostrado em aberto.jpg.

Ao clicar no botão Fechar, o texto do botão deve mudar para "Abrir" e o container abaixo do botão deve ser removido da tela, como mostrado em fechado.jpg.

Ao clicar no botão Abrir, o texto do botão deve mudar para "Fechar" e o container abaixo do botão deve ser exibido na tela, como mostrado em aberto.jpg.

Ao clicar no botão "Próximo", o círculo com o número do novo passo deve ficar verde e o novo texto com o passo e mensagem deve ser exibido na tela. No exemplo proximo-clicado.jpg, o clique em "Próximo" mudou a interface do passo 1 para o passo 2. 

Se, ao exibir o último passo, o botão "Próximo" for clicado, a interface deve se manter no último passo (3).

Ao clicar no botão Anterior, a mesma lógica deve se repetir, porém, para os passos anteriores. No exemplo anterior-clicado.jpg, o clique em Anterior mudou a interface do passo 3 para o passo 2. 

Se, ao exibir o primeiro passo, o botão Anterior for clicado, a interface deve se manter no primeiro passo (1).

Use o array de passos abaixo:

```js
const steps = [
  { 
    id: crypto.randomUUID(), 
    description: "Entender o problema do cliente" 
  },
  {
    id: crypto.randomUUID(),
    description: "Desenvolver a solução do problema",
  },
  {
    id: crypto.randomUUID(),
    description: "Repetir até o cliente ficar feliz e encher seu 🍑 de dinheiro",
  },
]
```

---

# Desafio 02

Adicione as seguintes funcionalidades a aplicação Contador de Data...

Quando a aplicação carregar, o Intervalo deve ser 1, a Contagem 0 e o dia, mês e ano atual deve ser exibido, como em estado-inicial.jpg.

Quando o botão "+" de contagem for clicado, contagem deve exibir "1" e a data de 1 dia após deve ser exibida, como em 1-dia-apos.jpg.

Quando o botão "+" de contagem for clicado várias vezes, a nova contagem deve exibir a quantidade de dias e a data correspondente, sempre incrementando de 1 em 1 dia, como mostrado em varios-dias-apos.jpg.

A lógica inversa se aplica a quando o botão "-" de contagem for clicado, como mostrado em 1-dia-atras.jpg e varios-dias-atras.jpg.

Quando o botão "-" de intervalo for clicado, e o intervalo estiver em 1, ele deve permanecer em 1. Não deve haver intervalo zero ou negativo.

Quando o intervalo for incrementado de 1 em 1 (através do clique no botão "+"), o incremento entre datas ao clicar no botão "+" da contagem deve corresponder ao intervalo. 

Isto é, se após o carregar da aplicação, o intervalo for incrementado para 3, ao clicar no botão "+" da contagem, a data exibida deve ser a data de daqui 3 dias. 3-dias-a-partir-de-hj.jpg exemplifica este caso. 

A lógica acima se repete para qualquer intervalo. O contador sempre precisa obedecer o intervalo entre datas. 

O intervalo também deve valer para quando a contagem for negativa, como mostrado em 9-dias-atras.jpg.

---

# Desafio 03

A aplicação Flashcards agora precisa ter as seguintes funcionalidades...

Quando a aplicação carregar, todos os cards devem conter apenas as perguntas, como em cards-estado-inicial.jpg.

Quando um card for clicado, ele deve exibir a resposta da pergunta com a cor de fundo lightblue e a cor do texto #323232, como em card-ativo.jpg.

Se outro card for clicado, o card clicado anteriormente deve voltar a exibir a pergunta e apenas a resposta do card clicado por último deve ser exibida.

Se o mesmo card for clicado novamente, ele deve voltar a exibir a pergunta, como em cards-estado-inicial.jpg.

---

# Desafio 04

A aplicação Accordion agora precisa ter as seguintes funcionalidades...

Quando a aplicação carregar, todos os itens devem estar fechados, como em accordion-estado-inicial.jpg.

Quando um item for clicado, ele ficar com as seguintes características:

- resposta da pergunta exibida
- número da pergunta na cor pink
- pergunta na cor pink
- faixa acima da pergunta na cor pink
- ícone de "-" (ao invés de "+") ao lado da pergunta

O arquivo accordion-item-aberto.jpg exemplifica o estado descrito acima.

Se outro item for clicado, o item clicado anteriormente deve voltar ao seu estado inicial (fechado) e apenas o item clicado por último deve ficar aberto.

Se o mesmo item for clicado novamente, ele deve voltar ao seu estado inicial.
