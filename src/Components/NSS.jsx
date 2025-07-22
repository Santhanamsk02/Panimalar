import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger ,SplitText} from 'gsap/all';

import nss1 from '../../public/Images/nss1.jpg';
import nss2 from '../../public/Images/nss2.jpg';
import nss3 from '../../public/Images/nss3.jpg';
import nss4 from '../../public/Images/nss4.jpg';
import nss5 from '../../public/Images/nss5.jpg';
import nss6 from '../../public/Images/nss6.jpg';
import nss7 from '../../public/Images/nss7.jpg';
import nss8 from '../../public/Images/nss8.jpg';
import nss9 from '../../public/Images/nss9.jpg';

gsap.registerPlugin(ScrollTrigger,SplitText);

const images = [nss1, nss2, nss3, nss4, nss5, nss6, nss7, nss8, nss9];

const NSS = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: '+=1500',
        scrub: 2,
        pin: true,
      },
    });

    const tl2=gsap.timeline({scrollTrigger:{trigger:container.current,start:"30% 100%"}})
    const aboutnss = SplitText.create('.aboutnss')
    tl2.from('.nsstitle', {
       scale:0
    })
    tl2.from(aboutnss.lines, {
      x: -100,
      autoAlpha: 0,
      stagger:0.25
    })
    tl2.from('.key li', {
      y: -100,
      autoAlpha: 0,
      stagger:0.25
    })
    tl2.from('.nssimg', {
      scale:0
    })

    tl.to('.nssimg', {
      y: -1000,
      rotateZ: -90,
      stagger: 0.6,
      ease: 'none',
    });
  }, []);

  return (
    <div
      className='container-fluid pt-5'
      ref={container}
      style={{ minHeight: '100vh', background: '#f8f9fa' }}
    >
      <div className='display-4 fw-bold text-center mb-5 pt-5 nsstitle'>
        National Service Scheme (NSS)
      </div>
      <div className='row'>
       <div className='col-md-6 d-flex flex-column row-gap-3 justify-content-center'>
  <div className='fs-5 px-4 aboutnss'>
 launched in 1969 under the Ministry of Youth Affairs & Sports, aims to engage students in nation-building activities and community service. It instills a sense of social responsibility, discipline, and commitment among the youth. Rooted in the ideals of Mahatma Gandhi, the program promotes the spirit of voluntary work through its motto <em>"Not Me, But You"</em>, emphasizing empathy and selfless service over individual interests.
  </div>

  <div className='fs-4 fw-bold ps-4 font aboutnss'>Key Objectives:</div>
  <ul className='px-4 fs-5 font ms-5 key'>
    <li>Understand the needs and challenges of the community</li>
    <li>Promote social and civic responsibility among students</li>
    <li>Apply classroom knowledge for real-life impact</li>
    <li>Develop leadership, teamwork, and problem-solving skills</li>
    <li>Encourage unity and national integration</li>
  </ul>
</div>


        <div
          className='col-md-6 d-flex justify-content-center align-items-center imagecon'
          style={{ height: '87vh', position: 'relative' }}
        >
          {images.map((val, ind) => (
            <img
              src={val}
              key={ind}
              className='nssimg position-absolute img-fluid rounded-4'
              style={{
                height: '60%',
                width: '85%',
                objectFit: 'cover',
                top: '40%',
                left: '45%',
                transform: 'translate(-50%,-50%)',
                zIndex: images.length - ind,
              }}
              alt={`nss-${ind}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NSS;
