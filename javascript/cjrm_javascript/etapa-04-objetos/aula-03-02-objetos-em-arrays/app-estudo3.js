let user = {
  name: "João",
  age: 31,
  email: "joaocardoso@gmail.com",
  city: "São Paulo",
  blogPosts: [
    { tile: "Empadão de Frango", likes: 30 },
    { tile: "4 receitas de purê de batata", likes: 50 },
  ],
  login() {
    console.log("Usuário logado");
  },
  logout() {
    console.log("Usuário deslogado");
  },
  logBlogPosts() {
    console.log(`${this.name} escreveu os seguintes posts: `);

    // iterando por cada item do array
    this.blogPosts.forEach((post) => {
      // exibindo item dentro da função
      console.log(post.tile, post.likes); // EXIBIR TÍTULO DO POST E QUANTIDADE DE LIKS
    });
  },
};

user.logBlogPosts();
