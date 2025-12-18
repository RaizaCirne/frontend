// utilizando callbacks
const ul = document.querySelector('[data-js="ul"]');

const socialNetworks = ["YouTube", "Twitter", "Instagram", "Facebook"];

let HTMLTemplate = "";

socialNetworks.forEach((socialNetwork) => {
  HTMLTemplate += `<li style="color: deeppink;">${socialNetwork}</li>`;
});

console.log(HTMLTemplate);

ul.innerHTML = HTMLTemplate;