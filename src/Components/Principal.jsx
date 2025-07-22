import React from 'react'
import principal from '../../public/Images/principal.jpg'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, SplitText);

const Principal = () => {
    const container = useRef();
    useGSAP(() => {
        const phead = SplitText.create('.phead')
        const ptext = SplitText.create('.ptext')
        const tl7 = gsap.timeline({ scrollTrigger: { trigger: container.current, start: '30% 100%', end: '90% 100%', scrub: 2} })
        tl7.from(phead.words, {
            y: 50,
            autoAlpha: 0,
            stagger:0.25
        })
        tl7.from('.pphoto', {
            scale:0
        })
        tl7.from(ptext.lines, {
            y: 50,
            autoAlpha: 0,
            stagger:0.25
        })
    },{scope:container})
  return (
      <div className=' container' style={{minHeight:"80vh"}} ref={container}>
          <div className="display-3 capsfont fw-bold text-center phead">MEET OUR PRINCIPAL</div>
          <div className="row mt-5">
              <div className="col-md-6">
                  <img src={principal} className='img img-fluid  rounded rounded-4 pphoto' style={{height:"85%"}}></img>
              </div>
              <div className="col-md-6 d-flex flex-column row-gap-1">
                  <div className="fs-3 font fw-semibold text-primary ptext">Dr. K.Mani, M.E, Ph.D</div>
                  <div className="fs-4 font fw-normal ptext">Principal, Panimalar Engineering College</div>
                  <div className="fs-5 font fw-normal mt-4 ptext" style={{ lineHeight: "32px",textAlign:"justify" }}>He obtained M.E in Refrigeration and Air-conditioning from Coimbatore Institute of Technology, Coimbatore and Ph.D from Anna University in the year 2008. He has been working with Panimalar Engineering College as Principal since 2009. He has a teaching experience of 27 years. His area of research includes Refrigeration and Air-conditioning systems using eco-friendly refrigerants, I.C engines and heat transfer.</div>
                  <div className="fs-5 font fw-normal mt-3 ptext" style={{ lineHeight: "32px",textAlign:"justify" }}>He has guided Ph.D students and published papers in national and international journals and delivered guest lectures. He obtained funds from AICTE under various schemes. He is a member of The Institution of Engineers(I) and ISTE</div>
              </div>
          </div>
    </div>
  )
}

export default Principal