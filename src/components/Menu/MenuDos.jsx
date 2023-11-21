  import {Link} from 'react-router-dom'
  import { Swiper, SwiperSlide } from 'swiper/react';
  import React from "react";
  import 'swiper/css';
  import "swiper/css/pagination";
  import "swiper/css/navigation";
  import { Pagination, Navigation } from "swiper";
  
  const imagenMenu1 = require('../assets/orden/pho/pho1.jpg')
  const imagenMenu2 = require('../assets/orden/pho/pho2.jpg')
  const imagenMenu3 = require('../assets/orden/pho/pho3.jpg')
  const imagenMenu4 = require('../assets/orden/pho/pho4.jpg')
  const imagenMenu5 = require('../assets/orden/ramen/ramen1.jpg')
  const imagenMenu6 = require('../assets/orden/ramen/ramen2.jpg')

  
  
  const MenuDos = () => {
    return (
      <>
  
  
          <div className=" mt-5">
          <h1>Noodles</h1>
       </div>
  
          <Swiper
          slidesPerView={1}
          spaceBetween={10}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
       <SwiperSlide>
       <div className="card mt-5 me-5" style={{width: '18rem'}}>
              <img src={imagenMenu1} className="card-img-top" alt="..." />
          <div className="card-body">
              <h5 className="card-title">Pho</h5>
              <p className="card-text">Sopa Vietnamita</p>
              <p className="card-text mt-3"><small className="text-muted">$180.00</small></p>
              <div>
              <ul className="d-flex justify-content-between list-unstyled">
                <li>
                    <Link to='/ListaDeseosPage' className="text-reset">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                    </Link> 
                    </li>
                <li>
                    <Link to='/orden' className="text-reset">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="currentColor" class="bi bi-bag-plus " viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                        </svg>
                    </Link> 
                </li>
            </ul>
            </div>
          </div>
          </div>
       </SwiperSlide>
          <SwiperSlide>
  
          <div className="card mt-5 me-2" style={{width: '18rem'}}>
              <img src={imagenMenu2} className="card-img-top" alt="..." />
          <div className="card-body">
              <h5 className="card-title">Pho</h5>
              <p className="card-text">Sopa Vietnamita</p>
              <p className="card-text mt-3"><small className="text-muted">$180.00</small></p>
              <div>
              <ul className="d-flex justify-content-between list-unstyled">
                <li>
                    <Link to='/ListaDeseosPage' className="text-reset">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                    </Link> 
                    </li>
                <li>
                    <Link to='/orden' className="text-reset">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="currentColor" class="bi bi-bag-plus " viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                        </svg>
                    </Link> 
                </li>
            </ul>
            </div>
          </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
  
          <div className="card mt-5 me-2" style={{width: '18rem'}}>
              <img src={imagenMenu3} className="card-img-top" alt="..." />
          <div className="card-body">
              <h5 className="card-title">Pho</h5>
              <p className="card-text">Sopa Vietnamita</p>
              <p className="card-text mt-3"><small className="text-muted">$180.00</small></p>
              <div>
              <ul className="d-flex justify-content-between list-unstyled">
                <li>
                    <Link to='/ListaDeseosPage' className="text-reset">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                    </Link> 
                    </li>
                <li>
                    <Link to='/orden' className="text-reset">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="currentColor" class="bi bi-bag-plus " viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                        </svg>
                    </Link> 
                </li>
            </ul>
            </div>
          </div>
          </div>
          </SwiperSlide>
  
          <SwiperSlide>
  
          <div className="card mt-5 me-2" style={{width: '18rem'}}>
              <img src={imagenMenu4} className="card-img-top" alt="..." />
          <div className="card-body">
              <h5 className="card-title">Pho</h5>
              <p className="card-text">Sopa Vietnamita</p>
              <p className="card-text mt-3"><small className="text-muted">$180.00</small></p>
              <div>
              <ul className="d-flex justify-content-between list-unstyled">
                <li>
                    <Link to='/ListaDeseosPage' className="text-reset">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                    </Link> 
                    </li>
                <li>
                    <Link to='/orden' className="text-reset">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="currentColor" class="bi bi-bag-plus " viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                        </svg>
                    </Link> 
                </li>
            </ul>
            </div>
          </div>
          </div>
  
          </SwiperSlide>
          <SwiperSlide>
  
          <div className="card mt-5 me-2" style={{width: '18rem'}}>
              <img src={imagenMenu5} className="card-img-top" alt="..." />
          <div className="card-body">
              <h5 className="card-title">Pho</h5>
              <p className="card-text">Sopa Vietnamita</p>
              <p className="card-text mt-3"><small className="text-muted">$180.00</small></p>
              <div>
              <ul className="d-flex justify-content-between list-unstyled">
                <li>
                    <Link to='/ListaDeseosPage' className="text-reset">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                    </Link> 
                    </li>
                <li>
                    <Link to='/orden' className="text-reset">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="currentColor" class="bi bi-bag-plus " viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                        </svg>
                    </Link> 
                </li>
            </ul>
            </div>
          </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card mt-5 me-2" style={{width: '18rem'}}>
              <img src={imagenMenu6} className="card-img-top" alt="..." />
          <div className="card-body">
              <h5 className="card-title">Pho</h5>
              <p className="card-text">Sopa Vietnamita</p>
              <p className="card-text mt-3"><small className="text-muted">$180.00</small></p>
              <div>
              <ul className="d-flex justify-content-between list-unstyled">
                <li>
                    <Link to='/ListaDeseosPage' className="text-reset">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                    </Link> 
                    </li>
                <li>
                    <Link to='/orden' className="text-reset">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="currentColor" class="bi bi-bag-plus " viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                        </svg>
                    </Link> 
                </li>
            </ul>
            </div>
          </div>
          </div>
          </SwiperSlide>
        </Swiper>
  
      </>
    )
  }
  


export default MenuDos