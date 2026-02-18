# Bateria de Desafios 23

Lembre-se: se não foi explicado "como" fazer, descobrir é parte do desafio.

---

## Desafio 1

Execute a aplicação dos arquivos app.jsx e index.css na pasta src. É um código parecido com o código inicial disponibilizado no desafio passado da context API, porém, com um problema de lentidão...

Siga os passos abaixo para reproduzir o problema.

Passo a passo para reproduzir o problema:

1. Quando a aplicação carregar, expanda o arquivo de músicas clicando em "Mostrar";
2. Pesquise por uma das 4 músicas que está na lista de músicas que foi inicialmente carregada com a aplicação. 

Observe que ao pesquisar por uma música enquanto a lista de músicas está expandida, a aplicação fica lenta. E é exatamente este problema que você deve resolver neste desafio, usando a função do React que pode ajudar a evitar este problema. 

Caso seu navegador tenha insuficiência de memória para carregar as músicas do arquivo, diminua a quantidade de itens do array archivedSongs. 

O objetivo deste desafio é:

1. Resolver o problema de lentidão da aplicação **AO REPRODUZIR OS PASSOS DESCRITOS ACIMA**.
2. Checar se você sabe usar a função/método do React que pode ajudar a evitar o problema.

---

## Desafio 2

Após resolver o desafio acima, troque a prop show={false} do componente <Archive /> por uma prop options={archiveOptions}.

archiveOptions é um objeto que deve ser declarado dentro do componente App e deve ter as seguintes propriedades:

- show, armazenando false;
- title, armazenando a mensagem "Além das [QTD_MÚSICAS] músicas da lista, veja as músicas arquivadas:".

Substitua [QTD_MÚSICAS] pela quantidade de músicas da lista de músicas carregadas com a aplicação. Ao adicionar uma música na lista, a quantidade deve ser atualizada automaticamente. 

No componente Archive, o h2 deve exibir options.title e a variável de estado showArchive deve ser inicializada com options.show. 

Observe que ao reproduzir o passo a passo do desafio anterior, a aplicação volta a ficar lenta. Use a função do React que pode ajudar a evitar este problema de lentidão.

---

## Desafio 3

Converta o CSS do projeto Racha Conta para Tailwind CSS. 

Lembre-se: se não foi explicado "como" fazer, descobrir é parte do desafio.

Se travar em alguma parte do processo, basta ver a resolução na próxima aula. 
