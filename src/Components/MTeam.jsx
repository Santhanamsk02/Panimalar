import React from 'react'
import mt1 from '../../public/Images/mt1.jpg'
import mt2 from '../../public/Images/mt2.jpg'
import mt3 from '../../public/Images/mt3.jpg'
import mt4 from '../../public/Images/mt4.jpg'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger,SplitText);
const MTeam = () => {
    const container = useRef();
    const mtext = useRef();
    useGSAP(() => {
        var mhead = SplitText.create(mtext.current)
        var tl6 = gsap.timeline({ scrollTrigger: { trigger: container.current, start: '25% 100%', end: '80% 100%', scrub: 2 } })
        tl6.from(mhead.chars, {
            y: 50,
            autoAlpha: 0,
            stagger:0.15
        })
        tl6.from('.mteam', {
            x:-100,
            autoAlpha: 0,
            stagger:0.25
        })
    },[])
  return (
      <div className=' container-fluid ' style={{height:"90vh"}} ref={container}>
          <div className="display-1 capsfont fw-bold text-center" ref={mtext}>MANAGEMENT TEAM</div>
          <div className="row justify-content-evenly mt-5">
              <div className=" rounded rounded-4 position-relative p-0 d-flex align-items-end mteam" style={{height:"55vh",backgroundImage:`url(${mt1})`,backgroundSize:"cover",backgroundPosition:"top",width:"22%"}}>
                  <div className="detial bg-light w-100 m-3 p-3 rounded rounded-4 text-c">
                      <div className="fs-5 font text-primary">Dr.P Chinnadurai<br/> M.A..,Ph.D</div>
                      <div className="fs-6 font fw-normal mt-1">Secretary & Correspondent,</div>
                  </div>
              </div>
              <div className=" rounded rounded-4 position-relative px-0 d-flex align-items-end mteam" style={{height:"55vh",backgroundImage:`url(${mt2})`,backgroundSize:"cover",backgroundPosition:"top",width:"22%"}}>
                  <div className="detial bg-light w-100 m-3 p-3 rounded rounded-4 text-c">
                      <div className="fs-5 font text-primary">Mrs.C.Vijayarajeswari</div>
                      <div className="fs-6 font fw-normal mt-1">Director</div>
                  </div>
              </div>
              <div className=" rounded rounded-4 position-relative p-0 d-flex align-items-end mteam" style={{height:"55vh",backgroundImage:`url(${mt3})`,backgroundSize:"cover",backgroundPosition:"top",width:"22%"}}>
                  <div className="detial bg-light w-100 m-3 p-3 rounded rounded-4 text-c">
                      <div className="fs-5 font text-primary">Dr. C. Sakthi Kumar<br/> M.E., Ph.D</div>
                      <div className="fs-6 font fw-normal mt-1">Director</div>
                  </div>
              </div>
              <div className=" rounded rounded-4 position-relative p-0 d-flex align-items-end mteam" style={{height:"55vh",backgroundImage:`url(${mt4})`,backgroundSize:"cover",backgroundPosition:"top",width:"22%"}}>
                  <div className="detial bg-light w-100 m-3 p-3 rounded rounded-4 text-c">
                      <div className="fs-5 font text-primary">Dr.Saranya Sree Sakthi Kumar B.E.,M.B.A.,Ph.D</div>
                      <div className="fs-6 font fw-normal mt-1">Director</div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default MTeam