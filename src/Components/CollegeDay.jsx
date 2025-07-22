import React from 'react'
import cd1 from '../../public/Images/cd1.png'
import cd2 from '../../public/Images/cd2.png'
import cd3 from '../../public/Images/cd3.png'
import cd4 from '../../public/Images/cd4.png'
import cd5 from '../../public/Images/cd5.png'
import cd6 from '../../public/Images/cd6.png'
import cd7 from '../../public/Images/cd7.png'

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger,SplitText } from 'gsap/all';


gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);

const CollegeDay = () => {
    const container = useRef();
    const moveBy = (val) => {
        gsap.to('.slider', {
            x:`-${val}%`
        })
    }
    const images=[cd1,cd2,cd3,cd4,cd5,cd6,cd7]
    useGSAP(() => {
        var tl2 = gsap.timeline({ scrollTrigger: { trigger: container.current, start: '50% 100%' } })
        var cdtext=SplitText.create('.cdtext')
        tl2.from(cdtext.chars, {
            y: 50,
            stagger: 0.15,
            autoAlpha:0
        }).from('.cdimg', {
            y: 75,
            autoAlpha: 0,
            duration:1.5
        }).to('.cdimg', {
            top: "50%",
            left: "50%",
            height: "250px",
            width:"200px",
            transform:"translate(-50%,-50%)",
            stagger:0.2
        }).to('.cd1', {
            top: "80%",
            left:"0%",
        },'-=0.3').to('.cd2', {
            top: "80%",
            left:"16%",
        },'-=0.3').to('.cd3', {
            top: "80%",
            left:"32%",
        },'-=0.3').to('.cd4', {
            top: "80%",
            left:"48%",
        },'-=0.3').to('.cd5', {
            top: "80%",
            left:"64%",
            
        },'-=0.3').to('.cd6', {
            top: "80%",
            left:"80%",
            
        },'-=0.3').to('.cd7', {
            top: "80%",
            left:"96%",
        }, '-=0.3')
            .from('.imagecon', {
                scale: 0,
            })
    })
    return (
      
      <div className=' container pt-5' style={{minHeight:"93vh"}} ref={container}>
          <div className="display-4 fw-bolder font text-center cdtext">College Day</div>
          <div className="row position-relative mt-2 justify-content-center" style={{ height: "85vh" }}>
                <div className="col-md-8  imagecon" style={{ overflow: "hidden", height: "60%" }}>
                    <div className="slider d-flex column-gap-5 h-100">
                        {images.map((val, ind) => (
                      <img src={val} key={ind} className='img img-fluid rounded-5 rounded me-4' style={{objectFit:"cover"}}></img>
                  ))}
                    </div>
                    
              </div>
                <img src={cd1} className='cdimg cd1' onMouseOver={() => { moveBy(0) }}></img>
              <img src={cd2} className='cdimg  cd2' onMouseOver={() => { moveBy(109) }}></img>
              <img src={cd3} className=' cdimg cd3' onMouseOver={() => { moveBy(218) }}></img>
              <img src={cd4} className='cdimg cd4' onMouseOver={() => { moveBy(327) }}></img>
              <img src={cd5} className='cdimg cd5' onMouseOver={() => { moveBy(436) }}></img>
              <img src={cd6} className='cdimg cd6' onMouseOver={() => { moveBy(545) }}></img>
              <img src={cd7} className='cdimg cd7'onMouseOver={() => { moveBy(654) }}></img>
          </div>
    </div>
  )
}

export default CollegeDay