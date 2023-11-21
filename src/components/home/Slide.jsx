import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
//import {FreeMode} from 'swiper'
import 'swiper/css';
import 'swiper/css/free-mode';

import CardSlide from '../../components/home/CardSlide'

import imgSlide1 from '../../assets/galeria/dumpling.jpg'
import imgSlide2 from '../../assets/galeria/paquete11.jpg'



const Slide = () => {
  return (
    <div className="container py-4 px-0 justify-content-center bg dark">
        <h2>Aprovecha los descuentos del mes (Haz click y desliza)</h2>
    
        <Swiper
          freeMode={true}
          grabCursor={true}
          //modules={[FreeMode]}
          className="myswiper"
          breakpoints={{
            0:{
              slidesPerView: 1,
              spaceBetween:10,

            },
            480:{
              slidesPerView: 3,
              spaceBetween: 10,
              
            },
            7600:{
              slidesPerView: 4,
              spaceBetween: 15,
              
            }
          }}
        >
        <SwiperSlide>
          <CardSlide data={{imgSrc: imgSlide1, price:'$100',title:'sushi'}} width="50"/>
        </SwiperSlide>
        <SwiperSlide>
          <CardSlide data={{imgSrc: imgSlide2, price:'$100',title:'sushi'}} width="50"/>
        </SwiperSlide>
        <SwiperSlide>
          <CardSlide data={{imgSrc: imgSlide1, price:'$100',title:'sushi'}} width="50"/>
        </SwiperSlide>
        <SwiperSlide>
          <CardSlide data={{imgSrc: imgSlide1, price:'$100',title:'sushi'}} width="50"/>
        </SwiperSlide>
        <SwiperSlide>
          <CardSlide data={{imgSrc: imgSlide1, price:'$100',title:'sushi'}} width="50"/>
        </SwiperSlide>



        </Swiper>
      
      
      </div>
      

  )
}

export default Slide