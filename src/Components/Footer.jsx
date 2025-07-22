import React, { useRef } from 'react'
import logo from '../../public/Images/logo.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';


gsap.registerPlugin(useGSAP, ScrollTrigger);
const Footer = () => {
    const container = useRef();
    useGSAP(() => {
        var tl7 = gsap.timeline({ scrollTrigger: { trigger: container.current, start: '45% 100%'} })
        tl7.from('.flogo', {
            autoAlpha: 0,
            scale: 0,
            y:-100
        })
        .from('.ftext', {
           autoAlpha: 0,
        scale: 0,
        y:-100
        })
        .from('.fnav', {
         autoAlpha: 0,
        scale: 0,
        y:-100
        })
        .from('.fnav .nav-item', {
         autoAlpha: 0,
            y: -100,
        stagger:0.1
        })
        .from('.ac', {
         autoAlpha: 0,
        y: -100,
        stagger:0.1
        })
        .from('.loc', {
         autoAlpha: 0,
        y: -100,
        stagger:0.1
        }, '<')
        .from('.cu', {
         autoAlpha: 0,
        y: -100,
        stagger:0.1
        }, '<')
        .from('.ficons i', {
         autoAlpha: 0,
        x: 100,
        stagger:0.1
     },'<')
    },{scope:container})
    return (
        <div>
      <div  className=' container-fluid footer d-flex flex-column align-items-center py-5 ' style={{minHeight:"65vh"}}  ref={container}>
          <img src={logo} style={{ height: "125px" }} className='flogo'></img>
          <div className="curfont display-5 ftext">Panimalar Engineering College</div>
          <ul className="fnav d-flex nav column-gap-5 py-3 mt-5 fs-5 border border-black border-2 border-start-0 border-end-0 px-4">
            <li className="nav-item font">Home</li>
            <li className="nav-item font">About Us</li>
            <li className="nav-item font">Courses</li>
            <li className="nav-item font">Academics</li>
            <li className="nav-item font">COE</li>
            <li className="nav-item font">Placement</li>
            <li className="nav-item font">Facility</li>
            <li className="nav-item font">Admission</li>
            <li className="nav-item font">Extra-Curricular</li>
          </ul>
          <div className="row mt-4">
              <div className="col-md-3 d-flex flex-column align-items-center">
                  <div className="fs-5 font fw-bold mb-2 ac">For Admission Call</div>
                  <div className="font fs-5 ac">+91- 90438 91272</div>
                  <div className="font fs-5 ac">+91- 90438 90983</div>
              </div>
              <div className="col-md-4 d-flex flex-column align-items-center">
                  <div className="fs-5 font fw-bold mb-2 loc">Our Location</div>
                  <div className="font fs-5 text-center loc">Bangalore Trunk Road, Varadharajapuram, Poonamallee, Chennai – 600 123.</div>
              </div>
              <div className="col-md-3 d-flex flex-column align-items-center">
                  <div className="fs-5 font fw-bold mb-2 cu">Contact Us</div>
                  <div className="font fs-5 cu">044-2649 0505</div>
                  <div className="font fs-5 cu">044-2649 0404</div>
                  <div className="font fs-5 cu">info@panimalar.ac.in</div>
              </div>
              <div className="col-md-2 d-flex flex-column align-items-center">
                  <div className="fs-5 font fw-bold mb-2 cu">Follow Us</div>
                  <div className="icons ficons fs-4 d-flex column-gap-4">
                        <a href='https://www.youtube.com/channel/UCHmR5GOkXG54CoLgJyADIXA' target='_blank'><i className="bi bi-youtube text-danger"></i></a>
                        <a href='https://www.facebook.com/panimalarengineeringcollegeofficial'target='_blank'><i className="bi bi-facebook text-primary"></i></a>
                        <a href='https://www.instagram.com/panimalarengineeringcollege/' target='_blank'><i className="bi bi-instagram" style={{color:"pink"}}></i></a>
                        <a href='https://www.linkedin.com/school/panimalar-engineering-college/posts/?feedView=all' target='_blank'><i className="bi bi-linkedin text-primary-emphasis"></i></a>
                    </div>
              </div>
          </div>
            </div>
            </div>
  )
}

export default Footer