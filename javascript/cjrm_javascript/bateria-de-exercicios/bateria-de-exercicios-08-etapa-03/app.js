/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/

function multiply(firstNumber = 0, secondNumber = 0) {
  return firstNumber * secondNumber;
}

console.log(multiply(5, 9)); // retorna 45

/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/

const divide = function (firstNumber = 0, secondNumber = 0) {
  return firstNumber / secondNumber;
};

console.log(divide(10, 5)); // retorna 2

/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/

const log = function (value = "Você deve passar um valor como argumento") {
  console.log(value);
};

// for (let i = 0; i < 7; i++) {
//   let counter = i + 1;
//   log(`Esta é a ${counter}ª vez que essa string é exibida`);
// }

/*
Explicação do exercício 03: 
1 - value é o que a função log recebe por parâmetro
2 - value = "Você deve passar um valor como argumento" -> a string dentro de value é o que previne que o parâmetro da função log receba undefined; 
3 - console.log(value) -> Toda vez que a função log() for invocada, ela vai exibir no console o valor do parâmetro value, ou seja, vai exibir: "Você deve passar um valor como argumento", a não ser que eu passe um novo argumento para value. 
4 - Exibindo a frase   "Esta é a Xª vez que essa string é exibida." 7x no console: 

  for (let i = 0; i < 7; i++) {
    let counter = i + 1;

    log(`Esta é a ${counter}ª vez que essa string é exibida`);
}

OBS: let counter = i + 1; 
-> Na primeira execução do loop i armazena 0, e 0+1 = 1. 
-> Na segunda execução do loop i armazena 1, e 1+1 = 2. 
-> Na segunda execução do loop i armazena 2, e 2+1 = 3 e assim por diante, até chegar 7. 
*/

/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no console;
  - Implemente uma função que retorna um novo array com as strings do array "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da função.
*/

const millennialWords = [
  "lol",
  "yolo",
  "troll",
  "stalkear",
  "selfie",
  "influencer",
  "crush",
  "fitness",
  "hater",
  "bae",
  "random",
  "kawaii",
  "outfit",
  "mood",
  "fail",
];

// “Criei uma função que recebe um array como parâmetro. Dentro dela, crio um novo array vazio para armazenar os resultados. Em seguida, uso um loop para percorrer cada item do array recebido, transformando cada string em letras maiúsculas e adicionando ao novo array. No final, a função retorna esse novo array, sem modificar o array original. Fora da função, utilizo o log para exibir o resultado retornado.”

const transformToUpperCase = function (array = []) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    const wordInUpperCase = array[i].toUpperCase();
    newArray.push(wordInUpperCase);
  }

  return newArray;
};

const millennialWordsInUpperCase = transformToUpperCase(millennialWords);
log(millennialWordsInUpperCase);

/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3];

/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

// getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42])

/*
  07

  - Forme uma frase com o array abaixo e exiba-a no console.
*/

const functions = [
  function () {
    return "Plymouth";
  },
  function () {
    return "é";
  },
  function () {
    return "uma";
  },
  function () {
    return "cidade";
  },
  function () {
    return "fantasma";
  },
  function () {
    return "localizada";
  },
  function () {
    return "na";
  },
  function () {
    return "ilha";
  },
  function () {
    return "de";
  },
  function () {
    return "Montserrat,";
  },
  function () {
    return "um";
  },
  function () {
    return "território";
  },
  function () {
    return "ultramarino";
  },
  function () {
    return "do";
  },
  function () {
    return "Reino";
  },
  function () {
    return "Unido";
  },
  function () {
    return "localizado";
  },
  function () {
    return "na";
  },
  function () {
    return "cadeia";
  },
  function () {
    return "de";
  },
  function () {
    return "Ilhas";
  },
  function () {
    return "de";
  },
  function () {
    return "Sotavento";
  },
  function () {
    return "nas";
  },
  function () {
    return "Pequenas";
  },
  function () {
    return "Antilhas,";
  },
  function () {
    return "Índias";
  },
  function () {
    return "Ocidentais.";
  },
];
