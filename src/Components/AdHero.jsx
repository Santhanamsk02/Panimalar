import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, SplitText } from 'gsap/all';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import ad1 from '../../public/Images/ad1.jpg';
import ad2 from '../../public/Images/ad2.jpg';
import ad3 from '../../public/Images/ad3.jpg';
import ad4 from '../../public/Images/ad4.jpg';
import { delay } from 'framer-motion';

const AdHero = () => {
  return (
      <div className=' container-fluid' style={{height:"95vh"}}>
          <div className="row h-100 d-flex align-items-center">
              <Swiper
                        effect={'coverflow'}
                        speed={3000}
                  autoplay={{ delay: 1000 }}
                  loop={true}
                                grabCursor={true}
                                initialSlide={0}
                                slidesPerView={1}
                               coverflowEffect={{
                                   rotate: 60,
                                   stretch: 0,
                                   depth: 100,
                                   modifier: 1,
                                 slideShadows: true,
                        }}
                              modules={[EffectCoverflow,Autoplay]}
                                className="mySwiper" style={{ height: "76vh" }}
                                
                            >
                                <SwiperSlide className=' h-100 w-100' style={{backgroundImage:`url(${ad1})`,backgroundSize:"cover",backgroundPosition:"center"}}>
                                    
                                </SwiperSlide>
                                <SwiperSlide className=' h-100 w-100' style={{backgroundImage:`url(${ad2})`,backgroundSize:"cover",backgroundPosition:"center"}}>
                                    
                                </SwiperSlide>
                                 <SwiperSlide className=' h-100 w-100' style={{backgroundImage:`url(${ad3})`,backgroundSize:"cover",backgroundPosition:"center"}}>
                                    
                                </SwiperSlide>
                                 <SwiperSlide className=' h-100 w-100' style={{backgroundImage:`url(${ad4})`,backgroundSize:"cover",backgroundPosition:"center"}}>
                                    
                                </SwiperSlide>
                               
                          </Swiper>
          </div>
    </div>
  )
}

export default AdHero