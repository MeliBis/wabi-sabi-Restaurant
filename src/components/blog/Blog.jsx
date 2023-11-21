import React from 'react'
const imgBlog = require('../../assets/extra/blog1.jpg')

const Blog = () => {
  return (
    <>
     


<div className="contenedor col-xxl-10 px-7 py-5 justify-content-center ms-auto me-auto mt-6 mb-auto ">
  <div className="card  align-items-center justify-content-center g-5 py-5">

    <div className=' col-xxl-10  justify-content-center ms-auto  '>
  <img src={imgBlog}    alt="..." className='w-50 '/>

    </div>


    <div className="card-body">
      <h5 className="card-title display-5">¿Qué hace tan especial a la comida oriental?</h5>
      <p className="card-text">La comida asiática puede resultarnos tan extraña que podemos decir que hasta desagradable solo por desconocer sus sabores y no atrevernos a probarla pero, te tengo una mala noticia para esas ideas... porque es <span className="fw-bold ">¡deliciosa!</span> </p>
      <p>No solo tiene una combinación fascinante de sabores que te harán transportar a un continente lejano, también esta pensada para cuidar nuestra salud, lo que la hace más especial.</p>
      <h6 className="mb-4">Beneficios de la deliciosa comida oriental</h6>
      <ul>
        <li className=' fw-bold list-unstyled '>Tu corazón será más sano</li>
        

        <p >Esto se debe a que la comida oriental esta preparada en la mayoría sin azucares y grasas animales </p>
        <p>Te ayudará a prevenir al tan odiado colesterol, contando con el pescado como uno de los ingredientes principales</p>

        <li className='mb-3 fw-bold list-unstyled '>
          Gozarás comiendo ¡verduras!
        </li>
        <p>Sí, sé que como cualquier persona, todos tratamos de esquivar a los sabores de esas verduras cuya única misión es hacer felices y mantenernos sanos desde pequeños (sin conseguirlo) y por fin a llegado la solución. </p>
        <p>Los orientales utilizan distintas técnicas para cocinarlas por lo que te harán adicto a ellas.</p>
        <li className=' fw-bold list-unstyled '>Conocerás nuevos sabores, como la soja </li>
          <p>Spoiler alert: ¡es deliciosa!</p>
        <li className=' fw-bold list-unstyled '>Los excesos alimenticios desaparecerán de tu vida</li>
        <p>La sopa es el platillo principal de la comida oriental por lo que la puedes encontrar de muchos tipos como de algas, de pescado, con vegetales o de fideos. Mi platillo favorito es el pho (sopa vietnamita)</p>
        
      </ul>
      <p>¿Qué te parecen estos beneficios? </p>
      <p>Son solo los que me parecieron más importantes y relevantes para convencerte y comenzar con estos saludables y deliciosos alimentos..¿Te atreverías a probar la comida oriental?</p>

    </div>
    
      <p className="card-text mt-3"><small className="text-muted">Sábado, 20 de agosto 2022. Escrito por Melissa Barrios</small></p>
  </div>

</div>




    
    </>
  )
}

export default Blog
