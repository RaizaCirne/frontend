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

// métodos de string
console.log(fullName.toUpperCase());

const result = fullName.toLowerCase();

console.log(result, fullName);

const index = email.indexOf("@");

console.log(index);
