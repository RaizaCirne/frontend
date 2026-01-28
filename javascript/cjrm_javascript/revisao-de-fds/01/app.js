/* Crie mentalmente este cenário:

Tenho uma lista de pessoas.
Cada pessoa tem nome, idade e se é dev ou não.
Quero mostrar no console apenas quem é dev e maior de idade.

Passo 1 — Estrutura de dados
Precisa de quê?
👉 Array + objetos

Você deve conseguir escrever algo como:
const people = [
  { name: 'Ana', age: 22, isDev: true },
  { name: 'João', age: 17, isDev: true },
  { name: 'Maria', age: 30, isDev: false }
]


Passo 2 — Percorrer
Pergunta mental:
“Como eu percorro isso?”
👉 for ou forEach
Escolha um, não os dois.


Passo 3 — Condição
Pergunta mental:
“O que precisa ser verdade para mostrar no console?”
👉 if
👉 operadores lógicos &&

Passo 4 — Ação
No if, faça:
console.log(`${name} é dev e maior de idade`)

Se você conseguir montar isso, mesmo olhando o material em partes:
➡️ sua base está sólida */

const people = [
  { name: "Ana", age: 22, isDev: true },
  { name: "João", age: 17, isDev: true },
  { name: "Maria", age: 30, isDev: false },
];
