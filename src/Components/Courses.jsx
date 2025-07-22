import React, { useState } from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import course1 from '../../public/Images/course1.jpeg'
import course2 from '../../public/Images/course2.avif'
import course3 from '../../public/Images/course3.jpeg'
import course4 from '../../public/Images/course4.jpg'
import course5 from '../../public/Images/course5.jpeg'
import course6 from '../../public/Images/course6.webp'
import course7 from '../../public/Images/course7.jpg'
import course8 from '../../public/Images/course8.webp'
import course9 from '../../public/Images/course9.jpg'
import course10 from '../../public/Images/course10.jpg'
import course11 from '../../public/Images/course11.jpg'
import { NavLink,useLocation } from "react-router";


gsap.registerPlugin(useGSAP, ScrollTrigger);
const courseData = [
  { title: 'B.E - Computer Science Engineering', image: course1, type: 'be' },
  { title: 'B.Tech - Information Technology', image: course2, type: 'btech' },
  { title: 'B.E - Electronics And Communication Engineering', image: course3, type: 'be' },
  { title: 'B.E - Electrical And Electronics Engineering', image: course4, type: 'be' },
  { title: 'B.E - Mechanical Engineering', image: course5, type: 'be' },
  { title: 'B.Tech - Artificial Intelligence And Machine Learning', image: course6, type: 'btech' },
  { title: 'B.Tech - Artificial Intelligence And Data Science', image: course7, type: 'btech' },
  { title: 'M.E - Computer Science Engineering', image: course8, type: 'me' },
  { title: 'M.Tech - Information Technology', image: course9, type: 'me' },
  { title: 'Master of Business Administration (MBA)', image: course10, type: 'me' },
  { title: 'Science And Humanities', image: course11, type: 'sh' },
];

const Courses = () => {
    const container = useRef();
    let showUG = () => {
           gsap.to('.bcnav', {
                left:"0%"
            })
            gsap.to('.cnav', {
                left:"25%"
            })
        gsap.to('.bnav', {
               autoAlpha:1,
               display: "flex",
               scale:1
           })
        gsap.to('.course', {
               autoAlpha:1,
               scale: 1,
               display:"flex"
           })
        gsap.to('.me', {
               autoAlpha:0,
               scale: 0,
               display:"none"
           })
        }
       let showPG = () => {
            gsap.to('.cnav', {
                left:"50%"
            })
           gsap.to('.bnav', {
               autoAlpha:0,
               scale:0,
               display:"none"
           })
           gsap.to('.course', {
               autoAlpha:1,
               scale: 1,
               display:"flex"
           })
           gsap.to('.be,.btech,.sh', {
               autoAlpha:0,
               scale: 0,
               display:"none"
           })
        }
       let showSH = () => {
            gsap.to('.cnav', {
                left:"75%"
            })
           gsap.to('.bnav', {
               autoAlpha:0,
               scale:0,
               display:"none"
           })
           gsap.to('.course', {
               autoAlpha:1,
               scale: 1,
               display:"flex"
           })
           gsap.to('.be,.btech,.me', {
               autoAlpha:0,
               scale: 0,
               display:"none"
           })
        }
    let showAll = () => {
           
            gsap.to('.cnav', {
                left:"0%"
            })
        gsap.to('.bnav', {
               autoAlpha:0,
               scale:0,
               display:"none"
           })
        gsap.to('.course', {
               autoAlpha:1,
               scale: 1,
               display:"flex"
           })
    }
    let showAllUG = () => {
            gsap.to('.bcnav', {
                left:"0%"
            })
        gsap.to('.be,.btech', {
               autoAlpha:1,
               scale: 1,
               display:"flex"
           })
           
    }
    let showBE = () => {
            gsap.to('.bcnav', {
                left:"33.333%"
            })
        gsap.to('.be,.btech', {
               autoAlpha:1,
               scale: 1,
               display:"flex"
        })
        gsap.to('.btech', {
               autoAlpha:0,
               scale: 0,
               display:"none"
           })
    }
    let showBTech = () => {
            gsap.to('.bcnav', {
                left:"66.666%"
            })
        gsap.to('.be,.btech', {
               autoAlpha:1,
               scale: 1,
               display:"flex"
        })
        gsap.to('.be', {
               autoAlpha:0,
               scale: 0,
               display:"none"
           })
        }
  return (
      <div className=' container-fluid pt-5' style={{minHeight:"150vh"}} ref={container}>
          <div className="row rounded-5 border position-relative border-2 mx-5">
              <div className="col-md-3 font fs-5 text-center py-2 rounded-5" onMouseOver={showAll}>All</div>
              <div className="col-md-3 font fs-5  text-center py-2 rounded-5" onMouseOver={showUG}>Under Graduate</div>
              <div className="col-md-3 font fs-5 text-center py-2 rounded-5" onMouseOver={showPG} >Post Grduate</div>
              <div className="col-md-3 font fs-5  text-center py-2 rounded-5" onMouseOver={showSH}>Science And Humanities</div>
              <div className="col-md-3 position-absolute cnav  py-2 rounded-5 h-100"></div>
          </div>
        <div className="row mt-4 justify-content-center bnav" style={{display:"none",scale:0}}>
              <div className="col-md-3 d-flex border rounded-5 position-relative">
                      <div className="col-md-4 font fs-5 text-center py-2 rounded-5" onMouseOver={showAllUG}>All</div>
                    <div className="col-md-4 font fs-5 text-center py-2 rounded-5"onMouseOver={showBE}>B.E</div>
                  <div className="col-md-4 font fs-5 text-center py-2 rounded-5"onMouseOver={showBTech}>B.Tech</div>
                    <div className="col-md-4 position-absolute bcnav  py-2 rounded-5 h-100" style={{left:"0%"}}></div>
              </div>   
          </div>
          <div className="row mt-5 row-gap-4 column-gap-4 justify-content-center mx-5">
              {courseData.map((course, index) => (
                <div key={index} className={`col-md-3 fs-3 fw-bold text-light font text-center  align-items-center rounded-4 course ${course.type}`}
                style={{
             backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.39), rgba(0, 0, 0, 0.35)), url(${course.image})`,
                height: "260px",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}><NavLink to='/courses' className='text-light'>{course.title}</NavLink></div>
            ))}
          </div>
    </div>
  )
}

export default Courses