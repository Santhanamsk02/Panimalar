import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, SplitText);
import aboutit from '../../public/Images/abtit.png';

const AboutIT = () => {
  const container = useRef();

  useGSAP(() => {
    const abouttext = SplitText.create('.abouttext');

    gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: '+=1750', 
        scrub: true,
        pin: true,
        markers: false, 
      },
      defaults: { ease: 'power2.out' }
    })
      .to('.itimg', {
        width: '15%',
      })
      
      .to('.itimg', {
        transform: 'skewY(0deg) translate(-50%,-50%)',
      })
      .to('.itimg', {
        width: '100%',
        height: '100%',
      })
        .to('.ittxt', {
       scale:1,
      })
      .to('.itimg', {
        width: '40%',
        height: '50%',
      })
        
      .to('.itimg', {
        left: '75%',
      })
      .to('.itimg', {
        borderRadius: '24px',
        duration: 0.3,
      })
      .to('.ittxt', {
        top: '10%',
      })
      .from(abouttext.lines, {
        y: 100,
        autoAlpha: 0,
        stagger: 0.25,
      });

  }, []);

  return (
      <div className='container-fluid ' style={{ height: '95vh' }} ref={container}>
    <div className="row position-relative" style={{height:"95vh"}} >
      <div className="display-1 capsfont fw-bolder position-absolute ittxt z-2 w-100 text-center">
        ABOUT OUR DEPARTMENT
      </div>
      <img src={aboutit} className="position-absolute itimg" />
      <div className="abouttext fs-5 font fw-normal position-absolute pt-5" style={{ lineHeight: '37px', width: '45%' }}>
        The Department of Information Technology, established in 2000, is recognized by AICTE and affiliated with Anna University. Accredited by NBA, the department offers a four-year degree program in Information Technology, renowned for its academic excellence. It has significantly contributed to transforming students into accomplished IT Professionals. The department boasts state-of-the-art facilities, including advanced laboratories, well-equipped seminar halls, smart classrooms, and a library that supports e-learning.
        <br /><br />
        Our students gain substantial industry exposure through guest lectures and workshops led by industry experts. We also encourage students to participate in corporate in-plant training and industrial visits each semester, providing them with valuable real-world experience.
              </div>
              </div>
    </div>
  );
};

export default AboutIT;
