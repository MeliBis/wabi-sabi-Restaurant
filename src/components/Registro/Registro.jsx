import React from 'react'
import '../../styles-css/registro.css'
function Registro() {
  return (
    <>

        <section className='form-register'>
            <h1>Regístrate</h1>
            <input className='controls' type="text" name='nombre' id='nombre' placeholder="Nombre" />
            <input className='controls' type="text" name='apellido' id='apellido' placeholder="Apellido" />
            <input className='controls' type="email" name='email' id='email' placeholder="m@gmail.com" />
            <input className='controls' type="password" name='contrasena' id='contrasena' placeholder="Contraseña"  />
            <p className='link-cuenta'>Estoy de acuerdo  con <a href="/">Terminos y condiciones</a></p>
            <input className=' boton' type="submit " value='Registrar'/>
            <p className='link-cuenta'><a href="/">Ya tengo cuanta</a></p>
          </section>

    </>
  )
}

export default Registro