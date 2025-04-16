// Métodos de arrays
let heroes = ["Batman", "Catwoman", "Iron Man"];
const ages = [31, 25, 39, 4, 25];
console.log(heroes.length);

// Método join(): Retorna uma nova string com todos os itens do array concatenados e separados por vírgula
const joinHeroes = heroes.join(" | ");
console.log(joinHeroes);

// Método indexOf: Obtém o index da primeira ocorrência do array
// Se passar um valor que não existe no array para o indexOf(), -1 é retornado.
const indexOf25 = ages.indexOf(25);
console.log(indexOf25);

// Método concat: Pode concatenar/juntar dois arrays
// CONCAT() NÃO MODIFICA O ARRAY ORIGINAL
const moreHeroes = heroes.concat("Superman", "Wolverine");
console.log(moreHeroes);

// Método push(): Adiciona itens ao array e retorna um novo número de itens que o array tem agora.
// PUSH() ALTERA O VALOR ORIGINAL -> MUTAÇÃO DE VALORES
const pushToHeroes = heroes.push("Cyclops", "Hulk");
console.log(pushToHeroes);
console.log(heroes);

// Método pop(): Remove o último item do array e retorna o item removido
// POP() MODIFICA O VALOR ORIGINAL 
const popHeroes = heroes.pop();
console.log(popHeroes);
console.log(heroes);