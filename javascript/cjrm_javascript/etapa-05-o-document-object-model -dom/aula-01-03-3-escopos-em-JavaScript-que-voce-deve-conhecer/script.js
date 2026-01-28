// Escopo de Funções

// Escopo: A visibilidade de uma variável: Dependendo de onde declaro a variável, outras partes do código podem ou não acessar esse valor.

// Declarando variável dentro da função e acessando fora
function getMessage() {
  let message = "Oi!";
}

// NOT DEFINED ->  "message" é acessível apenas dentro da função getMessage
// console.log(message);

// Declarando variável dentro da função e acessando fora
function myFunc() {
  let cat = "Zeca";
  const age = 3;
  var color = "cinza";
  console.log(age);
}

// console.log(cat); // NOT DEFINED -> cat, age e color não existem fora do escopo da função myFunc().

// Podemos ter multiplas funções que tem variáveis e constantes com os mesmos nomes dentro delas.
// Declarando variável dentro da função e acessando DENTRO da função

function myFunc2() {
  var color = "branco";
  const age = 5;
  console.log(age);
}

// As variáveis e constantes declaradas dentro de uma função são acessadas apenas dentro dessa função. Não conseguimos acessar e manipular variáveis e constantes fora do escopo (do limite da função).

myFunc(); // Nesse contexto age armazena 3
myFunc2(); // Nesse contexto age armazena 5

// Duas constantes com o mesmo nome em escopos diferentes.

const dog = "Pastor-alemão"; // Aqui é a dog do escopo global

function dogWatch() {
  const dog = "Samoieda"; // Aqui é a dog do escopo da função dogWatch()
  console.log(dog); // Samoieda 
}

dogWatch(); // Esse console exibe a dog mais próxima dele que á a declarada no escopo da função
console.log(dog); // Esse console fora da função exibe a dog do escopo global - Pastor-alemão

// Não é possível ter duas variáveis de mesmo nome no mesmo escopo
// É possível ter duas variáveis de mesmo nome em ESCOPOS DIFERENTES.
