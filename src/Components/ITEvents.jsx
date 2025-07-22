import itevent1 from '../../public/Images/itevent1.1.jpg'
import itevent2 from '../../public/Images/itevent1.2.jpg'
import itevent3 from '../../public/Images/itevent2.1.jpg'
import itevent4 from '../../public/Images/itevent2.2.jpg'
import itevent5 from '../../public/Images/itevent3.1.jpg'
import itevent6 from '../../public/Images/itevent3.2.jpg'
import itevent7 from '../../public/Images/itevent4.1.png'
import itevent8 from '../../public/Images/itevent4.2.png'
import itevent9 from '../../public/Images/itevent5.1.png'
import itevent10 from '../../public/Images/itevent5.2.png'


import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, SplitText);

const ITEvents = () => {
    const container = useRef();

  useGSAP(() => {

    gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: '+=3500', 
        scrub: true,
        pin: true,
        markers: false, 
      },
      defaults: { ease: 'power2.out' }
    }).to('.event1', {
        autoAlpha: 1,
        transform: "translateZ(0px) translateX(-200px)"
    }).from('.etxt1', {
        autoAlpha:0
    },'<').to('.event1', {
        transform: "translateZ(500px) translateX(-500px)"
    },).to('.event2', {
        autoAlpha: 1,
        transform: "translateZ(0px) translateX(200px)"
    }).to('.event2', {
        transform: "translateZ(500px) translateX(500px)"
    },).to('.etxt1', {
        autoAlpha:0
    }).to('.event3', {
        autoAlpha: 1,
        transform: "translateZ(0px) translateX(-200px)"
    }).from('.etxt2', {
        autoAlpha:0
    },'<').to('.event3', {
        transform: "translateZ(500px) translateX(-500px)"
    },).to('.event4', {
        autoAlpha: 1,
        transform: "translateZ(0px) translateX(200px)"
    }).to('.event4', {
        transform: "translateZ(500px) translateX(500px)"
    },).to('.etxt2', {
        autoAlpha:0
    }).to('.event5', {
        autoAlpha: 1,
        transform: "translateZ(0px) translateX(-200px)"
    }).from('.etxt3', {
        autoAlpha:0
    },'<').to('.event5', {
        transform: "translateZ(500px) translateX(-500px)"
    },).to('.event6', {
        autoAlpha: 1,
        transform: "translateZ(0px) translateX(200px)"
    }).to('.event6', {
        transform: "translateZ(500px) translateX(500px)"
    },).to('.etxt3', {
        autoAlpha:0
    }).to('.event7', {
        autoAlpha: 1,
        transform: "translateZ(0px) translateX(-200px)"
    }).from('.etxt4', {
        autoAlpha:0
    },'<').to('.event7', {
        transform: "translateZ(500px) translateX(-500px)"
    },).to('.event8', {
        autoAlpha: 1,
        transform: "translateZ(0px) translateX(200px)"
    }).to('.event8', {
        transform: "translateZ(500px) translateX(500px)"
    },).to('.etxt4', {
        autoAlpha:0
    }).to('.event9', {
        autoAlpha: 1,
        transform: "translateZ(0px) translateX(-200px)"
    }).from('.etxt5', {
        autoAlpha:0
    },'<').to('.event9', {
        transform: "translateZ(500px) translateX(-500px)"
    },).to('.event10', {
        autoAlpha: 1,
        transform: "translateZ(0px) translateX(200px)"
    }).to('.event10', {
        transform: "translateZ(500px) translateX(500px)"
    },).to('.etxt5', {
        autoAlpha:0
    })
     

  }, []);

  return (
      <div className=' container-fluid ' style={{ height: "97vh",overflow:"hidden" }} ref={container}>
          <div className="row h-100" >
              <div className="display-1 capsfont text-center fw-bold col-md-12 pt-5 mt-3">IT EVENTS</div>
              <div className="fs-1 fw-bold font etxt5 text-center" style={{position:"absolute",top:"60%",left:"50%",transform:"translate(-50%,-50%)"}}>D-Fest Event</div>
              <div className="fs-1 fw-bold font etxt4 text-center" style={{position:"absolute",top:"60%",left:"50%",transform:"translate(-50%,-50%)"}}>Micro Processor Event</div>
              <div className="fs-1 fw-bold font etxt3 text-center" style={{position:"absolute",top:"60%",left:"50%",transform:"translate(-50%,-50%)"}}>IEE-Event</div>
              <div className="fs-1 fw-bold font etxt2 text-center" style={{position:"absolute",top:"60%",left:"50%",transform:"translate(-50%,-50%)"}}>NET-QUEST</div>
              <div className="fs-1 fw-bold font etxt1 text-center" style={{position:"absolute",top:"60%",left:"50%",transform:"translate(-50%,-50%)"}}>DB Mastery Forum</div>
              <div className="col-md-6  position-relative " style={{ perspective: "600px", height: "95%" }}>
                  <img src={itevent9} className=' w-100 h-75 event9 position-absolute' style={{ objectFit: "cover", transformStyle: "preserve-3d", transform: "translateZ(-1500px) translateX(900px)", opacity: 0 }}></img>
                  <img src={itevent7} className=' w-100 h-75 event7 position-absolute' style={{ objectFit: "cover", transformStyle: "preserve-3d", transform: "translateZ(-1500px) translateX(900px)", opacity: 0 }}></img>
                  <img src={itevent5} className=' w-100 h-75 event5 position-absolute' style={{ objectFit: "cover", transformStyle: "preserve-3d", transform: "translateZ(-1500px) translateX(900px)", opacity: 0 }}></img>
                  <img src={itevent3} className=' w-100 h-75 event3 position-absolute' style={{ objectFit: "cover", transformStyle: "preserve-3d", transform: "translateZ(-1500px) translateX(900px)", opacity: 0 }}></img>
                  <img src={itevent1} className=' w-100 h-75 event1 position-absolute' style={{objectFit:"cover",transformStyle:"preserve-3d",transform:"translateZ(-1500px) translateX(900px)",opacity:0}}></img>
              </div>
              <div className="col-md-6 position-relative" style={{ perspective: "600px", height: "95%" }}>
                  <img src={itevent10} className=' w-100 h-75 event10 position-absolute' style={{ objectFit: "cover", transformStyle: "preserve-3d", transform: "translateZ(-1500px) translateX(-900px)", opacity: 0 }}></img>
                  <img src={itevent8} className=' w-100 h-75 event8 position-absolute' style={{ objectFit: "cover", transformStyle: "preserve-3d", transform: "translateZ(-1500px) translateX(-900px)", opacity: 0 }}></img>
                  <img src={itevent6} className=' w-100 h-75 event6 position-absolute' style={{ objectFit: "cover", transformStyle: "preserve-3d", transform: "translateZ(-1500px) translateX(-900px)", opacity: 0 }}></img>
                  <img src={itevent4} className=' w-100 h-75 event4 position-absolute' style={{ objectFit: "cover", transformStyle: "preserve-3d", transform: "translateZ(-1500px) translateX(-900px)", opacity: 0 }}></img>
                  <img src={itevent2} className=' w-100 h-75 event2 position-absolute' style={{ objectFit: "cover", transformStyle: "preserve-3d", transform: "translateZ(-1500px) translateX(-900px)", opacity: 0 }}></img>
              </div>
          </div>
    </div>
  )
}

export default ITEvents