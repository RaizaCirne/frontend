// valores primitivos
let scoreOne = 50;
let scoreTwo = scoreOne; // Uma cópia desse valor é criada e armazenada na memória stack, pois estamos lidando com valor primitivo.

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`); // Tanto a scoreOne quanto a scoreTwo armazenam 50

scoreOne = 100; // Modificamos o valor da scoreOne
console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`); // Agora a scoreOne armazena 100 e a scoreTwo continua armazenando 50 

// valores de referência
let userOne = { name: "Roger", age: 31 };
let userTwo = userOne; // Tentamos criar uma cópia do objeto userOne que está armazenado na memória heap. As variáveis userOne e userTwo estão apontando para o mesmo objeto -> { name: "Roger", age: 31 }

console.log(userOne, userTwo); 

userOne.age = 32; // Modificando o valor da age que userOne armazena 

console.log(userOne, userTwo); // O valor da age dos dois objetos foram modificadas para 32. Visualizamos o mesmo objeto, pois userOne e userTwo apontam para o mesmo objeto no heap. 
