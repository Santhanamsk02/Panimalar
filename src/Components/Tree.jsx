import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, SplitText);

import tree1 from '../../public/Images/tree1.png';
import tree2 from '../../public/Images/tree2.png';
import tree3 from '../../public/Images/tree3.png';
import tree4 from '../../public/Images/tree4.png';
import tree5 from '../../public/Images/tree5.png';
import tree6 from '../../public/Images/tree6.png';

const Tree = () => {
    const container = useRef();
  useGSAP(() => {
     gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: '+=2500', 
        scrub: true,
        pin: true,
        markers: false, 
      },
      defaults: { ease: 'power2.out' }
     }).from('.timg', {
       autoAlpha: 0,
       y: 50,
       stagger:0.2
     }).to('.timg1', {
       zIndex:10
     }).to('.timg1', {
       left: "50%",
       top: "50%",
       transform: "translate(-50%,-50%) scale(1)",
    }).to('.timg2', {
       zIndex:11
     }).to('.timg2', {
       left: "50%",
       top: "50%",
       transform: "translate(-50%,-50%) scale(1)",
    }).to('.timg3', {
       zIndex:12
     }).to('.timg3', {
       left: "50%",
       top: "50%",
       transform: "translate(-50%,-50%) scale(1)",
    }).to('.timg4', {
       zIndex:13
     }).to('.timg4', {
       left: "50%",
       top: "50%",
       transform: "translate(-50%,-50%) scale(1)",
    }).to('.timg5', {
       zIndex:14
     }).to('.timg5', {
       left: "50%",
       top: "50%",
       transform: "translate(-50%,-50%) scale(1)",
    }).to('.timg6', {
       zIndex:15
     }).to('.timg6', {
       left: "50%",
       top: "50%",
       transform: "translate(-50%,-50%) scale(1)",
    })
    
  },[])
  return (
      <div className=' container-fluid ' style={{height:"95vh"}} ref={container}>
          <div className="row h-100">
              <div className="display-3 text-center capsfont fw-bold pt-5 mt-4">TREE PLANTATION EVENT</div>
              <div className="col-md-12 position-relative" style={{height:"85%"}}>
                  <img src={tree1} style={{height:"500px",width:"700px",objectFit:"cover",scale:0.4}} className='timg timg1 position-absolute'></img>
                  <img src={tree2} style={{height:"500px",width:"700px",objectFit:"cover",scale:0.4}}  className='timg timg2 position-absolute'></img>
                  <img src={tree3} style={{height:"500px",width:"700px",objectFit:"cover",scale:0.4}}  className='timg timg3 position-absolute'></img>
                  <img src={tree4} style={{height:"500px",width:"700px",objectFit:"cover",scale:0.4}}  className='timg timg4 position-absolute'></img>
                  <img src={tree5} style={{height:"500px",width:"700px",objectFit:"cover",scale:0.4}}  className='timg timg5 position-absolute'></img>
                  <img src={tree6} style={{height:"500px",width:"700px",objectFit:"cover",scale:0.4}}  className='timg timg6 position-absolute'></img>
              </div>
          </div>
    </div>
  )
}

export default Tree