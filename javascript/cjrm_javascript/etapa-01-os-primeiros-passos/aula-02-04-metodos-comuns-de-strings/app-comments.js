// métodos comns de strings
const email = "laracroft@rogermelo.com.br";

const lastIndexOfA = email.lastIndexOf("a");
const emailSlice = email.slice(4, 9);
// const emailReplace = email.replace("l", "y");
const emailReplace = email.replace("laracroft", "chun-li");

console.log(lastIndexOfA, email);
console.log(emailSlice, email);
console.log(emailReplace, email);

// lastIndexOf(" ") -> Obtem o index da última ocorrência do caractere que você passar por argumento;

/*
slice( , ) -> Passamos dois argumentos: 

1) Número que representa o index do caractere a partir do qual essa parte da string deve ser pega 
2) Número que representa a partir de onde a string deve ser cortada. 

Usar slice quando quiser OBTER UMA PARTE de uma string. 
*/

/*
replace() -> Substitui um caractere de uma string por outro

1) String que deseja substituir 
2) Caractere que vai substituir o caractere passado no 1º argumento. 
*/