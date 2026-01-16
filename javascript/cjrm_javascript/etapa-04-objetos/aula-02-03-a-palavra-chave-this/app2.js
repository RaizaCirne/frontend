// Usando this na raiz do documento : valor do this muda e referencia o contexto global que é o objeto window

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
    console.log(this.blogPosts); // aqui o this referencia o objeto user 
  },
};

// user.logBlogPosts();
console.log(this); // o valor do this aqui fora referencia o objeto window 
