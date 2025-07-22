import React from 'react'
import why1 from '../../public/Images/why1.png'
import why2 from '../../public/Images/why2.png'
import why3 from '../../public/Images/why3.png'
import why4 from '../../public/Images/why4.png'
import why5 from '../../public/Images/why5.png'
import alumini1 from '../../public/Images/alumini1.jpeg'
import alumini2 from '../../public/Images/alumini2.jpeg'
import alumini3 from '../../public/Images/alumini3.jpeg'
import alumini4 from '../../public/Images/alumini4.jpeg'
import alumini5 from '../../public/Images/alumini5.jpeg'
import alumini6 from '../../public/Images/alumini6.jpeg'
import alumini7 from '../../public/Images/alumini7.jpeg'

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';

gsap.registerPlugin(useGSAP,ScrollTrigger);

const Test = () => {
    const testi = [
  {
    image: alumini1,
    name: "Praveen K",
    Role: "Infosys, Software Developer",
    content: "Panimalar College gave me the confidence to face the real world. From expert-led sessions to hands-on projects, every experience here helped shape my professional foundation."
  },
  {
    image: alumini2,
    name: "Sandhana Krishnan H",
    Role: "TCS, Data Analyst",
    content: "The curriculum and culture at Panimalar pushed me to think critically and communicate effectively. It’s where I learned to lead, adapt, and grow."
  },
  {
    image: alumini3,
    name: "Natraj M",
    Role: "Cognizant, Project Manager",
    content: "From strong academic support to soft skills training, everything at Panimalar prepared me to succeed in a corporate environment."
  },
  {
    image: alumini4,
    name: "Nagul Vishnu E",
    Role: "Zoho Corp, UI/UX Designer",
    content: "Panimalar nurtured my creativity and discipline. The design thinking workshops and real-time projects shaped my journey into product design."
  },
  {
    image: alumini5,
    name: "Vignesh V",
    Role: "Wipro, DevOps Engineer",
    content: "Thanks to Panimalar’s practical teaching and internship opportunities, I stepped into the industry already equipped with confidence and skills."
  },
  {
    image: alumini6,
    name: "Prakash T",
    Role: "Amazon, Techincal Support",
    content: "Panimalar’s tech-driven campus, events, and faculty mentorship opened doors to opportunities I never imagined possible as a student."
  },
  {
    image: alumini7,
    name: "Natraj R",
    Role: "Zoho, Data Engineer",
    content: "Panimalar built my foundation in both engineering and leadership. The environment here constantly motivates students to aim higher."
  }
];

    const abouts = [
    { image: why1, title: "Happy Students", value: "11,000+" },
    { image: why2, title: "University Rank Holders", value: "1,000+" },
    { image: why3, title: "Eminent Faculties", value: "500+" },
    { image: why4, title: "Excellent Placement", value: "90%" },
    { image: why5, title: "Successful Alumni", value: "16,000+" },
  ];
    const container = useRef();
    useGSAP(() => {
        var tl3 = gsap.timeline({ scrollTrigger: { trigger: container.current, start: '10% 100%', end: '100% 100%', scrub: 2 } })
        tl3.from('.ttxt', {
            scale: 0,
            stagger:0.25
        })
        tl3.from('.bs', {
            x: -500,
            stagger: 0.25,
            autoAlpha:0
        })
      tl3.from('.testi', {
            scale: 0,
            stagger:0.25
        })
    },{scope:container})
  return (
      <div className=' container-fluid ' style={{minHeight:"100vh"}} ref={container}>
          <div className="row py-5 px-5">
              <div className="col-12 font text-center text-black fs-1 fw-bold ttxt">Welcome to Panimalar Engineering College</div>
              <div className="col-12 font text-center text-black fs-5 px-5 ttxt">A premier and reputed institution since 2000, located in Chennai, India, dedicated to excellence in engineering education. Offering a broad spectrum of UG, PG, and Research Programs in various engineering and technology disciplines.</div>
          </div>
          <div className="container d-flex justify-content-center flex-wrap column-gap-5 row-gap-4">
              {abouts.map((val, index) => (
                  <div className="col-md-3  text-light py-3 d-flex p-2  column-gap-2 rounded-4 bs" key={index}>
                  <img src={val.image} className='img img-fluid w-25'></img>
                  <div  className='text-center'>
                          <div className=" font fw-bolder fs-5 text-center">{ val.title}</div>
                          <div className="font fs-5">{ val.value}</div>
                  </div>
              </div>
              ))}
          </div>
          <div className="row mt-5">
              <div className="fs-1  col-md-12 text-center font fw-bolder testi">Alumni Testimonial</div>
              <Swiper
          effect={'coverflow'}
          autoplay={{ delay : 1000 }}
          speed={3000}

                 grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={3}
                 coverflowEffect={{
                     rotate: 60,
                     stretch: 0,
                     depth: 100,
                     modifier: 1,
                   slideShadows: true,
          }}
          loop={true}
                pagination={true}
                modules={[EffectCoverflow, Pagination,Autoplay]}
                className="mySwiper mt-4 testi swiper-1"
              >
                  {testi.map((item, index) => (
                      <SwiperSlide className='border d-flex flex-column justify-content-center p-5 row-gap-4 rounded-4 border-2 slider-1' key={index}>
                      <div className=' d-flex column-gap-4'>
                          <img src={item.image} className='img img-fluid rounded-4 w-25'></img>
                          <div>
                                  <div className="fs-5 font text-primary mt-2">{ item.name}</div>
                                  <div className="fs-5 font text-primary mt-2">{ item.Role}</div>
                          </div>
                      </div>
                          <div className="font">{ item.content}</div>
                  </SwiperSlide>
                  ))}
            </Swiper>
          </div>
      </div>
  )
}

export default Test