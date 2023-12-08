import React from 'react'
import ME from '../src-images/newImg.jpg'
import ME1 from '../src-images/me1.jpg'
import ME2 from '../src-images/me2.jpg'
import AboutCard from './AboutCard'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './About.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const About = () => {

  return (
    <section id='about' className='pt-20'>
      <div className='text-center text-white text-opacity-80 flex flex-col gap-1'>
        <h5 className='text-center text-xs text-white text-opacity-80'>Get To Know</h5>
        <h2 className='text-center text-xl text-primary-color'>About Me</h2>
      </div>

      <div
       className='md:flex justify-around items-stretch mt-10'>
        {/* About Image */}
         <div className='flex justify-center items-center'>
          <div className='w-72 md:w-80 rounded-3xl md:ml-20'>
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={ME} alt='' className='rounded-3xl overflow-hidden transition-all' />
              </SwiperSlide>

              <SwiperSlide>
                <img src={ME1} alt='' className='rounded-3xl overflow-hidden transition-all' />
              </SwiperSlide>

              <SwiperSlide>
                <img src={ME2} alt='' className='rounded-3xl overflow-hidden transition-all' />
              </SwiperSlide>

              <SwiperSlide>
                <img src={ME} alt='' className='rounded-3xl overflow-hidden transition-all' />
              </SwiperSlide>
            </Swiper>
              
            </div>
         </div>

        {/* About Content */}
         <div
          className='grid grid-flow-row gap-3 place-items-center md:place-items-stretch place-content-evenly mt-10 md:mt-0 md:w-1/2'
        >
          <div className='grid grid-cols-2 md:grid-cols-3 place-items-stretch gap-3 '>
            <AboutCard icon={ <FaAward /> } title='Experience' detail='2+ Years Working' />
            <AboutCard icon={ <FiUsers /> } title='Clients' detail='6+ Worldwide' />
            <AboutCard icon={ <VscFolderLibrary /> } title='Projects' detail='8+ Completed' />
          </div>
          
          <p className='w-[80%] md:w-full text-white text-justify'>  
            Frontend developer with 2+ years of experience building and maintaining scalable web applications. Proven ability to work on all aspects of the development process, from back-end to front-end. Expertise in Python, JavaScript, HTML, CSS, and SQL. Passionate about building innovative and user-friendly products.
          </p>

          <a
           href='https://wa.me/+2349028686300'
           target='_blank'
           className='block no-underline bg-primary-color text-white w-fit p-3 px-4 rounded-md hover:bg-transparent border border-primary-color hover:text-primary-color'>Let's Talk</a>
          
         </div>
      </div>
    </section>
  )
}

export default About
