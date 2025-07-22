import React from 'react'
import principal from '../../public/Images/principal.jpg'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, SplitText);
import ithod from '../../public/Images/ithod.png'

const ITHOD = () => {
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
          <div className="display-3 capsfont fw-bold text-center phead">MEET OUR HOD</div>
          <div className="row mt-5">
              <div className="col-md-6 d-flex align-items-center">
                  <img src={ithod} className='img img-fluid  rounded rounded-4 pphoto' style={{height:"85%",objectFit:"cover"}}></img>
              </div>
              <div className="col-md-6 d-flex flex-column row-gap-1">
                  <div className="fs-3 font fw-semibold text-primary ptext">Dr.M.Helda Mercy, M.E, Ph.D</div>
                  <div className="fs-5 font fw-medium ptext">Professor, Head of the Department of Information Technology</div>
                  <div className="fs-5 font fw-normal mt-4 ptext" style={{ lineHeight: "32px",textAlign:"justify" }}>She has 28 years of teaching experience and has got a proven record of academics strength which facilitates her to carry out her teaching field in an effective Manner. She has received her M.E degree in computer Science and Engineering from Sathyabama University and her PhD degree from University of Madras.</div>
                  <div className="fs-5 font fw-normal mt-3 ptext" style={{ lineHeight: "32px",textAlign:"justify" }}>Her research area includes Graph Theory, Networking, Artificial intelligence, Machine learning, Computer Graphics and Mathematical Modeling. She has produced 1 research scholar. She has seven copy rights from government of India</div>
              </div>
          </div>
    </div>
  )
}

export default ITHOD