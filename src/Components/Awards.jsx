import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';


gsap.registerPlugin(useGSAP, ScrollTrigger);


import achieve1 from '../../public/Images/achieve1.jpg';
import achieve2 from '../../public/Images/achieve2.png';
import achieve3 from '../../public/Images/achieve4.png';
import achieve4 from '../../public/Images/achieve6.jpeg';
import achieve5 from '../../public/Images/achieve7.png';
import achieve6 from '../../public/Images/achieve8.png';
import achieve7 from '../../public/Images/achieve9.png';
import achieve8 from '../../public/Images/achieve10.jpeg';
import achieve9 from '../../public/Images/achieve11.png';


const achievements = [
  {
    img: achieve1,
    text: "Final Year IT Have Won The First place And The Cash Prize Of Rs.75000 In The Smart India Hackathon-2019."
  },
  {
    img: achieve2,
    text: "Honoured by NASSCOM for achieving the highest number of certifications in Tamil Nadu during Nov-Dec 2023"
  },
  {
    img: achieve3,
    text: "Students & Faculty won cash prizes for the consecutive years 2018, 2019, 2020, 2021, 2022 and 2023 organized by AICTE."
  },
  {
    img: achieve4,
    text: "Ms. Pavithra, 1st Year AIML Department, For Her Incredible Performance On Super Singer At Vijay TV"
  },
  {
    img: achieve5,
    text: "National Level All India Inter-university Tournaments University Of Jammu 3rd Prize(Bronze) Rithvik Raja P R"
  },
  {
    img: achieve6,
    text: "Super Singer Grand Finale Runner Sa Re Ga Ma Pa- The Next Singing Youth Icon Rajeswar Prasad K 4/9/2024"
  },
  {
    img: achieve7,
    text: "National Level Gptathon, Coimbatore Institute Of Technology 3rd Prize Dhinesh R, Dhanush V, Prathish R"
  },
  {
    img: achieve8,
    text: "Mr Praveen K, Department Of Information Technology (IT) Has Secured 3rd Rank In Semester 2"
  },
  {
    img: achieve9,
    text: "Our Students Mr.Pradeep M, Mr.Lirith Vikraman N Has Won Consolation Prizes In Ideathon"
  }
];

const Awards = () => {
  const container = useRef();
    useGSAP(() => {
        var tl5 = gsap.timeline({ scrollTrigger: { trigger: container.current, start: '30% 100%', end: "70% 100%", scrub: 2, } })
        tl5.from('.awardt', {
            scale: 0,
            autoAlpha:0
        }).from('.swiper-2', {
            scale: 0,
            autoAlpha:0
        })
    },{scope:container})
  return (
    <div className="container mt-5" style={{ minHeight: "80vh" }} ref={container}>
      <div className="row">
        <div className="col-md-12 fs-1 fw-bold text-center awardt">Awards And Achievements</div>
        <div className="col-md-12">
          <Swiper
            effect="coverflow"
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            speed={1000}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 0,
              stretch: -70,
              depth: 280,
              modifier: 1,
              slideShadows: true
            }}
            breakpoints={{
    0: {
      slidesPerView: 1, 
    },
    768: {
      slidesPerView: 2, 
    },
    992: {
      slidesPerView: 3, 
    },
  }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper swiper-2  py-5"
          >
            {achievements.map((item, index) => (
              <SwiperSlide key={index} className="slider-2 border card rounded-4 border-2">
                <img
                  src={item.img}
                  alt={`achievement-${index + 1}`}
                  className="card-img rounded-4 rounded-bottom-0"
                  style={{ height: "350px" }}
                />
                <div className="fs-5 font p-3 py-4">{item.text}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Awards;
