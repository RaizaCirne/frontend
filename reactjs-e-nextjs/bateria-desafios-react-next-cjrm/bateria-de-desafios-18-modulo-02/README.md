# Bateria de Desafios 18

Se não foi especificado "como" fazer, descobrir é parte do desafio.

---

## Desafio 01

Ao entrar na tela com o mapa, deixe o link "Cidades" estilizado como na imagem 01. 

---

## Desafio 02

Ao implementar a solução do desafio acima, garanta que o clique no botão "Voltar" do navegador realmente está voltando para a url anterior. 

---

## Desafio 03

Adicione um botão "Voltar" ao exibir os detalhes da viagem, como na imagem 02.

CSS do botão:

```css
.city-details .btn-back {
  font-weight: 600;
  font-size: 1.6rem;
  background: none;
  border-radius: 5px;
  padding: 1rem 3rem;
  color: var(--color-light-1);
  border: 1px solid var(--color-light-1);
  cursor: pointer;
  width: 14rem;
}
```

Este CSS é apenas uma sugestão. Você pode modificá-lo, se sentir que é necessário. 

---

## Desafio 04

Traga os dados das cidades para a aplicação apenas quando a tela com o mapa for acessada. 

---

## Desafio 05

Integre o mapa da biblioteca Leaflet em sua aplicação. 

---

## Desafio 06

Exiba, no mapa, os marcadores de cada cidade da lista de cidades.

---

## Desafio 07

Ao clicar em uma cidade da lista, faça o mapa exibir a cidade (imagem 02).

Faça com que, ao clicar no botão "<- Voltar" do componente de detalhes da viagem, o mapa continue exibindo a cidade clicada. 

Exemplo: se Budapeste é clicada, o mapa deve exibir Budapeste e, quando o botão "<- Voltar" do componente de detalhes da viagem é clicado, a lista de cidades deve voltar a ser exibida e o mapa deve continuar exibindo Budapeste, como mostrado nas imagens 02 e 03.

Não se preocupe se, ao clicar no botão "<- Voltar", novos requests forem exibidos na aba Network. Vamos cuidar disso depois. 
