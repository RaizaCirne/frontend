// Operador de Atribuição
var numero = 20;

numero += 10; // numero = numero + 10;
console.log(numero);

// Operador Ternário
var idade = 20;
var naoPossuiDiabetes = false;

var podeBeber;

podeBeber = idade >= 18 && naoPossuiDiabetes ? "Pode beber" : "Não pode beber";
console.log(podeBeber);

// IF ABREVIADO
var possuiFaculdade = false;
if(possuiFaculdade)
  console.log('Sim, possui')
else 
  console.log('Não possui')