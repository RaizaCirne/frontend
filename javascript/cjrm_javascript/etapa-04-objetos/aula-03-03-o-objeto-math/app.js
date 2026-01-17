// o objeto Math

console.log(Math);
console.log(Math.PI); // obtem valor da constante PI 
console.log(Math.E); // obtem a base dos logaritmos naturais

const area = 7.7;

console.log(Math.round(area)); // 8
console.log(Math.floor(area)); // 7
console.log(Math.floor(area)); // 7
console.log(Math.ceil(area)); // 8
console.log(Math.trunc(area)); // 7

// numeros aleatórios
const randomNumber = Math.random(); 

console.log(randomNumber); // gera número aleatório entre 0 e 1
console.log(Math.round(randomNumber)); // 1 ou 0 é exibido no console
console.log(Math.round(randomNumber * 100)); // gera número aleatório entre 0 e 100

// -------------------------------------------------------------------------------------

// round() - converte um número decimal em inteiro da forma padrão: se o decimal for < .5 o número é arredondado para baixo, se for > .5, é arredondado para cima

// floor() - sempre arredonda o número decimal para baixo

// ceil() - sempre arredonda o número decimal para cima

// trunc() - remove o decimal do número recebido por argumento e retorna a parte inteira dele.