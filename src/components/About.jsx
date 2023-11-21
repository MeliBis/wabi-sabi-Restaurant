import React from 'react'
const imgAbout = require('../assets/extra/perfil.jpeg')
 
const About = () => {
  return (
<div>
<div>
        <div className="  col m-0 vh-100 row align-items-center justify-content-center display-5"> 
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src={imgAbout} className="d-block mx-lg-auto img-fluid rounded" alt="avatar Melissa" width={700} height={500} loading="lazy" />
            </div>
            <div className="col-lg-6">
              <h2 className="  lh-1 mb-5"> <span className="display-5">Hola!</span>  soy Melissa  y soy fundadora de <span className='ext-muted  '>wabi-sabi restaurant</span> </h2>
              <p className="lead "><span className="  "> La idea </span>  surgió al regresar de <span className='  fw-bold '>San Francisco C.A.</span>  en donde podía disfrutar de la comida autentica, <span  className='fw-bold '>no solo oriental</span>  y al regresar a México al buscar esa comida tan deliciosa para continuar deletándome cada día, note que el sabor era bueno pero no excelente. 
              <br /> Así fue como me dí a la tarea de aprender las mejores recetas y técnicas con las personas <span className='fw-bold '>originarias</span>   de cada país hasta encontrar <span className='fw-bold '>los mejores platillos asiáticos.</span> 
</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
               
              </div>
            </div>
          </div>
        </div>
        <div className="b-example-divider" />
      </div>


 </div>  
 )
}

export default About