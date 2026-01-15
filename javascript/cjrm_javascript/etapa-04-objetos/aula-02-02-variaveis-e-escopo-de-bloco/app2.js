// variáveis e escopo de bloco

// Escopo global
let age = 31;

if (true) {
  age = 41; // Faz o valor da variável no escopo global ser modificado para 41 e ser exibido no console nos dois casos. Porque mudamos o valor dela aqui, antes de usar nos dois consoles abaixo. 
  console.log(`Dentro do primeiro bloco de código: ${age}`);
}

console.log(`Fora do bloco de código: ${age}`);
