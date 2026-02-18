# Bateria de Desafios 33

Todos os desafios desta bateria são relacionados à aplicação `game-reviews`.

O conteúdo textual a ser usado nas páginas de análise dos jogos está em arquivos `.md`, dentro de `assets/content`. Não são análises em si, mas apenas parágrafos da wikipédia em pt-BR dos jogos, e isso é o suficiente para mantermos o foco na construção do projeto. 

Lembre-se: se não foi explicado "como" fazer, descobrir é parte do desafio.

---

## Desafio 1

Agora que o conteúdo da análise está sendo renderizado, descubra como aplicar estilo neste HTML renderizado, como demonstrado em `assets/ui/01-sonic-review.jpg`. 

Para isso, o plugin tailwindcss-typography pode ser usado, na versão 0.5.13.

Embora seja um desafio relacionado ao Tailwind, a ideia é testar as habilidades de pesquisar e correr atrás da solução. Isso é valioso por si só e independe da tecnologia utilizada. 

---

## Desafio 2

Já que estamos carregando a análise a partir de um arquivo markdown, faz mais sentido que informações como título, imagem e data da análise estejam neste arquivo .md, e não no componente da análise. 

Adicione, no markdown da análise, título, imagem e data da análise a serem parseados no momento da renderização. 

Para fazer isso, a lib gray-matter pode ser usada, na versão 4.0.3. 

O resultado pode ser visto em `assets/ui/02-sonic-review-with-gray-matter.jpg`.

---

## Desafio 3

Dentro da pasta `app/analises`, ao invés de ter que criar um componente para cada análise (SonicFrontiersReview, MarioWonderReview, etc), faça que um componente genérico fique responsável por renderizar as análises dos jogos. 

Para fazer isto, pesquise por Dynamic Routes no Next.js.
