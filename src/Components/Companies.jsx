import React from 'react'
import company1 from '../../public/Images/company1.png';
import company2 from '../../public/Images/company2.png';
import company3 from '../../public/Images/company3.png';
import company4 from '../../public/Images/company4.jpg';
import company5 from '../../public/Images/company5.jpg';
import company6 from '../../public/Images/company6.png';
import company7 from '../../public/Images/company7.png';
import company8 from '../../public/Images/company8.png';
import company9 from '../../public/Images/company9.png';
import company10 from '../../public/Images/company10.png';
import company11 from '../../public/Images/company11.png';
import company12 from '../../public/Images/company12.png';
import company13 from '../../public/Images/company13.jpeg';
import company14 from '../../public/Images/company14.jpg';
import company15 from '../../public/Images/company15.jpg';
import company16 from '../../public/Images/company16.jpg';
import company17 from '../../public/Images/company17.png';
import company18 from '../../public/Images/company18.png';
import company19 from '../../public/Images/company19.png';
import company20 from '../../public/Images/company20.png';



import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';


gsap.registerPlugin(useGSAP, ScrollTrigger);

const Companies = () => {
    const container = useRef();
    const companies = [
  { src: company1, className: 'img1' },
  { src: company2, className: 'img2' },
  { src: company3, className: 'img3' },
  { src: company4, className: 'img4' },
  { src: company5, className: 'img5' },
  { src: company6, className: 'img6' },
  { src: company7, className: 'img7' },
  { src: company8, className: 'img8' },
  { src: company9, className: 'img9' },
  { src: company10, className: 'img10' },
  { src: company11, className: 'img11' },
  { src: company12, className: 'img12' },
  { src: company13, className: 'img13' },
  { src: company14, className: 'img14' },
  { src: company15, className: 'img15' },
  { src: company16, className: 'img16' },
  { src: company17, className: 'img17' },
  { src: company18, className: 'img18' },
  { src: company19, className: 'img19' },
  { src: company20, className: 'img20' },
];

    useGSAP(() => {
        var tl4 = gsap.timeline({ scrollTrigger: { trigger: container.current, start: '35% 100%', end: '100% 100%', scrub: 2 } })
        tl4.to('.company .img', {
            top: "40%",
            transform: "translate(-50%,-50%)",
        })
        tl4.to('.img1', { left: "5%" },'+=0.5')
            .to('.img2', { top: "5%" }, '<')
            .to('.img3', { left: "95%" }, '<')
            .to('.img4', { top: "95%" }, '<')
            .to('.img5', { top: "10%", left: "10%" }, '<')
            .to('.img6', { top: "10%", left: "90%" }, '<')
            .to('.img7', { top: "90%", left: "10%" }, '<')
            .to('.img8', { top: "90%", left: "90%" }, '<')
            .to('.img9', { top: "95%", left: "25%" }, '<')
            .to('.img10', { top: "95%", left: "75%" }, '<')
            .to('.img11', { top: "5%", left: "25%" }, "<")
            .to('.img12', { top: "5%", left: "75%" }, '<')
            .to('.img13', { top: "20%",left:"35%" }, "<")
            .to('.img14', { top: "80%",left:"35%" }, '<')
            .to('.img15', { left: "15%",top:"35%" }, '<')
            .to('.img16', { left: "80%",top:"35%" }, '<')
            .to('.img17', { left: "60%", top: "20%" }, '<')
            .to('.img18', { left: "65%", top: "80%" }, '<')
            .to('.img19', { left: "20%", top: "75%" }, '<').
            to('.img20', { left: "80%", top: "75%" }, '<')
            .to('.img21', { left: "85%", top: "35%" }, '<').from('.box',{autoAlpha:0,scale:0,stagger:0.2})
    },{scope:container})
  return (
      <div className='container-fluid pt-5 mb-5' style={{ minHeight: "100vh" }} ref={container}>
  <div className="row">
    <div className="col-12 display-5 text-center text-primary fw-bold font">Our Recruiters</div>
  </div>

  <div className="row company position-relative" style={{ height: "90vh" }}>
    {companies.map((item, index) => (
      <img
        src={item.src}
        alt={`company-${index + 1}`}
        className={`img img-fluid rounded-circle p-2 ${item.className}`}
        key={index}
      />
    ))}

    <div className="con d-flex justify-content-center align-items-center column-gap-4 flex-wrap row-gap-0">
      <div className="box p-3 text-light box-1 text-center rounded-3">
        <div className="fs-3 font fw-bold">300+</div>
        <div className="fs-5">Hiring Companies</div>
      </div>
      <div className="box p-3 text-light box-2 text-center rounded-3">
        <div className="fs-3 font fw-bold">1500+</div>
        <div className="fs-5">Successful Alumni</div>
      </div>
      <div className="box p-3 px-5 text-light box-3 text-center rounded-3">
        <div className="fs-3 font fw-bold">90%</div>
        <div className="fs-5">Placements</div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Companies