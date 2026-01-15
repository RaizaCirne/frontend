// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;

  console.log(cor, marca, portas);
}
// console.log(var, marca, portas);

// Resposta:
// 1 - Tentou dar console.log no var que não é a palavra chave, é a variável
// 2- Colocar console.log dentro do escopo local

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// Resposta: Colocar a variável no escopo global e não no local.

// O que fazer para total retornar 500?
var numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

// Resposta: Trocar var por let
