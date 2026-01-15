// blocos de código aninhados

let age = 31;

if (true) {
  let age = 41;
  let name = "Roger";

  console.log(`Dentro do primeiro bloco de código: ${age} ${name}`);

  if (true) {
    let age = 51; // Criando nova variável nesse escopo local, disponível para usar apenas nesse bloco. 
    console.log(`Dentro do 2º bloco de código ${age}`); // Retorna 51
  }
}

console.log(`Fora do bloco de código: ${age} ${name}`);
