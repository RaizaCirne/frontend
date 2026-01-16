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
    // console.log(`${this.name} escreveu os seguintes posts: `);
    // this.blogPosts.forEach((post) => {
    //   console.log(post);
    // });
    console.log(this); // Devido ao uso da arrow funcion, o valor do this é o objeto window
  },
};

user.logBlogPosts();
