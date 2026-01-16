// blocos de código aninhados

let age = 31;

if (true) {
  let age = 41;
  let name = "Roger";

  console.log(`Dentro do primeiro bloco de código: ${age} ${name}`); // Retorna 41, pega o valor da age mais próxima, que é a local.

  if (true) {
    console.log(`Dentro do 2º bloco de código ${age}`); // Retorna 41
  }
}

console.log(`Fora do bloco de código: ${age} ${name}`);
