import React from 'react'
import ME from '../src-images/newImg.jpg'
import AboutCard from './AboutCard'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const About = () => {

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
    <section ref={ref} id='about' className='pt-20'>
      <div className='text-center text-white text-opacity-80 flex flex-col gap-1'>
        <h5 className='text-center text-xs text-white text-opacity-80'>Get To Know</h5>
        <h2 className='text-center text-xl text-primary-color'>About Me</h2>
      </div>

      <motion.div
       animate={animation}
       className='md:flex justify-around items-stretch mt-10'>
        {/* About Image */}
         <div className='flex justify-center items-center'>
            <div className='imggg w-72 md:w-80 rounded-3xl md:ml-20'>
              <img src={ ME} alt='' className='rounded-3xl rotate-12 hover:rotate-0 overflow-hidden transition-all' />
            </div>
         </div>

        {/* About Content */}
         <div
          className='grid grid-flow-row gap-3 place-items-center md:place-items-stretch place-content-evenly mt-10 md:mt-0 md:w-1/2'>
          <div className='grid grid-cols-2 md:grid-cols-3 place-items-stretch gap-3 '>
            <AboutCard icon={ <FaAward /> } title='Experience' detail='1+ Years Working' />
            <AboutCard icon={ <FiUsers /> } title='Clients' detail='6+ Worldwide' />
            <AboutCard icon={ <VscFolderLibrary /> } title='Projects' detail='8+ Completed' />
          </div>
          

          <p className='w-80 md:w-full text-white text-justify'>
            I offer a distinctive fusion of creativity and analytical thought to every project I take on as a successful and determined individual. I succeed in providing creative solutions that go above and beyond expectations because I have a passion for problem-solving and a great eye for detail. I work well within teams, establishing a happy and productive environment because to my great communication abilities and collaborative personality. You can see examples of my knowledge, devotion to quality, and dedication in my portfolio.
          </p>

          <a
           href='https://wa.me/+2349028686300'
           target='_blank'
           className='block no-underline bg-primary-color text-white w-fit p-3 rounded-md hover:bg-transparent border border-primary-color hover:text-primary-color'>Let's Talk</a>
          
         </div>
      </motion.div>
    </section>
  )
}

export default About
