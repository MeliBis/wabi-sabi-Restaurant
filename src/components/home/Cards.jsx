import React from 'react'
import {Link} from 'react-router-dom'

const imgCard1 = require('../../assets/galeria/sushi-1.jpg')
const imgCard2 = require('../../assets/galeria/paquete11.jpg')
const imgCard3 = require('../../assets/galeria/dumpling.jpg')
const imgCard4 = require('../../assets/galeria/extra-arroz.jpg')
const imgCard5 = require('../../assets/galeria/bebida.jpg')


const Cards = () => {
  return (
  <>
    <h2 className='container py-4  justify-content-center '>No busques más! Aquí encontrás los mejores y auténticos sabores  asiáticos</h2>
  <div className=" d-flex mx-auto align-items-center justify-content-center row row-cols-5 ">

    <div className="card mt-4 ms-4 mb-4" style={{width: '18rem'}}>
      <img src={imgCard1} className="card-img-top mt-2" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Sushi</h5>
        <p className="card-text">Encuentra la mejor gama de sabores de sushi</p>
        <Link to="/" className="btn btn-dark">Aquí</Link>
      </div>
    </div>

    

    <div className="card mt-3 ms-4 mb-4" style={{width: '18rem'}}>
      <img src={imgCard2} className="card-img-top mt-2" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Arma tu paquete</h5>
        <p className="card-text">Encuentra desde el pho  al ramen </p>
        <Link to="/" className="btn btn-dark">Aquí</Link>
      </div>
    </div>

    <div className="card mt-3 ms-4 mb-4" style={{width: '18rem'}}>
      <img src={imgCard3} className="card-img-top mt-2" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Especialidades</h5>
        <p className="card-text">Comida auténtica y tradicional oriental</p>
        <Link to="/" className="btn btn-dark">Menu</Link>
      </div>
    </div>

    <div className="card mt-3 ms-4 mb-4" style={{width: '18rem'}}>
      <img src={imgCard4} className="card-img-top mt-2" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Extras</h5>
        <p className="card-text">Te gustaría agregar comida adicional a tu orden?</p>
        <Link to="/" className="btn btn-dark">Aquí</Link>
      </div>
    </div>
    <div className="card mt-3 ms-4 mb-4" style={{width: '18rem'}}>
      <img src={imgCard5} className="card-img-top mt-2" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Bebidas</h5>
        <p className="card-text">Las bebidas tradicionales también son deliciosas</p>
        <Link to="/" className="btn btn-dark">Aquí</Link>
      </div>
    </div>
    </div>
    </>
  )
}

export default Cards