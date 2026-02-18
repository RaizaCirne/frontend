# Bateria de Desafios 15

Os desafios 01 e 02 correspondem ao projeto "Me Avalia".

---

# Desafio 01

Se a nota do filme assistido é 0, faça com que ao clicar no filme, o botão exiba "Alterar nota". 

---

# Desafio 02

Ao clicar em um filme, faça o parágrafo ao lado das estrelas exibir 0 por padrão.

---

# Desafio 03

No código abaixo, se há apenas 1 caractere no input, ao dar um backspace, o input recebe 0.

Resolva este problema.

Se você preferir, inicialmente o input pode ser exibido sem valor.

Não deixe que 0 seja inserido como 1º caractere no input.

Mantenha o input controlado pelo estado do React. 

Se, por qualquer motivo, a API usada no código abaixo estiver indisponível ou fora do ar, encontre outra API de conversão de moedas. O repositório public-apis no GitHub, mostrado em aulas passadas, contém várias APIs deste tipo. Caso seja necessário rever, o código abaixo foi mostrado na aula 18, Desafio 05.

```css
.selects {
  display: flex;
  gap: 5px;
}

select {
  display: block;
  margin: 10px 0;
}
```

```jsx
import { useEffect, useState } from 'react'

const App = () => {
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('BRL')
  const [rate, setRate] = useState(null)
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    if (rate === null) {
      return
    }

    document.title = `${rate.toFixed(2)} ${to}`
    return () => document.title = 'Conversor de moedas'
  }, [rate, to])

  useEffect(() => {
    if (to === from || amount === 0) {
      setRate(null)
      return
    }

    const id = setTimeout(() => {
      setRate(null)
      setLoading('Carregando...')

      fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`)
        .then(r => r.json())
        .then(data => {
          setRate(data.rates[to])
          setLoading(null)
        })
        .catch(console.log)
    }, 500)

    return () => clearTimeout(id)
  }, [amount, from, to])

  const handleChangeFrom = e => setFrom(e.target.value)
  const handleChangeTo = e => setTo(e.target.value)
  const handleChangeAmount = e => setAmount(prev => prev === '' ? 0 : +e.target.value)

  return (
    <>
      <input value={amount} onChange={handleChangeAmount} type="number" autoFocus />

      <div className="selects">
        <select value={from} onChange={handleChangeFrom}>
          <option value="BRL">BRL</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <select value={to} onChange={handleChangeTo}>
          <option value="BRL">BRL</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>

      {loading && <h2>{loading}</h2>}
      {rate && <h2>{`${rate.toFixed(2)} ${to}`}</h2>}
    </>
  )
}

export { App }
```
