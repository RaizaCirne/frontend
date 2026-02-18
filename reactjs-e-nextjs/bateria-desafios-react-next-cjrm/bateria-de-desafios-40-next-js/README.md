# Bateria de Desafios 40

Lembre-se: se não foi explicado "como" fazer, descobrir é parte do desafio.

---

## Desafio 1

Neste momento, o client component SearchBox importa e usa a função getSearchedReviews. 

Porém, get-searched-reviews.js é um módulo que não deveria rodar no client, pois contém informações sobre o CMS. É um módulo que deve rodar apenas no server. 

Portanto, o objetivo deste desafio é: lance um erro caso algum módulo que só deva rodar no server seja importado em um client component. Você pode usar o server-only, versão 0.0.1 para fazer isto. 

Ao usar o server-only, sua aplicação deve lançar um erro como o da imagem `img/01-desafio-01-erro-server-only.jpg`.

- [Keeping Server-only Code out of the Client Environment](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment)
- [server-only](https://www.npmjs.com/package/server-only)

---

## Desafio 2

Agora, atualize a forma que o componente SearchBox faz fetch das análises pesquisadas. 

Faça encode da query enviada por parâmetro. Você pode usar o encodeURIComponent para fazer isto. 

---

## Desafio 3

Vamos fazer uma melhoria na abordagem de requests que o SearchBox executa. 

Ao digitar "star" no SearchBox, 3 requests HTTP são feitos, ainda que o request mais importante seja apenas o último (`img/02-desafio-03-tres-requests.jpg`).

Como estamos executando as aplicações localmente, os requests estão velozes. 

Porém, em uma aplicação em produção, em que o browser chama um servidor remoto, o tempo de resposta destes requests depende (também) da velocidade de conexão da internet do usuário. 

Para simular isso, faça o seguinte experimento de 3 passos... 

**Experimento de 3 passos**:

1. Atualize a página;
2. Escolha a opção "Slow 3g" na aba "Network";
3. Pesquise novamente por "star". 

Imediatamente após fazer o experimento você verá que, até que a resposta seja recebida alguns segundos depois, os 3 requests constam como "pendentes", na coluna "Status" (`img/03-desafio-03-requests-pendentes.jpg`). 

Fazer estes 3 requests seguidos é um disperdício, pois precisamos usar apenas a resposta do último request. 

Além disso, por se tratar de uma operação assíncrona, as respostas podem ser recebidas em ordem aleatória. O request para "sta", por exemplo, pode demorar mais que o request para "star". E isso pode ser um problema, por que o dropdown do SearchBox é atualizado sempre que um response é obtido. 

Para evitar estes problemas, o objetivo desse desafio é você implementar um cancelamento de requests. 

Isto é: a cada caractere inserido no SearchBox, antes de enviar um novo request, o request anterior deve ser cancelado. 

Para implementar este cancelamento de requests, pesquise pelo construtor AbortController. 

Para testar se funcionou, faça novamente o experimento de 3 passos (faça o passo 1 com o "No throttling" selecionado, para a página carregar mais rápido) e, desta vez, o resultado da tabela network deve ser o da imagem `img/04-desafio-03-requests-cancelados.jpg`.

Observe no print que os resultados do dropdown estão corretos, e os 2 primeiros requests (st e sta) foram cancelados, pois antes de iniciar um novo request, houve o cancelamento do request anterior. 

---

## Desafio 4

Atualize o Next para a versão 14.2.4. 

Caso esteja usando o WLS e ocorram conflitos, siga as instruções do Desafio 1 da Bateria 39.
