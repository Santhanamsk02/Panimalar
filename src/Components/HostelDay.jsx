import React, { useRef, useEffect } from 'react';
import hd1 from '../../public/Images/hd1.png';
import hd2 from '../../public/Images/hd2.png';
import hd3 from '../../public/Images/hd3.png';
import hd4 from '../../public/Images/hd4.png';
import hd5 from '../../public/Images/hd5.png';
import hd6 from '../../public/Images/hd6.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

const images = [hd1, hd2, hd3, hd4, hd5, hd6];

const HostelDay = () => {
  const container = useRef();

  useGSAP(() => {
    const hdtext = new SplitText('.hdtext', { type: 'chars' });
    const abthd = new SplitText('.abthd', { type: 'lines' });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: '+=1500',
        scrub: 2,
        pin: true,
      },
    });

    gsap.from(hdtext.chars, {
      y: -50,
      autoAlpha: 0,
      stagger: 0.05,
      scrollTrigger: {
        trigger: container.current,
        start: '30% 100%',
          end: '35% 100%',
        scrub:2
      },
    });

    gsap.from(abthd.lines, {
      y: 50,
      autoAlpha: 0,
      stagger: 0.15,
      scrollTrigger: {
        trigger: container.current,
        start: '35% 100%',
        end: '40% 100%',
        scrub:2
      },
    });

    tl3.to('.hdimg', {
      height: '100%',
      width: '100%',
      zIndex: 0,
      stagger: 0.7,
    });
  }, []);

  return (
    <div
      className="container py-4 pb-5"
      style={{ minHeight: '95vh', overflow: 'hidden' }}
      ref={container}
    >
      <div className="display-3 fw-bold text-center font pt-5 hdtext">
        Hostel Day
      </div>
      <div className="fs-5 text-center px-4 pb-4 font abthd">
        Hostel Day is a vibrant celebration of hostel life, filled with joy,
        talent, and unity. It brings together students from different
        backgrounds to showcase performances, share experiences, and celebrate
        their shared journey. From cultural events to heartfelt speeches, it’s a
        day of unforgettable memories.
      </div>
      <div
        className="row position-relative mx-5 rounded rounded-4"
        style={{ height: '80vh', perspective: '500px' }}
      >
        {images.map((val, ind) => (
          <img
            src={val}
            className="position-absolute img img-fluid hdimg rounded rounded-4"
            key={ind}
            style={{
              objectFit: 'cover',
              zIndex: ind,
              top: '50%',
              left: '50%',
              height: '0%',
              width: '0%',
              transform: 'translate(-50%,-50%) rotateX(0deg)',
              transformStyle: 'preserve-3d',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HostelDay;
