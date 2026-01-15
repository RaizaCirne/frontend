// Não usar var

const age = 31;

if (true) {
  const age = 41;
  const name = "Roger";

  console.log(`Dentro do primeiro bloco de código: ${age} ${name}`);

  if (true) {
    const age = 51;
    console.log(`Dentro do 2º bloco de código ${age}`);

    var test = "oi"; // var não tem escopo de bloco. É problemático.
  }
}

console.log(`Fora do bloco de código: ${age} ${name} ${test}`);
