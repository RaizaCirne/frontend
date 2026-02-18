# Bateria de Desafios 19

A pasta src/ui contém screenshots relevantes da aplicação. Desta vez, todas as imagens disponibilizadas exibem a url na barra do navegador. Use essa informação ao seu favor. 

A pasta src/ contém meu CSS pós-resolução desta bateria. Lembre-se: o CSS é apenas uma sugestão. Você pode escrever o CSS da aplicação como preferir. 

Se não foi especificado "como" fazer, descobrir é parte do desafio.

Leia as dicas (lá em baixo) apenas se estiver travado em algum ponto. 

## Desafio 1

Use o storage do browser para armazenar as viagens salvas pelo usuário. 

---

## Desafio 2

Quando não houver viagens salvas, exiba, a mensagem "Clique no mapa para adicionar uma cidade", como mostrado em img-01.

---

## Desafio 3

Ao clicar no mapa, o form para salvar a cidade e informações da viagem deve ser exibido (img-02).

Para que o form seja enviado, todos os inputs devem estar preenchidos. 

---

## Desafio 4

Ao enviar o form, o marcador no mapa deve ser exibido e os detalhes da cidade devem ser exibidos, juntamente com os botões Voltar, Editar e Deletar (img-03).

Os caracteres especiais usados nos botões Editar e Deletar são &there4; e &times;.

### Observações sobre o botão Deletar

O botão "Deletar" elimina a necessidade de ter o "x" em cada <li> na listagem das cidades. 

Ao clicar no botão Deletar, peça para o usuário confirmar que quer deletar a viagem (img-04). Para fazer isto, pesquise pelo método `confirm`. 

A mensagem de confirmação é "Por favor, confirme que você quer deletar essa viagem.". 

Se o usuário clicar em Cancel, nada deve acontecer e a interface deve continuar como na img-03. Se Ok for clicado, a cidade deve ser deletada, o marcador da cidade deve ser removido do mapa e a listagem de cidades deve voltar a ser exibida (img-05).

### Observações sobre o botão Editar

O botão "Editar" deve exibir o form para a edição das informações (img-06).

Observe que o form já é carregado com as informações salvas anteriormente. 

### Dicas

Não se distraia com detalhes menores, como o formato da data (mm/dd/yyyy) ou a lista de países considerando apenas países com uma palavra (se você seguiu como foi feito até aqui). Isso pode ser ajustado depois. Foque em implementar as features principais listadas nesta Bateria. 

Para a deleção da viagem, você pode criar uma rota com apenas um path e action. A prop element é desnecessária neste caso. 

Os botões de edição e deleção podem estar, cada um, dentro de um Form. Cada Form pode ter uma prop action. Exemplo: action="edit" e action="delete". Lembre-se que essa prop deve receber a url da qual o form foi enviado.

O componente que contém o Form de adição de uma viagem pode ser reutilizado para editar uma viagem. 

Ao editar a viagem e enviar o form, lembre-se que cada objeto armazenado no storage do browser precisa ter um id único. Caso contrário, se houverem dois ou mais objetos com o mesmo id, no momento da renderização das viagens, o React lançará um erro avisando que existem keys com o mesmo id. 
