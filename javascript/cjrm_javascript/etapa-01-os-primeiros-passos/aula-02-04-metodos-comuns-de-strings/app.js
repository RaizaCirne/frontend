// métodos comns de strings
const email = "laracroft@rogermelo.com.br";

const lastIndexOfA = email.lastIndexOf("a");
const emailSlice = email.slice(4, 9);
// const emailReplace = email.replace("l", "y");
const emailReplace = email.replace("laracroft", "chun-li");

console.log(lastIndexOfA, email);
console.log(emailSlice, email);
console.log(emailReplace, email);
