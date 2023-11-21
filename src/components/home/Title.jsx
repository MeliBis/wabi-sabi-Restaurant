import React from 'react';
import {Link} from 'react-router-dom'


const imgAnuncio1 = require('../../assets/anuncio/dumpligs-1png.png')

export const Title = () => {
  return (
    <div>
      <div>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src={imgAnuncio1} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">Arma tu paquete y <span className='$gray-100'>
              deléitate con los mejores platillos orientales </span> </h1>
              <p className="lead">Platillos deliciosos,  sanos, frescos y llenadores ¡sí existen! </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to='/orden' className="text-reset">
                <button type="button" className="btn btn-dark btn-lg px-4 me-md-2">¡Ordena ahora!</button>
                </Link>
                <Link to='/menu' className="text-reset">

                <button type="button" className="btn btn-dark btn-lg px-4">Ver más</button>
                </Link>

              </div>
            </div>
          </div>
        </div>
        <div className="b-example-divider" />
      </div>

 </div>
  )
}



export default Title;