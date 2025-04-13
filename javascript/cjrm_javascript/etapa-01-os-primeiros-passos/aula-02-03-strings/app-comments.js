// strings
console.log("hello, world");

const email = "leon@rogermelo.com.br";

console.log(email);

// concatenação de strings
const firstName = "Nathan";
const lastName = "Drake";
const fullName = firstName + " " + lastName;

console.log(fullName);

// acessando caracteres
console.log(fullName[0]);
console.log(fullName[2]);

// comprimento de uma string
//length
console.log(fullName.length);

// - prestar atenção na escrita do length
// - espaço em branco é contado como caractere

// métodos de string
// Invocamos o método específicando parênteses ()
// Dentro dos parênteses podemos colocar um ARGUMENTO

// toUpperCase() -> Caracteres da string ficam maiúsculos
console.log(fullName.toUpperCase());

// toLowerCase() -> Caracteres da string ficam minúsculos
const result = fullName.toLowerCase();

console.log(result, fullName);

// indexOf(" ") -> Encontra o index (a posição do caractere específicado nos parênteses)
const index = email.indexOf("@");

console.log(index);


// Função -> pedaço de código que executa uma ação específica
// Médodo -> É uma função que está associada a um objeto ou tipo de dado em particular.