import { React,useRef } from 'react'
import sports1 from '../../public/Images/sports1.png';
import sports2 from '../../public/Images/sports2.png';
import sports3 from '../../public/Images/sports3.png';
import sports4 from '../../public/Images/sports4.png';
import sports5 from '../../public/Images/sports5.png';
import sports6 from '../../public/Images/sports6.png';
import sports7 from '../../public/Images/sports7.png';
import sports8 from '../../public/Images/sports8.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

const SportsImages=[sports1,sports2,sports3,sports4,sports5,sports6,sports7,sports8]

const Sports = () => {
  const container = useRef();
  useGSAP(() => {
     const sdtext = new SplitText('.sdtext', { type: 'chars' });
    const abtsd = new SplitText('.abtsd', { type: 'lines' });
      gsap.from(sdtext.chars, {
      y: -70,
      autoAlpha: 0,
      stagger: 0.05,
      scrollTrigger: {
        trigger: container.current,
        start: '30% 100%',
          end: '35% 100%',
        scrub:2
      },
    });

    gsap.from(abtsd.lines, {
      y: 50,
      autoAlpha: 0,
      stagger: 0.15,
      scrollTrigger: {
        trigger: container.current,
        start: '90% 100%',
        end: '100% 100%',
        scrub:2
      },
    });

    let images=container.current.querySelectorAll('.caroimg')
    const tl7 = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: '+=1500',
        scrub: 2,
        pin: true,
      },
    });
     images.forEach((img, ind) => {
       if (ind > 0) {
         const angle = ind * 45;
         tl7.to(img, {
           transform: `rotateY(${angle}deg) translateZ(450px)`
         })
       }
     })
     tl7.to('.cimg-0', {
           transform: `rotateY(0deg) translateZ(450px)`
     })
     tl7.to('.carousel', {
       transform:'rotateY(260deg)'
     })
  }, []);
  return (
      <div className=' container-fluid pt-5' style={{minHeight:"93vh"}} ref={container}>
      <div className="display-4 fw-bold font text-center pt-5 sdtext">Sports Day</div>
      <div className="row h-100">
        <div className="col-md-12 h-100  wrapper d-flex justify-content-center align-items-center flex-column">
              <div className="carousel">
                {SportsImages.map((img,index)=>{
                  return(
                    <img  key={index} src={img} className={`caroimg rounded rounded-3 cimg-${index}`}></img>
                  )
                })}
          </div>
          <div className="fs-5 text-center font px-5 abtsd">Sports Day is a vibrant and energetic celebration of athleticism, teamwork, and school spirit. It provides students with an opportunity to showcase their talents, determination, and sportsmanship through a variety of track and field events, games, and competitions. The event is marked by colorful uniforms, enthusiastic cheering, and the collective excitement of both students and faculty. It's a day that highlights the importance of fitness, perseverance, and collaboration, leaving lasting memories for everyone involved.</div>
          
        </div>
      </div>
    </div>
  )
}

export default Sports