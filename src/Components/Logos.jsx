import React from 'react'
import logo1 from '../../public/Images/logo1.jpg'
import logo2 from '../../public/Images/logo2.jpeg'
import logo3 from '../../public/Images/logo3.jpeg'
import logo4 from '../../public/Images/logo4.png'
import logo5 from '../../public/Images/logo5.png'


import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';


gsap.registerPlugin(useGSAP, ScrollTrigger);
const Logos = () => {
    const container = useRef();
    useGSAP(() => {
       gsap.from('.logo', {
        x: -100,
        autoAlpha: 0,
        stagger: 0.25,
        scrollTrigger: {
            trigger: container.current,
            start: '40% 100%',
            end: '100% 100%',
            scrub:2,
        }
    }) 
    },{scope:container})
    
  return (
      <div className='container px-5 py-5' style={{minHeight:"20vh"}} ref={container}>
          <div className="row logos h-100 justify-content-between row-gap-4 mb-5">
              <div className="col-6 col-md-2 logo d-flex justify-content-center px-3 py-2"><img src={logo1}  className='img img-fluid'></img></div>
              <div className="col-6 col-md-2 logo d-flex justify-content-center  px-3 py-2"><img src={logo2}  className='img img-fluid'></img></div>
              <div className= " col-6 col-md-2 logo d-flex justify-content-center  px-3 py-2"><img src={logo3}  className='img img-fluid'></img></div>
              <div className="col-6 col-md-2 logo d-flex justify-content-center  px-3 py-2"><img src={logo4}  className='img img-fluid'></img></div>
              <div className="col-6 col-md-2 logo d-flex justify-content-center  px-3 py-2"><img src={logo5}  className='img img-fluid'></img></div>
              
          </div>
    </div>
  )
}

export default Logos