import React from 'react'
import abt1 from '../../public/Images/abt1.jpg'
import abt2 from '../../public/Images/abt2.png'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger,SplitText} from 'gsap/all';

const AboutHero = () => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const container = useRef();
    const container2 = useRef();
    const container3 = useRef();
    const container4 = useRef();

    useGSAP(() => {
        const atext = SplitText.create('.atext');
        const aptext = SplitText.create('.aptext');
        const vhead = SplitText.create('.vhead');
        const vtext = SplitText.create('.vtext');
        const mhead = SplitText.create('.mhead');
        const mtext = SplitText.create('.mtext');
        const chead = SplitText.create('.chead');
        const ctext = SplitText.create('.ctext');
        var tl1 = gsap.timeline({ delay: 6 })
        var tl2 = gsap.timeline({ scrollTrigger: { trigger: container.current, start: "25% 100%", end: '100% 100%', scrub: 2 } })
        var tl3 = gsap.timeline({ scrollTrigger: { trigger: container2.current, start: '50% 100%', end: '90% 100%', scrub: 2 } })
        var tl4 = gsap.timeline({ scrollTrigger: { trigger: container3.current, start: '50% 100%', end: '90% 100%', scrub: 2 } })
        var tl5=gsap.timeline({scrollTrigger:{trigger:container4.current,start:'20% 100%',end:'100% 100%',scrub:2}})
        
        
        tl1.from(atext.chars, {
            top:"70px",
            autoAlpha: 0,
            stagger:0.2
        })
        tl1.from(aptext.lines, {
            top:"70px",
            autoAlpha: 0,
            stagger:0.2
        })
        tl1.from('.aimg1', {
            scale:0
        })
        tl1.from('.aimg2', {
            scale:0
        })
        tl2.to('.aimg1', {
            top: "600px",
            left: '-370px',
            height: "145%",
            width:"85%"
        })
        tl2.to('.aimg2', {
            top: "750px",
            left: '-700px',
            height: "70%",
            border:"7px solid white"
        }, '<')
        tl2.to('.aimg1', {
            top: "1600px",
            left: '370px',
            height: "40%",
            width: "40%",
            border: "7px solid white",
            zIndex:2
        })
        tl2.to('.aimg2', {
            top: "1500px",
            left: '-300px',
            width:"600px",
            height: "500px",
            border:"0px solid white"
        }, '<')
        tl2.to('.aimg1', {
            top: "2300px",
            left: '-385px',
            height: "400px",
            width: "500px",
            zIndex:2
        })
        tl2.to('.aimg2', {
            top: "2310px",
            left: '-130px',
            height: "370px",
            width:"470px",
        }, '<')
        tl3.from(vhead.chars, {
            y: 50,
            autoAlpha: 0,
            stagger:0.25
        })
        tl3.from(vtext.lines, {
            y: -50,
            autoAlpha: 0,
            stagger:0.25
        })
        tl4.from(mhead.chars, {
            y: 50,
            autoAlpha: 0,
            stagger:0.25
        })
        tl4.from(mtext.lines, {
            y: -50,
            autoAlpha: 0,
            stagger:0.25
        })
        tl5.from(chead.chars, {
            y: 50,
            autoAlpha: 0,
            stagger:0.25
        })
        tl5.from(ctext.lines, {
            y: -50,
            autoAlpha: 0,
            stagger:0.25
        })
        tl5.from('.cbox', {
            scale: 0,
            stagger:0.25
        })
    },[])
    return (
        <>
            <div className="conatiner-fluid" ref={container} style={{overflowX:"hidden",minHeight:"350vh"}}>
                <div className=' container-fluid ' style={{ height: "87vh" }} >
          <div className="row d-flex justify-content-center align-items-center row-gap-0 h-100">
              <div className="row">
              <div className=" capsfont atext" style={{ fontSize: "9rem" }}>ABOUT</div>
              <div className="col-md-3">
                  <div className="capsfont atext" style={{ fontSize: "8.5rem" }}>US</div>
                  <div className=" font aptext" style={{ fontSize: "1.15rem",textAlign:"justify" }}>Panimalar Engineering College, a Christian Minority Institution of Higher Education governed by JAISAKTHI Educational Trust</div>
                  <div className="font mt-4 aptext" style={{ fontSize: "1.15rem",textAlign:"justify" }}>Aims at imparting quality engineering and management education for the aspiring youth.</div>
              </div> 
              <div className="col-md-6">
                  <img src={abt1} className='img  rounded rounded-4 mt-2 position-relative aimg1' style={{objectFit:"cover"}}></img>
              </div>
              <div className="col-md-3">
                  <img src={abt2} className='img rounded rounded-4 position-relative aimg2' style={{ objectFit: "cover" }}></img>
                  <div className="font mt-4 aptext" style={{ fontSize: "1.15rem",textAlign:"justify" }}>The college is located near Poonamallee, Chennai, and is well connected by road covering, Chennai, Kancheepuram and Thiruvallur districts</div>
                  </div>
            </div>
          </div>
            </div>
            <div className="container-fluid" style={{ height: "90vh" }} ref={container2}>
                <div className="row h-100">
                    <div className="col-md-6">

                    </div>
                    <div className="col-md-6 d-flex flex-column row-gap-4 h-100 justify-content-center">
                        <div className="display-1 capsfont fw-semibold ps-5 vhead">OUR VISION</div>
                        <div className="fs-5 font  fw-normal px-5 vtext" style={{ textAlign: "justify",lineHeight:"37px" }}>To transform the budding engineers into academically excellent, highly intellectual and self disciplined engineering graduates to mould them as good citizens with the spirit of integrity and morality that would cater to the needs of our nation.</div>
                        <div className="fs-5 font fw-normal px-5 vtext" style={{textAlign:"justify",lineHeight:"37px"}}>To instill in students a passion for innovation, a commitment to excellence, and a sense of social responsibility, nurturing them into competent professionals who lead with vision and integrity.</div>

                    </div>
                </div>
                
                </div>
                <div className="container-fluid" style={{ height: "90vh" }} ref={container3}>
                    <div className="row h-100">
                        <div className="col-md-6 d-flex flex-column row-gap-4 h-100 justify-content-center">
                        <div className="display-1 capsfont fw-semibold ps-5 mhead">OUR MISSION</div>
                        <div className="fs-5 font fw-normal px-5 mtext" style={{ textAlign: "justify",lineHeight:"37px" }}>To transform aspiring engineers into well-rounded individuals by imparting not only strong technical education but also fostering critical thinking, creativity, and ethical responsibility</div>

                        <div className="fs-5 font fw-normal px-5 mtext" style={{ textAlign: "justify",lineHeight:"37px" }}>To nurture a generation of future-ready professionals equipped with advanced knowledge, problem-solving capabilities, and leadership qualities, while instilling in them a deep respect for social and environmental responsibility, so they can contribute meaningfully to national progress and global innovation.</div>
                    </div>
                    <div className="col-md-6">
                        
                    </div>
                </div>
                
                </div>
                <div className="container-fluid" style={{ height: "45vh" }} ref={container4}>
                    <div className="display-1 capsfont fw-semibold text-center chead ">OUR CAMPUS</div>
                    <div className="fs-5 font fw-normal text-center px-5 ctext">This sprawling campus provides a holistic education in an ambience that makes no compromise on discipline, dedication and commitment. It strives to inculcate the spirit of learning in the campus offering state of art facilities to the students. The college ensures that the students who pass out of the college, turn out to be academically brilliant, morally upright and empowered individuals.</div>
                    <div className="row h-100 mt-5">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 px-5">
                            <div className="row justify-content-between row-gap-5">
                                <div className="col-md-5 box p-4 text-center text-light rounded rounded-3 cbox">
                                    <div className="fs-4 font fw-bold">10+</div>
                                    <div className="fs-5 font fw-normal">Departments</div>
                                </div>
                                <div className="col-md-5 box p-4 text-center text-light rounded rounded-3 cbox">
                                    <div className="fs-4 font fw-bold">11,000+</div>
                                    <div className="fs-5 font fw-normal">Students</div>
                                </div>
                                <div className="col-md-5 box p-4 text-center text-light rounded rounded-3 cbox">
                                    <div className="fs-4 font fw-bold">1,000+</div>
                                    <div className="fs-5 font fw-normal">Employees</div>
                                </div>
                                <div className="col-md-5 box p-4 text-center text-light rounded rounded-3 cbox">
                                    <div className="fs-4 font fw-bold">1,500+</div>
                                    <div className="fs-5 font fw-normal">Rank Holders</div>
                                </div>
                                <div className="col-md-5 box p-4 text-center text-light rounded rounded-3 cbox">
                                    <div className="fs-4 font fw-bold">1,200+</div>
                                    <div className="fs-5 font fw-normal">Faculty</div>
                                </div>
                                <div className="col-md-5 box p-4 text-center text-light rounded rounded-3 cbox">
                                    <div className="fs-4 font fw-bold">300+</div>
                                    <div className="fs-5 font fw-normal">Hiring Companies</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                </div>
                
                </div>
            </div>
      
            </>
  )
}

export default AboutHero