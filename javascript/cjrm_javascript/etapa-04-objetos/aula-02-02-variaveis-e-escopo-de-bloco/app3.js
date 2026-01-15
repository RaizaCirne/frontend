// variáveis e escopo de bloco

// Tentando recriar age no escopo global
let age = 31;

// let age = 51; // Não podemos recriar variável de mesmo nome no mesmo escopo.

if (true) {
  let age = 41; // Só pode ser acessada dentro desse bloco
  let name = "Roger";
  console.log(`Dentro do primeiro bloco de código: ${age} ${name}`); // Dentro do bloco retorna 41
}

console.log(`Fora do bloco de código: ${age} ${name}`); // Fora do bloco retorna 31, referenciando a age declarada no escopo global.
// name é local, não está disponível aqui fora do bloco
