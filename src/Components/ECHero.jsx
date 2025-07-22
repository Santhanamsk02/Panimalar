import React from 'react'
import image1 from '../../public/Images/cd1.png'
import image2 from '../../public/Images/cd2.png'
import image3 from '../../public/Images/hd1.png'
import image4 from '../../public/Images/hd2.png'
import image5 from '../../public/Images/nss1.jpg'
import image6 from '../../public/Images/nss2.jpg'
import image7 from '../../public/Images/sports1.png'
import image8 from '../../public/Images/sports2.png'
import image9 from '../../public/Images/yrc1.png'
import image10 from '../../public/Images/yrc2.png'
import image11 from '../../public/Images/cd3.png'
import image12 from '../../public/Images/cd4.png'

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger,SplitText } from 'gsap/all';


gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);

const ECHero = () => {
    const container = useRef();
    useGSAP(() => {
        let text1 = SplitText.create('.text1')
        let text2=SplitText.create('.text2')
        var tl1 = gsap.timeline({delay:4})
        tl1.from(text1.words, {
            y: 100,
            autoAlpha:0,
            stagger:0.25
        }).from(text2.words, {
            y: -100,
            autoAlpha: 0,
            stagger:0.25
        }).from('.text3', {
            x: -100,
            autoAlpha: 0,
            stagger:0.25
        }).from('.scroll-track-ec', {
            y: -100,
            autoAlpha: 0,
            stagger:0.25
        })
    },{scope:container})
  
  const group1 = [image1, image2, image3, image4]
  const group2 = [image5, image6, image7, image8]
  const group3 = [image9, image10, image11, image12]

  return (
    <div className='container-fluid d-flex align-items-center ' style={{ height: '95vh',overflow:"hidden" }} ref={container}>
      <div className='row'>
        <div className='col-md-6 d-flex flex-column row-gap-3 justify-content-center px-5'>
          <div className='display-3 fw-bolder font text1'>Unleash Your Talent</div>
          <div className='fs-3 fw-bold font text2'>Design. Dance. Debate. Develop.</div>
          <div className='fs-5 fw-semibold font text3'>
            Step beyond the classroom. Showcase your skills in art, sports, innovation, and everything in between.
          </div>
          <div className='d-flex column-gap-4'>
            <div className='btn btn-primary  font px-4 rounded-2 text3'>Explore Activities</div>
            <div className='btn  font border px-4 rounded-2 border-2 text3'>Watch Stories</div>
          </div>
        </div>

        <div className='col-md-6' >
          <div className='d-flex gap-4 eccon'>
                      {
                          <div className="scroll-container-ec">
                              <div className="scroll-track-ec track1">
                                  {group1.map((img, idx) => (
                                      <img key={idx} src={img} className="scroll-img-ec" />
                                  ))}
                                  {group1.map((img, idx) => (
                                      <img key={`dup-${idx}`} src={img} className="scroll-img-ec" />
                                  ))}
                              </div>
                          </div>
                      }
                      {
                <div className="scroll-container-ec">
                    <div className="scroll-track-ec track2">
                        {group2.map((img, idx) => (
                            <img key={idx} src={img} className="scroll-img-ec" />
                        ))}
                        {group2.map((img, idx) => (
                            <img key={`dup-${idx}`} src={img} className="scroll-img-ec" />
                        ))}
                    </div>
                </div>       
                      }
                           {
                <div className="scroll-container-ec">
                    <div className="scroll-track-ec track3">
                        {group3.map((img, idx) => (
                            <img key={idx} src={img} className="scroll-img-ec" />
                        ))}
                        {group3.map((img, idx) => (
                            <img key={`dup-${idx}`} src={img} className="scroll-img-ec" />
                        ))}
                    </div>
                </div>       
            }
                                 
          </div>
        </div>
      </div>
    </div>
  )
}

export default ECHero
