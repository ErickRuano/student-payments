import { useState } from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
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
        <SignedIn>
          <h1 className="color-red-500">
            hola estoy loggeado
          </h1>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <h1>no estoy loggeado</h1>
          <SignInButton />
        </SignedOut>
      </div>
    </>
  )
}

export default App
