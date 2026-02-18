# Bateria de Desafios 34

Os desafios desta bateria são relacionados à aplicação `game-reviews`.

Se não foi explicado "como" fazer, descobrir é parte do desafio.

---

## Desafio 1

Identifique se há alguma oportunidade de refatoração na lógica dos componentes Reviews e GameReview.

---

## Desafio 2

Atualize o Next.js para a v14.2.3. 

---

## Desafio 3

Até aqui, as páginas do segmento dinâmico `/analises/[slug]` estão sendo renderizadas sob demanda, no servidor, a cada request do navegador. Você pode visualizar isso ao executar o comando de build e identificar que, diferentemente das outras rotas (estáticas), a rota `/analises/[slug]` tem um símbolo "f" na frente, como mostrado em `01-build-sem-generate-static-params.png`. 

Ou seja, quando a página da análise do Bloodborne (por exemplo) é acessada, o navegador envia um request, o servidor processa este request e responde o navegador com a página em questão. 

Toda vez que o navegador faz request para o path `/analises/bloodborne`, o server executa o componente `GameReview`, gera novamente o HTML da página e o envia para o navegador. 

Porém, isso traz desvantagens se comparado a páginas renderizadas de forma estática. Retornar uma página estática é mais rápido, por que o HTML é gerado no momento do build. 

Além disso, uma página renderizada de forma dinâmica precisa que um servidor Node.js esteja rodando, afinal o servidor precisa processar os requests e retornar um HTML a cada request para essa rota dinâmica. 

Dito isso... 

Há uma forma de gerar, de forma estática, as páginas de um segmento dinâmico. Para fazer isto, pesquise por `generateStaticParams`. 

Ao usar `generateStaticParams` e executar o comando de build, desta vez a rota `/analises/[slug]` será exibida com um círculo preenchido na frente e as páginas estáticas listadas abaixo da rota, como mostrado em `02-build-com-generate-static-params.png`. 

Não se preocupe se ao executar a aplicação em modo de produção, a mensagem abaixo for exibida no console do navegador. Isso será abordado depois. 

"The resource http:... was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate as value and it is preloaded intentionally."

---

## Desafio 4

Identifique se há alguma oportunidade de refatoração, após implementar o desafio acima.

---

## Desafio 5

Faça a página `/analises` exibir as análises de forma ordenada, da mais recente para a mais antiga. 

Não se preocupe em fazer "A" implementação maravilhosa de ordenação. Um dos principais objetivos da ordenação é apenas fazer o que o desafio abaixo pede. 

---

## Desafio 6

Faça o componente `Home` exibir, de forma automatizada, a análise mais recente. 

Como mencionado anteriormente, não se preocupe em fazer uma implementação robusta de ordenação. O foco deste desafio é remover as informações hard-coded e deixar o componente `Home` dinâmico.

---

## Desafio 7

Identifique se há alguma oportunidade de refatoração, após implementar os desafios acima.
