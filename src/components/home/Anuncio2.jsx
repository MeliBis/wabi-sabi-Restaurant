import React from 'react'
import {Link} from 'react-router-dom'



const imgAnuncio2 = require('../../assets/anuncio/domicilio-1.png')

const Anuncio2 = () => {
  return (
<>
  <div className="container col-xxl-8 px-4 py-5">
    
    
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={imgAnuncio2} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
      </div>

      
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">¿Hambriento?</h1>
        <p className="lead">Ordena ahora y espera tu orden en la puerta de tu casa</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <Link to='/orden' className="text-reset">
                <button type="button" className="btn btn-dark btn-lg px-4 me-md-2">¡Ordena ahora!</button>
                </Link>
                <Link to='/menu' className="text-reset">

                <button type="button" className="btn btn-dark btn-lg ">Ver más</button>
                </Link>
        </div>
      </div>
    </div>
  </div>
  <div className="b-example-divider" />
</>

  )
}

export default Anuncio2