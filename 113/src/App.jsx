import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hola amorsito</h1>
      <h1>
        Esta pagina es para hacerte poemas
      </h1>
      <h1>
        y otras cositas
      </h1>
      <p className="read-the-docs">
        Obvio esta en construccion, te amo...
      </p>
    </>
  )
}

export default App