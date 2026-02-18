# Bateria de Desafios 37

Lembre-se: se não foi explicado "como" fazer, descobrir é parte do desafio.

---

Levante o server de produção e teste a seguinte URL no navegador: 

- http://localhost:3000/analises/abc

O resultado provavelmente será uma tela informando que uma exceção aconteceu no servidor. 

Seu desafio é impedir que este tipo de erro seja exibido quando um request para um slug inexistente for executado. 

Ao invés de exibir o erro, a interface da aplicação deve renderizar um componente de "Não encontrado", como demonstrado em `img/01-not-found-component.png`.

Enquanto estiver desenvolvendo sua implementação, o server de desenvolvimento pode ser usado, pois neste caso, a tela irá mostrar algumas informações a mais sobre o erro causado pelo slug inexistente. 

Após implementar a sua resolução, pode acontecer da seguinte mensagem ser exibida no console do browser: 

"No default component was found for a parallel route rendered on this page. Falling back to nearest NotFound boundary. Learn more: https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#defaultjs". 

Esta mensagem é apenas um aviso que pode ser ignorado. Já existe um bug report (link abaixo) sugerindo que o Next provavelmente não deveria mostrar este aviso neste caso, pois não há rotas paralelas renderizadas na página da análise. 

Links relevantes para este desafio:

- [notFound function](https://nextjs.org/docs/app/api-reference/functions/not-found)
- [not-found.jsx](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
- [Bug Report](https://github.com/vercel/next.js/issues/66671)
