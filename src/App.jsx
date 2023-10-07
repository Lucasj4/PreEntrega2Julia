import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/navbar/navbar'
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar>

      </Navbar>
      <ItemListContainer greeting= "Hola coder">

      </ItemListContainer>
    </>
  )
}

export default App
