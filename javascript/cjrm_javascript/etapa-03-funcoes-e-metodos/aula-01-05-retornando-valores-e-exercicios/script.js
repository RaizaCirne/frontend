// Retornando valores diretamente
const double = function (number) {
  return number * 2;
};

// Armazenar valor em constante dentro da função e retornar a constante
// const double = function (number) {
//   const doubleResult = number * 2;
//   return doubleResult;
// };

// Obter valor da const fora do bloco da função pra gente fazer alguma coisa com esse valor: Fazer a função retornar esse valor
const result = double(3);

const showResult = function (value) {
  return `O resultato é: ${value}`;
};

console.log(showResult(result));
