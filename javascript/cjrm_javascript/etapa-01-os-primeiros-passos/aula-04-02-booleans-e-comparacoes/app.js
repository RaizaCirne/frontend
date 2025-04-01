// Booleans e comparações
console.log(true, false, "true", "false");

// Métodos podem retornar booleans
const email = "brucewayne@rogermelo.com.br";
const includes = email.includes("wayne");
const names = ["dio", "roger", "robert"];
const arrayIncludes = names.includes("rob");

// Operadores de comparação
const age = 31;
const myName = "roger";

/*
Comparações entre números: 
console.log(age == 31); // true
console.log(age == 35); // false

console.log(age != 35); // true
console.log(age != 31); // false

console.log(age > 30); // true
console.log(age > 31); // false
console.log(age < 31); // false
console.log(age < 32); // true

console.log(age <= 31); // true
console.log(age >= 31); // true
*/

// Comparações entre números:
console.log(myName == "roger"); // true
console.log(myName == "Roger"); // false
console.log(myName > "belinha"); // true
console.log(myName > "Roger"); // true
console.log(myName > "Belinha"); // true
