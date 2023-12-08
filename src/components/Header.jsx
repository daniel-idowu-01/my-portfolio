import React from 'react'
import { useEffect } from 'react'
import '../index.css'
import Me from '../src-images/my-new-image.png'
import CV from '../Daniel\'s CV.pdf'
import { AiOutlineWhatsApp } from 'react-icons/ai' 
import { AiOutlineLinkedin } from 'react-icons/ai' 
import { AiOutlineGithub } from 'react-icons/ai'
import Typewriter from 'typewriter-effect'

const Header = () => {

  return (
    <header className='text-white text-opacity-80' id='home'>
      <div
        className='flex justify-center pt-10'>
        <div className='flex flex-col gap-3 text-center'>
          <p className='text-sm'>Hello I'm</p>
          <p className='text-4xl font-semibold cormorant'>
            <Typewriter
              onInit={(typewriter) => {
              typewriter
              .typeString('Idowu Daniel')
              .pauseFor(2000)
              .deleteAll()
              .typeString('Idowu Daniel')
              .pauseFor(2000)
              .start()
            }}>
          </Typewriter>
          </p>
          <p>Frontend Web Developer</p>
          <div className='flex justify-between gap-3 mt-3'>
            <a href='https://drive.google.com/file/d/1csumvt29cJ068uP1wNjd-E2bDDshWf3f/view?usp=drive_link'
             className='border border-primary-color p-3 px-4 rounded-md text-primary-color hover:border-white hover:text-opacity-80 hover:text-white hover:border-opacity-80'>Download CV</a>
            <a
             href='https://wa.me/+2349028686300'
             target='_blank'
             className='border border-primary-color p-3 px-4 rounded-md bg-primary-color hover:bg-transparent text-white hover:text-primary-color'>Let's Talk</a>
          </div>
        </div>
      </div>

      <div>
        <img src={ Me } alt='' className='mt-10 relative object-cover my-image ' /> 
      </div>
      <div className='flex flex-col gap-3 absolute left-2 md:left-1/4 -translate-y-40'>
        <a href='https://wa.me/+2349028686300' target='_blank'>
          <AiOutlineWhatsApp className='text-2xl text-primary-color hover:text-white' />
        </a>
        <a href='https://www.linkedin.com/in/daniel-idowu/' target='_blank'>
          <AiOutlineLinkedin className='text-2xl text-primary-color hover:text-white' /> 
        </a>
        <a href='https://github.com/daniel-idowu-01' target='_blank'>
          <AiOutlineGithub className='text-2xl text-primary-color hover:text-white' /> 
        </a>
        <span className='bg-primary-color w-0.5 h-10 relative left-1/2'></span>
      </div>
    </header>
  )
}

export default Header
