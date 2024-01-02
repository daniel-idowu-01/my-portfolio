import React from 'react'
import '../index.css'
import testimonialData from '../testimonialData.json'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {

  return (
    <section className='text-white pt-20' id='testimonials'>
      <div className='text-center text-white text-opacity-80 flex flex-col gap-1'>
        <h5 className='text-center text-xs text-white text-opacity-80'>Review From Clients</h5>
        <h2 className='text-center text-xl text-primary-color'>Testimonials</h2>
      </div>

      <div className='flex justify-center mt-5 mx-5 md:mx-10'>
        <Swiper className='w-full md:w-2/6'
        // install Swiper modules
          modules={[ Pagination ]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >

          { testimonialData.people.map((testimonial) => {
            return (
              <SwiperSlide className='px-16 py-8 bg-secondary-color rounded-2rem mb-10'>
                <div className='w-16 overflow-hidden rounded-full mx-auto border-4 border-primary-color'>
                  <img src={testimonial.image} alt='' />
                </div>

                <div className='text-center'>
                  <h4 className='font-semibold'>{testimonial.name}</h4>
                  <p className=' font-light mx-auto'>{testimonial.comment}</p>
                </div>
              </SwiperSlide>
            )
          })
        }
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
