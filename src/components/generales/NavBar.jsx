import React from 'react'
import {Link} from 'react-router-dom'


 const imagenLogo = require('../../assets/logo/wabisabi-1.png')
 const user = require('../../assets/logo/user.png')

const NavBar = () => {
  return (
  <nav >
      <div className="container mw-100  fixed-top ">

    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to='/' className=" navbar-brand " >       
         <img src={imagenLogo} alt='logo' width={100}  className='me-4 d-flex '/>
        </Link>
        <Link to='/' className=" navbar-brand " >Inicio</Link>
      
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
           
            <li className="nav-item">
            <Link to='/about' className="nav-link " >Sobre mi</Link>

            </li>
            <li className="nav-item">
              <Link to='/blog' className="nav-link " >Blog</Link>
            </li>
            <li className="nav-item">
              <Link to='/contacto' className="nav-link " >Contáctame</Link>
            </li>
            <li className="nav-item">
              <Link to='/menu' className="nav-link " >Menu</Link>
            </li>
          
            <li className="nav-item ">
              <Link className="nav-link " to="#">
              <i className="bi bi-person "></i> 
              </Link>
            </li>
            <div>
              
            </div>
          </ul>
        </div>
        
      <div className="d-flex gap-2 d-md-flex justify-content-md-end">
      <li className="nav-item dropdown d-flex ">
        <Link className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={user} alt="" width="25" className=''/>   
        </Link>
        <ul className="dropdown-menu dropdown-menu-end">
      <div className="d-flex">
              <li><Link to='/inicio' className="dropdown-item  " >
              <button type="button" className="btn btn-outline-dark me-1">Inicio de sesion</button></Link></li> 

              <li><Link to='/registro' className="dropdown-item " >
              <button type="button" className="btn btn-outline-danger">Regístrate</button></Link>
              </li>
              </div>
              <li><Link to='/perfil' className="dropdown-item" >Cuentas</Link></li>              

                <li><Link to='/deseos' className="dropdown-item" >Lista de deseos</Link></li>              
                <li><Link to="/orden" className="dropdown-item" >Ordenar</Link></li>

              </ul>
            </li>

      <Link>
        <svg xmlns="http://www.w3.org/2000/svg" width="25"  fill="currentColor" className="bi bi-cart2 dark" viewBox="0 0 16 16">
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
        </svg>
      </Link>
    </div>
    
      </div>
    </nav>
    </div>
   
  </nav>



  )
}

export default NavBar