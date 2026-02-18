# Bateria de Desafios 39

Lembre-se: se não foi explicado "como" fazer, descobrir é parte do desafio.

A partir daqui, vamos começar a ver usos um pouco mais complexos de Client Components no Next.js.

Na página de listagem das análises, vamos adicionar um SearchBox ao lado da paginação, pra que o usuário comece a digitar o nome do jogo e o SearchBox exiba uma listagem de resultados. A exibição dessa listagem de resultados torna possível o usuário encontrar a análise certa rapidamente. 

Para implementar essa funcionalidade, vamos usar uma lib chamada Headless UI (1). 

A Headless UI é um conjunto de componentes de UI não-estilizados, projetada para funcionar muito bem com o Tailwind. 

O componente que usaremos é o Combobox (2), também conhecido como autocomplete. 

O Combobox é uma combinação de input e dropdown list, onde o usuário pode selecionar uma opção, ao mesmo tempo em que é possível digitar e filtrar as opções. 

Implementar este componente por conta própria, do jeito certo, demandaria bastante esforço, considerando que ele deve funcionar com mouse, navegação do teclado e ser acessível. 

Por isso, o ideal neste caso é usar uma lib como a Headless UI. Além disso, essa implementação do Combobox será um exemplo útil de como integrar um componente de terceiros em uma aplicação Next.js.

Neste momento, há também uma outra lib de UI famosa chamada shadcn/ui. Porém, usá-la sem TypeScript é mais custoso e exige bastante configuração. Por isso, vamos investir melhor o nosso tempo na Headless UI.

1. [Headless UI](https://headlessui.com/)
2. [Combobox](https://headlessui.com/react/combobox)

---

## Desafio 1

Antes de instalar a Headless UI e começar a implementar o Combobox no Desafio 2, é recomendado que algumas dependências do projeto sejam atualizadas. São elas:

- isomorphic-dompurify, para a v2.12.0;
- tailwindcss, para a v3.4.4.

Caso você esteja usando o WSL, alguns conflitos operacionais podem acontecer ao tentar atualizar as dependências acima (aconteceu comigo). O que fiz para resolvê-los: 

1. Deletei a node_modules e package-lock.json;
2. Modifiquei as versões no package.json, manualmente;
3. Instalei novamente as dependências do projeto. 

Possivelmente, haverão avisos "deprecated" ao instalar/atualizar as dependências, como em `src/img/01-desafio-01-deprecated.png`. Não se preocupe com isso. Concentre-se no que vamos implementar primeiro e, após isso, você pode cuidar de dependências deprecated, se achar necessário. 

Após atualizar as dependências, instale a @headlessui/react v2.1.0. 

---

## Desafio 2

Crie um componente `SearchBox` dentro da pasta `components`. Este componente será usado na página de listagem das análises, ao lado do componente de paginação, como demonstrado em `src/img/02-desafio-02-search-box.png`.

Use o componente Combobox da Headless UI para que, ao começar a digitar no input de pesquisa, o dropdown list seja exibido, como em `src/img/03-desafio-02-dropdown.png`. Observe que neste screenshot, a filtragem ainda não está acontecendo (vamos cuidar disso no próximo desafio) pois Disco Elysium não contém "a", mas o dropdown com títulos dos 5 jogos é exibido ao inserir um valor. 

Inicialmente, você pode usar o array `src/scripts/reviews.js` para testar.

---

## Desafio 3

Agora que o dropdown exibe a lista dos 5 jogos ao começar a digitar, filtre os nomes dos jogos conforme a digitação no input acontece, como demonstrado em `src/img/04-desafio-03-filtragem.png`.

---

## Desafio 4

Ao selecionar uma opção do dropdown, faça com que a página da análise do jogo selecionado seja exibida. 

Para implementar essa funcionalidade, pesquise pelo hook `useRouter`, do Next.js.

---

O arquivo `src/scripts/tailwind-classes.jsx` contém as classes Tailwind que usei. Porém, o nome dos componentes no arquivo do SearchBox foi modificado e apenas as classes dos componentes estão àmostra, pois consultar a doc do Headless UI e descobrir quais componentes e props usar é parte do desafio. O intuito do arquivo `tailwind-classes.jsx` é apenas auxiliar na estilização, pra que você não gaste muita energia pensando em CSS. 

Ao concluir estes quatro desafios, já temos a funcionalidade básica do SearchBox de pé. 

Após a resolução desta Bateria, será mostrado como buscar as análises de fato, ao invés de usar o array reviews de forma hard-coded. 
