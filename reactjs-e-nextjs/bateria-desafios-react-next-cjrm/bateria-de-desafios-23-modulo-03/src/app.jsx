import { useState } from 'react'
import { faker } from '@faker-js/faker'

const createRandomSong = () => ({
  id: faker.string.uuid(),
  name: faker.music.songName(),
  genre: faker.music.genre()
})

const Header = ({ songs, onClearSongs, searchQuery, setSearchQuery }) =>
  <header>
    <h1>Minhas Músicas</h1>
    <div>
      <Results songs={songs} />
      <SearchSongs searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <button onClick={onClearSongs}>Limpar músicas</button>
    </div>
  </header>

const SearchSongs = ({ searchQuery, setSearchQuery }) => {
  const handleChange = e => setSearchQuery(e.target.value)
  return <input value={searchQuery} onChange={handleChange} placeholder="Busque uma música" />
}

const Results = ({ songs }) => <p>{songs.length} músicas encontradas</p>

const Main = ({ songs, onAddSong }) =>
  <main>
    <FormAddSong onAddSong={onAddSong} />
    <Songs songs={songs} />
  </main>

const Songs = ({ songs }) =>
  <section>
    <List songs={songs} />
  </section>

const FormAddSong = ({ onAddSong }) => {
  const handleSubmit = e => {
    e.preventDefault()
    const { genre, songName } = e.target.elements
    onAddSong({ name: songName.value, genre: genre.value, id: faker.string.uuid() })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input required name="songName" placeholder="Nome da música" />
      <textarea required name="genre" placeholder="Gênero da música" />
      <button>Adicionar</button>
    </form>
  )
}

const List = ({ songs }) =>
  <ul>
    {songs.map(song =>
      <li className="song" key={song.id}>
        <h3>{song.name}</h3>
        <p><i>{song.genre}</i></p>
      </li>
    )}
  </ul>

const Archive = ({ show }) => {
  const [archivedSongs] = useState(() => Array.from({ length: 50_000 }, createRandomSong))
  const [showArchive, setShowArchive] = useState(show)

  const toggleArchive = () => setShowArchive(s => !s)

  return (
    <aside>
      <h2>Arquivo de músicas</h2>
      <button onClick={toggleArchive}>{showArchive ? 'Esconder' : 'Mostrar'}</button>
      {showArchive && (
        <ul>
          {archivedSongs.map(song =>
            <li className="archivedSong" key={song.id}>
              <p><strong>{song.name}</strong> - {song.genre}</p>
            </li>
          )}
        </ul>
      )}
    </aside>
  )
}

const Footer = () => <footer>Minhas Músicas</footer>

const App = () => {
  const [songs, setSongs] = useState(() => Array.from({ length: 4 }, createRandomSong))
  const [searchQuery, setSearchQuery] = useState('')

  const addSong = song => setSongs(songs => [song, ...songs])
  const clearSongs = () => setSongs([])
  const searchedSongs = searchQuery.length > 0
    ? songs.filter(({ name, genre }) => `${name} ${genre}`.toLowerCase().includes(searchQuery.toLowerCase()))
    : songs

  return (
    <section>
      <Header songs={searchedSongs} onClearSongs={clearSongs} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Main songs={searchedSongs} onAddSong={addSong} />
      <Archive show={false} />
      <Footer />
    </section>
  )
}

export { App }
