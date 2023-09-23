import React from 'react'
import { useEffect } from 'react'
import '../index.css'
import Me from '../src-images/my-new-image.png'
import CV from '../Daniel\'s CV.pdf'
import { AiOutlineWhatsApp } from 'react-icons/ai' 
import { AiOutlineLinkedin } from 'react-icons/ai' 
import { AiOutlineGithub } from 'react-icons/ai' 
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import Typewriter from 'typewriter-effect'

const Header = () => {

  const {ref, inView} = useInView();
  const animation = useAnimation();

  useEffect(() => {
    /* animation when in view */
    if(inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'string', duration: 0.5, bounce: 0.3
        }
      })
    }

    /* animation when not in view */
    if(!inView) {
      animation.start({
        x: '-100vw'
      })
    }

  }, [inView])

  return (
    <header ref={ref} className='text-white text-opacity-80' id='home'>
      <motion.div
        animate={animation} 
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
          <p>Web Developer And Data Analyst</p>
          <div className='flex justify-between mt-3'>
            <a href={CV}
              download
             className='border border-primary-color p-3 rounded-lg text-primary-color hover:border-white hover:text-opacity-80 hover:text-white hover:border-opacity-80'>Download CV</a>
            <a
             href='https://wa.me/+2349028686300'
             target='_blank'
             className='border border-primary-color p-3 rounded-lg bg-primary-color hover:bg-transparent text-white hover:text-primary-color'>Let's Talk</a>
          </div>
        </div>
      </motion.div>

      <motion.div
      animate={animation}>
        <img src={ Me } alt='' className='mt-10 relative object-cover my-image ' /> 
      </motion.div>
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
