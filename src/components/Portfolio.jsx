import React from 'react'
import portfolioData from '../portfolioData.json'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import PortfolioComponent from './PortfolioComponent';
import Typewriter from 'typewriter-effect'

const Portfolio = () => {

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
    <section ref={ref} className='text-white pt-20' id='portfolio'>
      <div className='text-center text-white text-opacity-80 flex flex-col gap-1'>
        <h5 className='text-center text-xs text-white text-opacity-80'>My Recent Work</h5>
        <h2 className='text-center text-xl text-primary-color'>Portfolio</h2>
      </div>

      <motion.div animate={animation} className='grid grid-cols-1 md:grid-cols-3 justify-center gap-5 mt-5 mx-5 md:mx-10'>
        { portfolioData.portfolio.map((portfolio) => (
          <PortfolioComponent
           image={portfolio.image}
           name={portfolio.name}
           description={portfolio.description}
           github={portfolio.github}
           liveLink={portfolio.liveLink}
          />
        ))}
      </motion.div>

    </section>
  )
}

export default Portfolio
