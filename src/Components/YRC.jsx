import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger ,SplitText} from 'gsap/all';
import yrc1 from '../../public/Images/yrc1.png';
import yrc2 from '../../public/Images/yrc2.png';
import yrc3 from '../../public/Images/yrc3.png';
import yrc4 from '../../public/Images/yrc4.png';
import yrc5 from '../../public/Images/yrc5.png';
import yrc6 from '../../public/Images/yrc6.png';
import yrc7 from '../../public/Images/yrc7.png';

gsap.registerPlugin(ScrollTrigger,SplitText);

const images=[yrc2,yrc3,yrc4,yrc5,yrc6,yrc7,yrc1]
const YRC = () => {
    const container = useRef();
    const yrcslider = useRef();
    useGSAP(() => {
       

    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: '+=1500',
        scrub: 2,
        pin: true,
      },
    });
        tl5.to(yrcslider.current, {
            x:"-280vw"
        })

        const tl2=gsap.timeline({scrollTrigger:{trigger:container.current,start:"30% 100%"}})
    const aboutyrc= SplitText.create('.abtyrc')
    tl2.from('.yrctitle', {
       scale:0
    })
    tl2.from(aboutyrc.lines, {
      x: -100,
      autoAlpha: 0,
      stagger:0.25
    })
    tl2.from('.keyyrc li', {
      y: -100,
      autoAlpha: 0,
      stagger:0.25
    })

  }, []);
  return (
      <div className='container-fluid pt-5' style={{height:"95vh"}} ref={container}>
          <div className="display-5 fw-bold text-center font pt-5 yrctitle">Youth Red Cross (YRC)</div>
          <div className="row h-100">
              <div className="col-md-6 h-100 pt-5 px-4">
                  <div className='fs-5 px-4 pb-4 font abtyrc'>
                        launched as a wing of the Indian Red Cross Society, plays a vital role in building a culture of health, empathy, and voluntary service among youth. YRC aims to promote humanitarian values and prepare students to respond to emergencies with courage and compassion. Rooted in the principle of <em>"Service to Society"</em>, YRC fosters a spirit of cooperation, health awareness, and global citizenship.
                </div>

                <div className='fs-4 fw-bold ps-4 font abtyrc'>Key Objectives:</div>
                <ul className='px-4 fs-5 font ms-5 keyyrc'>
                    <li>Promote health awareness and encourage healthy living practices</li>
                    <li>Develop a sense of social and civic responsibility in youth</li>
                    <li>Train students to respond to disasters and emergencies</li>
                    <li>Encourage voluntary blood donation and health campaigns</li>
                    <li>Foster international understanding through Red Cross principles</li>
                </ul>

              </div>
              <div className="col-md-6 h-100" style={{overflow:"hidden"}}>
                  <div className="yrcslider d-flex column-gap-5 pt-5" ref={yrcslider}>
                      {images.map((val, ind) => (
                          <img src={val} key={ind} className=' img img-fluid mx-5 rounded rounded-4' style={{height:"460px",width:"560px",objectFit:"cover"}}></img>
                      ))}
                  </div>
              </div>
          </div>
    </div>
  )
}

export default YRC