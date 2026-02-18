import { useState } from 'react'

const Expensive = () => {
  const now = performance.now()
  while (performance.now() - now < 500) {
    // Apenas um delay artificial. Nada acontece durante meio segundo.
  }

  return <p>Um parágrafo qualquer</p>
}

const Color = () => {
  const [color, setColor] = useState('red')
  const changeColor = e => setColor(e.target.value)
  return (
    <div>
      <input value={color} onChange={changeColor} />
      <p style={{ color }}>Olárrr</p>
      <Expensive />
    </div>
  )
}

const App = () => <Color />

export { App }
