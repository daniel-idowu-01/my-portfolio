import React from 'react'
import { BsLinkedin, BsWhatsapp, BsGithub } from 'react-icons/bs'   

const Footer = () => {
  return (
    <section className='flex flex-col gap-10 bg-secondary-color text-white text-opacity-80 p-10 pb-40'>
      <h3 className='text-4xl text-center font-semibold cormorant'>Idowu Daniel</h3>
      <article className='flex flex-col md:flex-row justify-center items-center gap-7 md:gap-14'>
        <a href='#'
         className=' text-white text-opacity-80 hover:scale-110'>Home</a>
        <a href='#about'
         className='text-white text-opacity-80 hover:scale-110'>About</a>
        <a href='#experience'
         className='text-white text-opacity-80 hover:scale-110'>Experience</a>
        <a href='#services'
         className='text-white text-opacity-80 hover:scale-110'>Services</a>
        <a href='#portfolio'
         className='text-white text-opacity-80 hover:scale-110'>Portfolio</a>
        <a href='#testimonials'
         className='text-white text-opacity-80 hover:scale-110'>Testimonials</a>
        <a href='#contact'
         className='text-white text-opacity-80 hover:scale-110'>Contact</a>
      </article>

      <article className='flex flex-row justify-center  gap-7 md:gap-14'>
        <a href='https://www.linkedin.com/in/daniel-idowu/' target='_blank'>
            <BsLinkedin
             className='hover:bg-opacity-80 hover:scale-110 text-5xl text-white p-2 bg-secondary-color rounded-md' />
        </a>
        <a href='https://wa.me/+2349028686300' target='_blank'>
            <BsWhatsapp
             className='hover:bg-opacity-80 hover:scale-110 text-5xl text-white p-2 bg-secondary-color rounded-md' />
        </a>
        <a href='https://github.com/daniel-idowu-01' target='_blank'>
            <BsGithub
             className='hover:bg-opacity-80 hover:scale-110 text-5xl text-white p-2 bg-secondary-color rounded-md' />
        </a>
      </article>

    </section>
  )
}

export default Footer
