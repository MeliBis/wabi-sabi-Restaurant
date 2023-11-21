import React from 'react'
import {Card, Button} from 'react-bootstrap';


const imgCarSlidel = require('../../assets/galeria/sushi-1.jpg')

const CardSlide = props => {
    let {price, title} = props.data;
  return (
    <Card className="p-0 overflow-hidden h-100 shadow">
        <div className='overflow-hidden rounded p-0 bg-light'>
            <Card.Img variant='top' src={imgCarSlidel}/>
        </div>
        <Card.Body className='text-center'>
            <Card.Title className='display-6'>{price}</Card.Title>
            <Card.Title>{title}</Card.Title>
        </Card.Body>
        <Button className=" w-100 rounded-0 btn-dark">Agregar al carrito</Button>
    </Card>

  )
}

export default CardSlide