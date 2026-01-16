// arrow function - funcionam de forma diferente com o this
// o valor do this não muda em relação ao this do ponto da invocação do método
//  this referencia o window estando dentro de uma arrow function

let user = {
  name: "João",
  age: 31,
  email: "joaocardoso@gmail.com",
  city: "São Paulo",
  blogPosts: ["Empadão de Frango", "4 receitas de purê de batata"],
  login: function () {
    console.log("Usuário logado");
  },
  logout: function () {
    console.log("Usuário deslogado");
  },
  logBlogPosts: () => {
    console.log(`${this.name} escreveu os seguintes posts: `);

    this.blogPosts.forEach((post) => {
      console.log(post); // erro no console
    });
  },
};

user.logBlogPosts();
