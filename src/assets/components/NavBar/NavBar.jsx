import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
const Navbar = () => {
  return (
    <header>
        <h1>
            CoderShop
        </h1>
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Contacto</li>
                <li>Productos</li>
            </ul>
        </nav>
        <CartWidget/>
            
       

    </header>
  )
}

export default Navbar