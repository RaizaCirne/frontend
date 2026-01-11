// criando um objeto literal

let user = {
  name: "João",
  age: 31,
  email: "joaocardoso@gmail.com",
  city: "São Paulo",
  blogPosts: ["Empadão de Frango", "4 receitas de purê de batata"],
};

// console.log(user.name);

// Modificando valor da propriedade age
user.age = 32;
console.log(user.age);

// Forma alternativa de acessar propriedade usando notação de colchetes:
console.log(user["name"]);
// console.log(user["email"]);

// Modificando valor da propriedade name usando a notação de colchetes:

console.log(user["name"]); // antes de modificar valor da name
user["name"] = "José";
console.log(user["name"]); // depois de modificar valor da name

//  ----------------------

const key = "email";
console.log(user[key]); // Isso é o mesmo que inserir user['email]

console.log(typeof user); // verificando tipo de dado -> object
