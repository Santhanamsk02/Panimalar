import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, SplitText);

import visionit from '../../public/Images/visionit.jpg'
import mission from '../../public/Images/mission.png'
const Vision = () => {
const container = useRef();

  useGSAP(() => {

      gsap.timeline({
          scrollTrigger: {
              trigger: container.current,
              start: 'top top',
              end: '+=1500',
              scrub: true,
              pin: true,
              markers: false,
          },
          defaults: { ease: 'power2.out' }
      })
          .to('.vtxt', {
              color: "#0d6efd"
          })
          .to('.wrapper', {
              transform: "translateY(15vh)"
          }, '-=0.4')
          .to('.vimg', {
              width: "55%",
              height: "45%"
          })
          .to('.wrapper', {
              transform: "translateY(5vh)"
          }).to('.vtxt', {
              color: "black"
          })
      .to('.mtxt', {
              color: "#0d6efd"
      }, '<')
          .to('.wrapper', {
              transform: "translateY(-58vh)"
          },'<')
          .to('.mimg', {
              width: "55%",
              height: "45%"
          })
          .to('.wrapper', {
              transform: "translateY(-90vh)"
          })
      
  }, []);
  return (
      <div className=' container-fluid ' style={{height:"91vh"}}  ref={container}>
          <div className="row h-100">
              <div className="col-md-5 d-flex flex-column justify-content-center row-gap-5 ps-4">
                  <div className="capsfont fw-bold vtxt"  style={{fontSize:"7.7rem"}}>VISION</div>
                  <div className="capsfont fw-bold mtxt"  style={{fontSize:"7.7rem"}}>MISSION</div>
              </div>
              <div className="col-md-7"  style={{height:"91vh",overflow:"hidden"}}>
                  <div className="wrapper w-100" style={{transform:"translateY(100vh)"}}>
                      <div className="con1 w-100 d-flex justify-content-center  align-items-center flex-column p-5 row-gap-4 " style={{height:"91vh"}}>
                          <img src={visionit} className=' rounded rounded-4 vimg' style={{ objectFit: "cover",width:"100%",height:"100%" }}></img>
                          <div className="fs-5 font fw-normal" style={{lineHeight:"27px"}}>To impart fundamental knowledge and practical expertise in Information Technology to students, instilling ethical principles to achieve excellence in academics and corporate, to emerge as distinguished graduates.</div>
                      </div>
                      <div className="con2 w-100 d-flex justify-content-center  align-items-center flex-column p-5 row-gap-4 " style={{height:"91vh"}}>
                          <img src={mission} className=' rounded rounded-4 mimg' style={{ objectFit: "cover",width:"100%",height:"100%" }}></img>
                          <div className="fs-5 font fw-normal" style={{ lineHeight: "34px" }}>M1: To establish a strong foundation in technology through innovation and research.<br/>
                            M2: To create a tech-driven learning environment that promotes academic success.<br/>
                            M3: To develop skilled graduates in IT, research and entrepreneurship with global competence.<br/>
                        M4: To collaborate with industry and government affairs to gain exposure while maintaining standards and promoting ethics, diversity and social impact.</div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Vision