# Bateria de Desafios 01

No decorrer desta bateria de desafios, quando houver código envolvido por 3 crases, ignore as crases e considere apenas o código dentro delas. 

As crases são apenas uma forma de escrever blocos de código com syntax-highlight (colorido) em arquivos markdown (.md), como este.

---

# Desafio 01

Crie um index.html dentro desta pasta. 

Crie uma estrutura HTML básica nele e execute-o no navegador. 

Insira nele os scripts pra que você use React e escreva JSX. 

No body, crie uma tag script para começar a escrever código React. 

Dentro da tag script, insira o código que possibilita renderizar componentes na tela.

---

# Desafio 02

Crie um componente App. 

Faça o componente App retornar o JSX abaixo. 

```jsx
<>
  <a id="thumbnail" href="https://youtu.be/_1zSGZTu6io?si=7n_2Imhr3MVV50hf">
    <div id="overlays">
      <span id="overlay-text" class="style-scope ytd-thumbnail-overlay-now-playing-renderer">Now playing</span>
    </div>
  </a>
</>
```

Renderize o componente App na tela.

Leia a mensagem do erro no console. 

Faça a modificação necessária para que o erro não seja mais exibido.

---

# Desafio 03

Limpe todo o JSX que o seu App está retornando.

Faça ele retornar o JSX abaixo.

```jsx
<h1 style={color: 'lightblue'}>Burgão do Zé</h1>
```

Renderize o componente App.

Faça a modificação necessária para que o erro no console não seja mais exibido.

---

# Desafio 04

Faça o seu App retornar o JSX abaixo.

```jsx
<h1>Burgão do Zé</h1>
<p>🎯 Promo toda quarta e quinta</p>
```

Dependendo de como esse JSX foi retornado, haverá um erro no console.

Leia a mensagem do erro.

Faça a modificação necessária para que o erro não seja mais exibido.

---

# Desafio 05

Limpe todo o JSX que o seu App está retornando.

Insira o componente abaixo acima da declaração do seu App.

```jsx
const Product = ({ img, name, description, price }) => (
  <div className="product">
    <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <h4>R$ {price}</h4>
  </div>
)
```

Faça o seu App retornar 2 produtos diferentes. 

Use informações de produtos da Amazon como props.

---

# Desafio 06

Delete a declaração do componente Product.

Faça o seu App retornar os 2 componentes abaixo.

```jsx
<Message role="assistant" content="O trabalho do programador é transformar café em código?" />
<Message role="human" content="Não. É gerar valor." />
```

Declare o componente Message. 

Faça o componente Message retornar o JSX descrito na estrutura abaixo.

```
div
  div
    img

  div
    p
```

O elemento img deve ter 3 atributos:

1. src, recebendo uma verificação se role é assistant. Se for, src deve receber a imagem icon-bot.png. Caso contrário, deve receber a imagem icon-user.png. As imagens estão na pasta assets.

2. alt, recebendo "Avatar do perfil".

3. style ou class, para que a imagem fique com 40px.

O parágrafo deve renderizar o valor de content.

---

# Desafio 07

Delete a declaração do componente Message.

Faça o seu App retornar o JSX abaixo.

```jsx
<div className="card">
  <Avatar />

  <div className="info">
    <Intro />
    <ListOfSkills />
  </div>
</div>
```

O desafio é fazer um card idêntico ao card.jpg, dentro da pasta assets.

O card deve ter informações sobre você.

O CSS do card está disponível no arquivo style.css.

Recomendações:

As classes CSS criadas no style.css podem servir como "dicas" para ajudar a criar a marcação JSX.

Crie um componente Skill que será usado para cada habilidade, dentro de ListOfSkills.

O componente Skill recebe como props o nome da habilidade, o emoji e a cor de fundo. 

O emoji de cada habilidade deve representar o quão bom você é nela: muito bom, ok ou ruim.
