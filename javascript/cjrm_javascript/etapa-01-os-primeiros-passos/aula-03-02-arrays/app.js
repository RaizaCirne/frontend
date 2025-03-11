// Arrays
let heroes = ["Batman", "Catwoman", "Iron Man"];
// heroes[2] = "Spider-Man";
const ages = [31, 25, 39, 4, 25];
const randomArray = ["Parker", "Diana", 19, 18];

// console.log(heroes[0]);
// console.log(heroes[3 - 2]);
// console.log(heroes);
// console.log(ages[2]);
// console.log(randomArray);

// Métodos de arrays

// console.log(heroes.length);

const joinHeroes = heroes.join(" - ");
// console.log(joinHeroes);

const indexOf25 = ages.indexOf(25);
// const indexOf25 = ages.indexOf("25");
// console.log(indexOf25);

const moreHeroes = heroes.concat(["Superman", "Wolverine"]);
// console.log(moreHeroes);
// console.log(heroes);

const pushToHeroes = heroes.push("Cyclops", "Hulk");
// console.log(pushToHeroes);
// console.log(heroes);

const popHeroes = heroes.pop();
// console.log(popHeroes);
console.log(heroes);
