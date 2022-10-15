import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar({title}) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
       <a className="navbar-brand" href="#">{title}</a>
       <Link
            to='/'
            className='navbar-brand'
            tabIndex={0}
            aria-label='ir a inicio'
            >
            </Link>
       <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
         </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="navbar-nav">
            <NavLink 
            to= '/'
            tabIndex={1}
            className="nav-link  nav-link"
            >
            Tipo Equipos
            </NavLink>

            <NavLink 
            to= '/estados'
            tabIndex={2}
            className="nav-link  nav-link"
            >
            Estados
            </NavLink>

            <NavLink 
            to='/inventarios'
         tabIndex={2}
            className="nav-link  nav-link"
            >
            Inventarios
            </NavLink>
            
            <NavLink 
            to ='/marcas'
            tabIndex={2}
            className="nav-link  nav-link"
            >
            Marcas
            </NavLink>
           
            <NavLink 
            to= '/usuarios'
            tabIndex={2}
            className="nav-link  nav-link"
            >
            Usuarios
            </NavLink>
        </div>
      </div>
    </div>
  </nav>
  )
}
