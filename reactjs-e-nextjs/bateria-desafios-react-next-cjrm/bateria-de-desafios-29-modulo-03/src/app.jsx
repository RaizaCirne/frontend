const games = [
  { id: '71ebac36-3cee-41c7-9f1a-2838344bc9c2', title: 'Elden Ring - PlayStation 5', url: 'https://a.co/d/bstbEAf' },
  { id: '64e3200f-50ed-4c0a-86ba-0de7d9b83915', title: 'The Legend Of Zelda: Breath Of The Wild - Nintendo Switch', url: 'https://a.co/d/2mhNntu' },
  { id: '035fe993-8535-4080-a4bb-b4ec924615a7', title: 'Nioh Collection - PlayStation 5', url: 'https://a.co/d/92I9PSA' }
]

const Games = () => {
  return (
    <div className="games">
      <h2>Jogos</h2>
      <ul>
        {games.map(game =>
          <li key={game.id}>
            <a href={game.url} target="_blank" rel="noreferrer">{game.title}</a>
          </li>
        )}
      </ul>
    </div>
  )
}

const Form = () => {
  return (
    <div>
      <h3>Adicionar Jogo</h3>
      <form>
        <label>
          Nome:
          <input type="text" autoFocus />
        </label>
        <label>
          Link:
          <input type="url" />
        </label>
        <button>Adicionar</button>
      </form>
    </div>
  )
}

const App = () => {
  return (
    <div className="app">
      <Games />
      <Form />
    </div>
  )
}

export { App }
