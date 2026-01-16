const posts = [
  { tile: "Empadão de Frango", likes: 30 },
  { tile: "4 receitas de purê de batata", likes: 50 },
];

console.log(posts);

let user = {
  name: "João",
  age: 31,
  email: "joaocardoso@gmail.com",
  city: "São Paulo",
  blogPosts: ["Empadão de Frango", "4 receitas de purê de batata"],
  login() {
    console.log("Usuário logado");
  },
  logout() {
    console.log("Usuário deslogado");
  },
  logBlogPosts() {
    console.log(`${this.name} escreveu os seguintes posts: `);

    this.blogPosts.forEach((post) => {
      console.log(post);
    });
  },
};

user.logBlogPosts();
