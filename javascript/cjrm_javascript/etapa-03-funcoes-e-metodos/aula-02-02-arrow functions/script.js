/*
// função tradicional

const double = function (number) {
  return number * 2;
};
*/

/*
// arrow funcion - Exemplo 1
const double = (number) => {
  return number * 2;
};
*/

/*
//arrow funcion (com valor defaul)- Exemplo 2
const double = (number = 0) => {
  number * 2;
};
*/

// arrow funcion - Exemplo 3
const double = number => number * 2;

const result = double(3);
console.log(`O resultado é: ${result}`);