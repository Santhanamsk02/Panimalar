import React from 'react'
import hvideo from '../../public/Images/PEC-Homepage.mp4';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';


gsap.registerPlugin(useGSAP, ScrollTrigger);
const ColVideo = () => {
    const container = useRef();
    const videoRef = useRef();
    useGSAP(() => {
        
       gsap.to('.hvideo video', {
           height: "100%",
           width:"100%",
        scrollTrigger: {
            trigger: container.current,
            start: '80% 100%',
            end: '95% 100%',
            scrub:2,
        }
    }) 
    },{scope:container})
  return (
      <div className='container-fluid p-0 position-relative hvideo pt-5 mt-5' style={{height:"100vh"}} ref={container}>
          <video autoPlay loop playsInline preload='auto' src={hvideo} className="position-absolute" ref={videoRef} muted></video>
    </div>
  )
}

export default ColVideo