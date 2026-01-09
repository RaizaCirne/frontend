// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var meusDados = {
  nome: "Raíza",
  sobrenome: "Cirne",
  idade: 32,
};

// Crie um método no objeto anterior, que mostre o seu nome completo

console.log(`${meusDados.nome} ${meusDados.sobrenome}`);

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raça: "Labrador",
  color: "preto",
  age: 10,
  frase: "Late ao ver um homem",
};

console.log(
  `Tenho um cachorro ${cachorro.raça} ${cachorro.color} que tem ${cachorro.age} anos e sempre ${cachorro.frase}.`
);
