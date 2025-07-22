import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, SplitText } from 'gsap/all';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import rules1 from '../../public/Images/rules1.jpg';
import rules2 from '../../public/Images/rules2.jpg';
import rules3 from '../../public/Images/rules3.jpg';
import rules4 from '../../public/Images/rules4.jpg';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { stagger } from 'framer-motion';
gsap.registerPlugin(ScrollTrigger,SplitText)
const Rules = () => {
    const container = useRef();
    const swiper = useRef();
    const moveBy = (val) => {
        gsap.to('.rnav', {
            left: `${val}%`
        })
        if (val == 0) { swiper.current.swiper.slideTo(0) }
        else if (val == 25) { swiper.current.swiper.slideTo(1) }
        else if (val == 50) { swiper.current.swiper.slideTo(2) }
        else if (val == 75) { swiper.current.swiper.slideTo(3) }
        
    }
    useGSAP(() => {
        var tl8 = gsap.timeline({ scrollTrigger: { trigger: container.current, start: '30% 100%', end: '95% 100%', scrub: 2} })
        var rhead = SplitText.create('.rhead',{type:"words"})
        var rtext = SplitText.create('.rtext',{type:"lines"})
        tl8.from(rhead.words, {
            y: -50,
            autoAlpha: 0,
            stagger:0.25
        })
        tl8.from('.rnavbox', {
            scale:0
        })
        tl8.from('.rnavbox div', {
            x: -100,
            autoAlpha: 0,
            stagger:0.25
        })
        tl8.from(rtext.lines, {
            y:-100,
            autoAlpha: 0,
            stagger:0.25
        })
        tl8.from('.rimg', {
            scale:0
        })
    },{scope:container})
  return (
      <div className=' container-fluid d-flex flex-column align-items-center' style={{height:"95vh"}} ref={container}>
          <div className="display-3 fw-bold capsfont text-center rhead">Rules And Regulations</div>
          <div className="col-md-8 mt-4">
              <div className="row border rounded rounded-5 position-relative border-2 rnavbox">
                  <div className="col-md-3 fs-4 font py-3 rounded rounded-5 text-center" onMouseMove={()=>moveBy(0)}>College Timings</div>
                  <div className="col-md-3 fs-4 font py-3 rounded rounded-5 text-center" onMouseMove={()=>moveBy(25)}>Dress Code</div>
                  <div className="col-md-3 fs-4 font py-3 rounded rounded-5 text-center" onMouseMove={()=>moveBy(50)}>Academic Activity</div>
                  <div className="col-md-3 fs-4 font py-3 rounded rounded-5 text-center"onMouseMove={()=>moveBy(75)}>Leave Regulations</div>
                  <div className="col-md-3 fs-4 font py-3 rounded rounded-5 h-100 position-absolute rnav"></div>
              </div>
          </div>
          <div className="row  mt-2">
              <Swiper
          effect={'coverflow'}
          speed={1500}

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
                  className="mySwiper" style={{ height: "70vh" }}
                  ref={swiper}
              >
                  <SwiperSlide className=' h-100 w-100 bg-light py-5 d-flex align-items-center'>
                      <div className="row">
                          <div className="col-md-6 fs-5 font fw-normal px-5 d-flex justify-content-center  align-items-center" style={{lineHeight:"37px"}}>
                              Panimalar Engineering College functions from 8.00 a.m to 3.15 p.m. Students are not permitted to enter the campus after 8.00 a.m and are not allowed to leave the campus before 3.15 pm. <br/><br/>170 buses are operated for the Students’ convenience. Students can board the bus at his/her nearest boarding point. All the buses will leave from the campus at 3.30 p.m.
                          </div>
                          <div className="col-md-6 d-flex justify-content-center">
                              <img src={rules1} className='img img-fluid rounded rounded-4 h-100 rimg' style={{width:"85%"}}></img>
                          </div>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide className=' h-100 w-100 bg-light py-5 d-flex align-items-center'>
                      <div className="row">
                          <div className="col-md-6 fs-5 font fw-normal px-5 d-flex justify-content-center" style={{lineHeight:"37px"}}>
                              All Students in the campus should be neatly dressed.<br />
                              All boys are expected to wear FORMAL pants with their shirt neatly tucked in. They should wear Formal shoes only (Sports shoes and Slippers are not permitted).<br />
                              All girls should wear churidhar with dhupatta.<br />
                              Boys and Girls should not wear any costly gold ornaments.<br/>
                              The Institution will not be responsible if any gold ornaments or expensive items are lost.<br />
                              Students are not allowed to use cell Phones during class hours.<br /><br />

                          </div>
                          <div className="col-md-6 d-flex justify-content-center">
                              <img src={rules2} className='img img-fluid rounded rounded-4 h-100' style={{width:"85%"}}></img>
                          </div>
                      </div>
                  </SwiperSlide>
                   <SwiperSlide className=' h-100 w-100 bg-light py-5 d-flex align-items-center'>
                      <div className="row">
                          <div className="col-md-6 fs-5 font fw-normal px-5 d-flex justify-content-center" style={{lineHeight:"37px"}}>
                             All students should wear their Identity Card inside the campus and in the bus.<br/>
                            Every student will be attached with a faculty Counselor. who will counsel his / her student regarding academic and other activities. Students are asked to approach their Counselor for their academic needs.<br/>
                              Students should submit their original +2 Mark Sheet, TC & Community Certificate.<br />                              
                              Requisition letter for leave, medical certificate and permission for academic and hostel matters should be addressed to THE PRINCIPAL<br />
                              
                          </div>
                          <div className="col-md-6 d-flex justify-content-center">
                              <img src={rules3} className='img img-fluid rounded rounded-4 h-100' style={{width:"85%"}}></img>
                          </div>
                      </div>
                  </SwiperSlide>
                   <SwiperSlide className=' h-100 w-100 bg-light py-5 d-flex align-items-center'>
                      <div className="row">
                          <div className="col-md-6 fs-5 font fw-normal px-5 d-flex justify-content-center flex-column" style={{lineHeight:"37px"}}>
                              <strong>For four days and above:</strong>
                              Leave letter should be submitted on the previous day itself with the Parent’s signature<br />
                              Leave letter should be submitted on the first day of leave through anyone of his/her friend.<br />
                              Parents may make phone call to the office and inform to the respective HOD regarding their ward’s leave.<br />
                              For any family function or Medical reasons, Parents should meet the respective attendance incharge in person to avail leave.
                              
                          </div>
                          <div className="col-md-6 d-flex justify-content-center">
                              <img src={rules4} className='img img-fluid rounded rounded-4 h-100' style={{width:"85%"}}></img>
                          </div>
                      </div>
                  </SwiperSlide>
                 
            </Swiper>
          </div>
    </div>
  )
}

export default Rules