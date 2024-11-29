import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(666)

  return (
    <>
      <div>
        <a href="https://set502.com" target="_blank">
          <img src="https://entradas.eldrop.club/el-drop/logo.svg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Pagos SET</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
