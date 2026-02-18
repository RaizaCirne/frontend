# Bateria de Desafios 14

Os desafios 01 a 04 correspondem ao projeto "Me Avalia" e os restantes, ao projeto "Quiz dos Videogames".

Se não foi especificado "como" fazer, descobrir é parte do desafio.

---

# Desafio 01

Até aqui, existe a possibilidade de ver detalhes do filme apenas quando um dos filmes na lista de resultados é clicado. 

Faça que a exibição dos detalhes do filme também aconteça ao clicar em um dos filmes assistidos. 

Ao implementar a funcionalidade acima, teste também o clique no botão de deletar o filme da lista de assistidos. Se ao clicar no botão os detalhes do filme forem exibidos, evite que isso aconteça.

---

# Desafio 02 

Ao exibir os detalhes do filme, caso o filme já tenha sido avaliado anteriormente, a exibição inicial das estrelas deve corresponder à avaliação anterior. 

Exemplo: se anteriormente o usuário deu 10 estrelas para o filme "Seven: Os Sete Crimes Capitais", quando os detalhes deste filme forem exibidos novamente, 10 estrelas devem estar preenchidas. 

A implementação acima não deve impedir o usuário de mudar a nota do filme. 

Além disso, caso o filme já tenha sido avaliado anteriormente, o botão deve exibir o texto "Alterar nota".

---

# Desafio 03 

Se o filme foi avaliado anteriormente, caso aconteça um clique na mesma nota, zere a nota. 

Exemplo: se anteriormente o usuário deu 9 estrelas para o filme "Donnie Darko", quando os detalhes deste filme forem exibidos novamente e a nona estrela for clicada, a nota deve voltar a zero e nenhuma estrela deve estar preenchida. 

---

# Desafio 04 

Evite que um request do filme seja feito para a API caso o filme clicado já esteja na lista de filmes assistidos.

---

# Desafio 05 

Ao exibir o resultado, exiba diferentes emojis e mensagens de acordo com pontuação.

Exemplos:

😥 Poxa, você fez 0 pontos de 50 (0%)
😐 Você fez 10 pontos de 50 (20%)
🏆 Caramba! Você fez 50 pontos de 50 (100%)

---

# Desafio 06 

Conserte o delay do timer.

Não deixe o timer re-renderizar toda a aplicação a cada segundo. 
