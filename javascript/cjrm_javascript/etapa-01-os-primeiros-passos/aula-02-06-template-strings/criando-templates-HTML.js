const postTitle = "É bolacha ou biscoito";
const postAuthor = "Matheus Saad";
const postComments = 15;

// criando templates HTML
const html = `
  <h2>${postTitle}</h2>
  <p>${postAuthor}<p/>
  <span>Este post tem ${postComments} comentários.</span>
`;

console.log(html);