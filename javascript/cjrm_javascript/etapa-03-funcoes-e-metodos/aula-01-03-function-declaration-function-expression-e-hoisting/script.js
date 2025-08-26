// Function declaration
function sayHi() {
  console.log("oi");
}

// Function expression: atribui a função à uma variável
const showFood = function () {
  console.log("pizza");
};

sayHi();
sayHi();
sayHi();

showFood();
showFood();
showFood();

// Diferença -> hoisting (elevação)
// Function declaration: JS puxa a declaração da função para o topo do arquivo
// Function expression: JS NÃO puxa função para o topo -> A declaração da função deve vir antes da execução.

// hoisting funciona apenas para a FUNCTION DECLARATION
// OBS: Preferir declarar todas as funções sempre no topo do código.