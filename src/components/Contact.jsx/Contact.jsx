import React from 'react'
import {  Formik  } from 'formik';
import '../../styles-css/estilosForulario.css'


const Contact = () => {
  
  
  return (
    <>
    

    <Formik
      initialValues={{
      nombre:'',
      correo:'',
    }}
      onSubmit={() => {
        console.log('Formulario Enviado');
      }}
    > 
      {({values, handleSubmit, handleChange, handleBlur})=> (

        <form className='formulario' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre</label>
            <input 
            type="text" 
            id="nombre" 
            name='Nombre' 
            placeholder='nombre' 
            value={values.nombre} 
            onChange={handleChange} 
            onBlur={handleBlur}
            />
          </div>
          <div>
            <label htmlFor="correo">Correo</label>
            <input 
              type="email" 
              id="correo" 
              name='Correo' 
              placeholder='m@correo.com'
              value={values.correo} 
              onChange={handleChange}
              onBlur={handleBlur}
              />
            
          </div>
          <button 
            type='submit' 
            className='btn btn-dark'>Enviar</button>
        </form>
      )}
    </Formik>
    
    </>
  )
  
}

export default Contact