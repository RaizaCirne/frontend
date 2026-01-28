// Escopo Léxico: Funções aninhadas estãa sujeitas a buscar variávies num escopo acima delas.

const external = () => {
  const book = "Sapiens";
  const internal = () => {
    // const book = "Os testamentos";
    const extraInternal = () => {
      console.log(book.toUpperCase());
    };
    extraInternal();
  };
  internal();
};

external();

// Independente de quantos níveis de aninhamento tiver, a variável que você estiver usando dentro de uma função aninhada, vai ser buscada e acessada nos escopos externos a essa função aninhada. 