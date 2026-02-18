# Bateria de Desafios 08

Nenhum dos desafios abaixo tem relação direta um com o outro. Isso significa que para cada desafio, você pode se desfazer do código do desafio anterior (ou versioná-lo antes de deletá-lo). 

Importante: estilização não é o foco em nenhum desafio desta bateria. 

Nunca é demais relembrar: se não foi especificado "como" fazer, descobrir é parte do desafio.

---

# Desafio 01

Exiba na tela um botão "Buscar imagem".

Exiba uma imagem aleatória na tela a cada clique no botão.

A imagem deve ser exibida acima do botão. 

Use qualquer API que retorne uma imagem aleatória. 

---

# Desafio 02

Quando seu App carregar ou recarregar, exiba na tela 3 imagens aleatórias. 

Use qualquer API que retorne imagens aleatórias. 

Use uma API diferente da API do desafio anterior. 

---

# Desafio 03

Volte na aplicação "Passos", que você fez em baterias passadas. 

Ao invés de deixar o array "steps" em sua aplicação, coloque-o no GitHub. 

Use o GitHub como API para obter este array em sua aplicação. 

---

# Desafio 04

Volte na aplicação "Racha-conta", que você fez em baterias passadas. 

Quando um amigo for selecionado para rachar a conta, exiba no title da aba a seguinte mensagem:

NOME_DO_AMIGO foi selecionado(a)

"NOME_DO_AMIGO" é apenas um placeholder. A mensagem deve exibir o nome do amigo selecionado. 

Se o form de rachar a conta for fechado, o title da aba deve voltar a exibir a mensagem padrão "Racha-conta".

---

# Desafio 05

Implemente uma aplicação de conversão de moedas. 

Use qualquer API de conversão de moedas que te traga o câmbio de USD para BRL, EUR para USD, etc. 

Você pode implementar essa aplicação à partir da marcação CSS e JSX abaixo. 

Lembre-se: estilização não é o foco em nenhum desafio desta bateria. 

Há um screenshot da aplicação na pasta img.

Também não se preocupe em adicionar mais options nos selects ou qualquer outro aspecto da aplicação que possa desviar a atenção dos efeitos colaterais. O foco deste desafio é o gerenciamento dos efeitos colaterais. 

O h2 deve ser renderizado apenas quando o câmbio for obtido. 

Evite que um request seja feito a cada caractere inserido no input.

O title padrão da aba deve ser "Conversor de moedas".

Exiba no title da aba o câmbio e a moeda. No exemplo abaixo, houve uma conversão de 1 USD para real brasileiro.

4.87 BRL

Quando o valor do input for limpado, volte a exibir o title padrão da aba.

```css
.selects {
  display: flex;
  gap: 5px;
}

select {
  display: block;
  margin: 10px 0;
}
```

```jsx
const App = () => (
  <>
    <input type="number" autoFocus />

    <div className="selects">
      <select>
        <option value="BRL">BRL</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
      <select>
        <option value="BRL">BRL</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
    </div>

    <h2>4.87 BRL</h2>
  </>
)
```
