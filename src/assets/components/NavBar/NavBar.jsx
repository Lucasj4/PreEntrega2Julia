import React from 'react'
import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'
import {Link, NavLink} from 'react-router-dom'
const NavBar = () => {
  return (
    <header>
    <Link to="/">
    <h1>
        CoderShop
    </h1>
    </Link>
    
    <nav>
        <ul>
        <li className='link'>
            <NavLink to="categoria/1">Perifericos</NavLink>
          </li>

          <li className='link'>
            <NavLink to="categoria/2">Procesadores</NavLink>
          </li>
        </ul>
    </nav>
   <CardWidget/>
        
   

</header>
  )
}

export default NavBar