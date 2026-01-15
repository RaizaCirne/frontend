// Escopo de Bloco: Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declarmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.

// Const e Let no lugar de Var: A partir de agora vamos utilizar apenas const e let para declarmos variáveis.

// Var Vaza o Bloco: Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined.

let mes = "Dezembro";
if (true) {
  // console.log(mes);
}

// console.log(mes);

// Const e Let no lugar de Var: A partir de agora vamos utilizar apenas const e let para declarmos variáveis.
if (true) {
  const carro = "Fusca";
  console.log(carro);
}
// console.log(carro); // erro, carro is not defined

// {} cria um bloco: Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}

{
  var carro2 = "Fusca 2";
  const ano = 2018;
}
console.log(carro2); // Carro
// console.log(ano); // erro ano is not defined

// Const: Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.

const semana = "Sexta";
// const semana = "Quinta"; ERRO NO HOISTING

console.log(semana);
