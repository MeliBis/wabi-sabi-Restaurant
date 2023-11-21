import React from 'react'
import '../styles/registro.css'

const Inicio = () => {
  return (
    <>
           <section className='form-register'>
            <h1>Regístrate </h1>
            <input className='controls' type="email" name='email' id='email' placeholder="m@gmail.com" />
            <input className='controls' type="password" name='contrasena' id='contrasena' placeholder="Contraseña"  />
            <p >Estoy de acuerdo  con <a href="/" className='link-acuerdo'>Terminos y condiciones</a></p>
            <input className=' boton' type="submit " value='Registrar'/>
            <p className='link-cuenta'><a href="/">Ya tengo cuanta</a></p>
          </section>
          
    </>
  )
}

export default Inicio