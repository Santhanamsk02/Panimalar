import React from 'react'
import logo from '../../public/Images/logo.png'
import { useRef,useEffect} from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { NavLink,useLocation } from "react-router";

gsap.registerPlugin(useGSAP,ScrollTrigger); 
const Header = () => {
  const location = useLocation();
  
  const container = useRef();
  var tl1  = useRef(gsap.timeline({paused:true}));
  
    useGSAP(() => {
      gsap.from('.navcon', {
        y: -100,
        stagger: 0.15,
        autoAlpha:0
      })
      tl1.current.to('.sidebar', {
        transform: "translateX(0vw)",
        duration:1
      })
      .from('.nav-item', {
    x: 100,
    autoAlpha: 0,
    stagger:0.1
      })
      .from('.icons a', {
        x: -100,
        stagger: 0.1,
        autoAlpha:0
      })
    }, { scope: container });
  useEffect(() => {
    return () => {
      tl1.current.kill();
      gsap.killTweensOf('.sidebar');
      gsap.killTweensOf('.nav-item');
      gsap.killTweensOf('.icons a');
    };
  }, [location.pathname]);
 
  return (
    <>
      <div className='container-fluid w-100 d-flex py-2 px-md-5 px-0  justify-content-between position-fixed fixed-top bg-light z-3' ref={container} style={{boxShadow:"0px 10px 10px 1px rgba(146, 146, 146, 0.5)"}}>
          <div className="navbar-brand d-flex">
            <img src={logo} className='navcon' style={{height:"50px"}}></img>
            <div className='ms-2 fw-bold capsfont d-flex flex-column justify-content-center'>
              <div className='fs-4 fw-bolder navcon' style={{letterSpacing:"2px"}}>PANIMALAR</div>
              <div className='navcon'>ENGINEERING COLLEGE</div>
            </div>
          </div>
      
      <div className="side d-flex align-items-center column-gap-5">
        <div className="btn btn-primary font px-4 rounded-2 navcon d-none d-md-flex">Admission-2025</div>
        <i className="bi bi-list text-light bg-primary fw-bolder  p-1 px-2 fs-4 rounded-circle navcon" onClick={()=>{tl1.current.play()}}></i>
        </div>
        <div className="sidebar position-absolute w-50 bg-light p-3 p-md-5 d-flex flex-column justify-content-between" style={{height:"100vh"}}>
          <div className="close d-flex justify-content-end">
            <i className="bi bi-x-octagon fs-2 pe-5" onClick={() => { tl1.current.reverse(); }}></i>
          </div>
          <ul className="d-flex flex-column nav row-gap-4 align-item-start fw-bold fs-0 fs-md-5">
            <NavLink to='/'><li className="nav-item font">Home</li></NavLink>
            <NavLink to='/aboutus'><li className="nav-item font">About Us</li></NavLink>
            <NavLink to='/courses'><li className="nav-item font">Courses</li></NavLink>
            <NavLink to='/academics'><li className="nav-item font">Academics</li></NavLink>
            <NavLink to='/coe'><li className="nav-item font">COE</li></NavLink>
            <NavLink to='/placement'><li className="nav-item font">Placement</li></NavLink>
            <NavLink to='/facility'><li className="nav-item font">Facility</li></NavLink>
            <NavLink to='/admission'><li className="nav-item font">Admission</li></NavLink>
            <NavLink to='/extra-curricular'><li className="nav-item font">Extra-Curricular</li></NavLink>
          </ul>
          <div className="bottom ps-3 fw-bold d-flex justify-content-between align-items-center flex-md-row flex-column">
            <div className="fs-5 font nav-item">Counselling Code : 1210</div>
            <div className="icons fs-4 d-flex column-gap-4">
              <a href='https://www.youtube.com/channel/UCHmR5GOkXG54CoLgJyADIXA' target='_blank'><i className="bi bi-youtube text-danger"></i></a>
              <a href='https://www.facebook.com/panimalarengineeringcollegeofficial'target='_blank'><i className="bi bi-facebook text-primary"></i></a>
              <a href='https://www.instagram.com/panimalarengineeringcollege/' target='_blank'><i className="bi bi-instagram" style={{color:"pink"}}></i></a>
              <a href='https://www.linkedin.com/school/panimalar-engineering-college/posts/?feedView=all' target='_blank'><i className="bi bi-linkedin text-primary-emphasis"></i></a>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Header