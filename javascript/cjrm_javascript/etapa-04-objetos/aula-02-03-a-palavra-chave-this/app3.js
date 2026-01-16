// Iterar sobre o blogPosts e exibir no console

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
  logBlogPosts: function () {
    console.log(`${this.name} escreveu os seguintes posts: `);

    this.blogPosts.forEach((post) => {
      console.log(post);
    });
    // como esse this resulta no array do blogPosts, podemos desencadear um forEach()
    // como argumento do forEach, inserir uma função que tem o argumento post e dentro da função, inserimos o console que vai exibir o post que tá sendo exibido por parâmetro
    // acima do forEach() inserir um console que vai exibir uma mensagem
  },
};

user.logBlogPosts();
