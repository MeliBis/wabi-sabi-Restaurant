import React from 'react'
import { 
    BrowserRouter as Router, 
    Route,
    Routes,
    Navigate,
    //NavLink,
    } from 'react-router-dom'

import HomePage from '../pages/HomePage'

const AppRouter = () => {
  return (
    <>
    <Router>
   
        <Routes>
            <Route path="/" element={<HomePage />}/>
{/*             <Route path="/about" element={<AboutPage />}/>
            <Route path="/menu" element={<MenuPages/>}/>
            <Route path="/contacto" element={<Contact/>}/>
            <Route path="/blog" element={<BlogPage/>}/>
            <Route path="/orden" element={<OrderPage/>}/>
            <Route path="/deseos" element={<Whish/>}/>
            <Route path="/inicio" element={<Inicio/>}/>
            <Route path="/registro" element={<Registro/>}/>
            <Route path="/perfil" element={<Cuenta/>}/>
 */}

            <Route path="/*" element={<Navigate to="/" />} />

        </Routes>
    </Router>

    </>
  )
}

export default AppRouter