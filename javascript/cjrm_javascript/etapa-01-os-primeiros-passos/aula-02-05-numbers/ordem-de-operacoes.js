// ordem de operações
const radius = 10;
const pi = 3.14;
const area = pi * radius ** 2;
console.log(area);

// JS chegou no resultado 314 de área por causa da ordem de precedência das operações

// 1º parenteses
// 2º expoentes ou raízes
// 3º multiplicação e divisão
// 4º adição e subtração

const crazyOperation = 5 * (10 - 3) ** 2;
console.log(crazyOperation);

// 10 - 3 = 7
// 7 ** 2 = 49 
// 49 * 5 = 245 