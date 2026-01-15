// blocos de código aninhados com const 

const age = 31;

if (true) {
  const age = 41;
  const name = "Roger";

  console.log(`Dentro do primeiro bloco de código: ${age} ${name}`);

  if (true) {
    const age = 51;
    console.log(`Dentro do 2º bloco de código ${age}`);
  }
}

console.log(`Fora do bloco de código: ${age} ${name}`);
