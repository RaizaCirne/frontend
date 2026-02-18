# Bateria de Desafios 32

Todos os desafios desta bateria são relacionados à aplicação `game-reviews`.

Lembre-se: se não foi explicado "como" fazer, descobrir é parte do desafio.

---

## Desafio 1

Na página /analises, insira cards com imagem e título dos jogos, como demonstrado na imagem imgs/01-cards-analises.jpg. 

As características dos cards da imagem mencionada acima são as seguintes:

- Dimensões da imagem: 320 de largura por 180 de altura;
- Tamanho da fonte: 1.125rem;
- Cor de fundo: slate-700.

Cada card deve ser um link no qual, ao ser clicado, leva para a página da análise do jogo. 

---

## Desafio 2

Após fazer o desafio acima, faça o build da aplicação e execute a versão de produção. 

Se houver uma mensagem sobre otimização de imagem no terminal do server, faça o que a mensagem diz, faça o build da aplicação e execute a versão de produção novamente. 

Se não houver mensagem no terminal, pode ser cache do Next. Neste caso, apague a node_modules, execute npm i, faça o build e execute a versão de produção novamente. 

Se ainda assim a mensagem não for exibida, pule este desafio. Você saberá do que se trata ao ver a resolução. 

---

## Desafio 3

Aplique, nos títulos das páginas da aplicação e nos títulos dos jogos nos cards, uma nova fonte tipográfica, como demonstrado na imagem 02-fonte-titulo-e-card.jpg. 

Você pode escolher a fonte que desejar no Google Fonts. A fonte que usei é a Montserrat, com peso 700. 

Dê preferência a uma fonte variável, pois elas escalam mais facilmente para tamanhos diferentes. Basta filtrar a busca pela opção "variable", no Google Fonts. 

Use a fonte como static asset da aplicação, como demonstrado nas imagens 03 e 04. Ou seja, a fonte deve ser servida a partir do servidor do Next. Isso ajuda a reduzir a quantidade de requests na aplicação (1 request a menos pro Google Fonts). 

Faça com que a fonte possa ser inserida através de uma classe utilitária do Tailwind, como no exemplo abaixo:

```jsx
<h2 className="font-montserrat">...</h2>
```

---

## Referências relevantes para esta bateria

- [Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
