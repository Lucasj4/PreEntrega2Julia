import { useState } from 'react'
import './App.css'
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './assets/components/ItemDetailContainer/ItemDetailContainer'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import NavBar from './assets/components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> }  />
          <Route path='/item/:idItem' element={ <ItemDetailContainer/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

