// Criar método que exibe todos os blogPosts e exibe no console
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
  }, // declarar método logBlogPosts que é uma função e dentro dessa função precisamos de alguma forma acessar o valor da propriedade "blogPosts" para exibi-los no console.
  logBlogPosts: function () {
    console.log(this.blogPosts); // Acessar a propriedade do objeto user usando this.blogPosts. 
  },
};

user.logBlogPosts();
