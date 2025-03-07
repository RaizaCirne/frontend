// Verificar tipo de dado
var nome = "André";
var idade = 23;
var time = null;
var simbolo = Symbol();

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof time);
console.log(typeof simbolo);

// String
var nome = "André";
var sobrenome = "Rafael";
var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

// var gols = 1000;
// var frase = "Romário fez " + gols + " gols";
// console.log(frase);
// console.log(typeof frase);

var ano = "2018";
var mes = 8;
console.log(ano + mes);

var ano = 2018;
var mes = 8;
console.log(ano + mes);

// Aspas Duplas, Simples e Template String
var frase1 = 'Esse é o "melhor" jogo';
console.log(frase1);

// Template String
var gols = 1000;
var frase2 = "Romário fez " + gols + " gols";
var frase3 = `Romário fez ${gols * 2} gols`;
console.log(frase2);
console.log(frase3);
