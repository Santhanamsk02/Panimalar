import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, SplitText } from 'gsap/all';


import gallery1 from '../../public/Images/gallery1.jpeg'
import gallery2 from '../../public/Images/gallery2.jpeg'
import gallery3 from '../../public/Images/gallery3.png'
import gallery4 from '../../public/Images/gallery4.jpg'
import gallery5 from '../../public/Images/gallery5.png'
import gallery6 from '../../public/Images/gallery6.jpeg'
import gallery7 from '../../public/Images/gallery7.jpeg'
import gallery8 from '../../public/Images/gallery8.jpeg'
import gallery9 from '../../public/Images/gallery9.png'
import gallery10 from '../../public/Images/gallery10.png'
import gallery11 from '../../public/Images/gallery11.jpg'
import { Zoom } from 'swiper/modules';

gsap.registerPlugin(ScrollTrigger, SplitText);
const Images = [
  { photo: gallery1, left: 0, top: 0 },         
  { photo: gallery2, left: 0, top: 0 },         
  { photo: gallery3, left: 50, top: 50 },       
  { photo: gallery4, left: 90, top: 90 },       
  { photo: gallery5, left: 50, top: 90 },       
  { photo: gallery6, left: 10, top: 90 },       
  { photo: gallery7, left: 90, top: 50 },       
  { photo: gallery8, left: 10, top: 50 },       
{ photo: gallery9, left: 10, top: 10 },
  { photo: gallery10, left: 50, top: 15 },      
  { photo: gallery11, left: 90, top: 10 },             
];


const Gallery = () => {
    const container = useRef();
    const Zoom = (photo) => {
        if (!photo.classList.contains("visible")) {
            gsap.to(photo, {
                top: "50%",
                left: "50%",
                height: "650px",
                width: "1200px",
                zIndex: 100,
                backdropFilter: 'blur(50px)'
            })
        photo.classList.add("visible")
        }
        else {
            gsap.to(photo, {
            height: "200px",
            width: "300px",
            top: `${photo.dataset.top}%`,
                left: `${photo.dataset.left}%`,
                backdropFilter: 'blur(0px)',
                zIndex:photo.dataset.z
            })
            photo.classList.remove("visible")
        }
    }
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top top',
                end: '+=1500',
                scrub: 2,
                pin: true,
            }
        });
        tl.to('.gimg', {
            height: "200px",
            width: "300px",
            stagger:0.3
        })
        tl.to('.gimg10', {
            left: '90%',
            top:"10%"
        })
        tl.to('.gimg9', {
            left: '50%',
            top:"15%"
        })
        tl.to('.gimg8', {
            left: '10%',
            top:"10%"
        })
        tl.to('.gimg7', {
            left: '10%',
            top:"50%"
        })
        tl.to('.gimg6', {
            left: '90%',
            top:"50%"
        })
        tl.to('.gimg5', {
            left: '10%',
            top:"90%"
        })
        tl.to('.gimg4', {
            left: '50%',
            top:"90%"
        })
        tl.to('.gimg3', {
            left: '90%',
            top:"90%"
        })
    },[])
  return (
      <div className=' container-fluid pt-5' style={{height:"110vh"}} ref={container}>
          <div className="display-3 capsfont fw-bold text-center pt-5">OUR GALLERY</div>
          <div className="row position-relative" style={{height:"78vh"}}>
              {Images.map((val, ind) => (
                  <img style={{ objectFit: "cover", zIndex: ind }} src={val.photo} className={`gimg gimg${ind} position-absolute`} key={ind} onClick={(e) => { Zoom(e.target) }} data-left={val.left} data-top={val.top} data-z={ind}></img>
              ))}
          </div>
    </div>
  )
}

export default Gallery