import React from 'react'
import '../index.css'
import { BsPatchCheckFill } from 'react-icons/bs' 
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const Experience = () => {

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
    <section ref={ref} id='experience' className='pt-20 text-white'>
      <div className='text-center text-white text-opacity-80 flex flex-col gap-1'>
        <h5 className='text-center text-xs text-white text-opacity-80'>What Skills I have</h5>
        <h2 className='text-center text-xl text-primary-color'>My Experience</h2>
      </div>

      {/* Experience container to house the front-end and data analysis skills */}
      <motion.div animate={animation} className='grid grid-cols-1 place-items-center md:grid-cols-2 gap-10 mx-5 md:mx-10 mt-5'>
        {/* Frontend */}
        <div className='border border-secondary-color bg-secondary-color p-8 md:px-20 rounded-2xl hover:bg-transparent transition-all experience-container'>
          <h3 className='text-center mb-8 text-primary-color text-xl'>Frontend Development</h3>
          <div className='grid grid-cols-2  gap-y-8'>
            <article className='flex gap-2 md:gap-0 md:justify-between md:w-1/2'> {/* Article reps each Item */}
              <BsPatchCheckFill className='mt-1 text-primary-color' />
              <div>
                <h4>HTML</h4>
                <small className='text-white text-opacity-80'>Experienced</small>
              </div>
            </article>

            <article className='flex gap-2 md:gap-0 md:justify-between md:w-1/2'> {/* Article reps each Item */}
              <BsPatchCheckFill className='mt-1 text-primary-color' />
              <div>
                <h4>CSS</h4>
                <small className='text-white text-opacity-80'>Intermediate</small>
              </div>
            </article>

            <article className='flex gap-2 md:gap-0 md:justify-between md:w-1/2'> {/* Article reps each Item */}
              <BsPatchCheckFill className='mt-1 text-primary-color' />
              <div>
                <h4>Javascript</h4>
                <small className='text-white text-opacity-80'>Intermediate</small>
              </div>
            </article>

            <article className='flex gap-2 md:gap-0 md:justify-between md:w-1/2'> {/* Article reps each Item */}
              <BsPatchCheckFill className='mt-1 text-primary-color' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-white text-opacity-80'>Experienced</small>
              </div>
            </article>

            <article className='flex gap-2 md:gap-0 md:justify-between md:w-1/2'> {/* Article reps each Item */}
              <BsPatchCheckFill className='mt-1 text-primary-color' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-white text-opacity-80'>Experienced</small>
              </div>
            </article>

            <article className='flex gap-2 md:gap-0 md:justify-between md:w-1/2'> {/* Article reps each Item */}
              <BsPatchCheckFill className='mt-1 text-primary-color' />
              <div>
                <h4>React</h4>
                <small className='text-white text-opacity-80'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* Data Analysis */}
        <div className='border border-secondary-color bg-secondary-color p-8 md:px-20 rounded-2xl hover:bg-transparent transition-all experience-container'>
          <h3 className='text-center mb-8 text-primary-color text-xl'>Data Analysis</h3>
          <div className='grid grid-cols-2  gap-y-8'>
            <article className='flex gap-2 md:gap-0 md:justify-between md:w-1/2'> {/* Article reps each Item */}
              <BsPatchCheckFill className='mt-1 text-primary-color' />
              <div>
                <h4>Excel</h4>
                <small className='text-white text-opacity-80'>Experienced</small>
              </div>
            </article>

            <article className='flex gap-2 md:gap-0 md:justify-between md:w-1/2'> {/* Article reps each Item */}
              <BsPatchCheckFill className='mt-1 text-primary-color' />
              <div>
                <h4>PowerBI</h4>
                <small className='text-white text-opacity-80'>Experienced</small>
              </div>
            </article>

            <article className='flex gap-2 md:gap-0 md:justify-between md:w-1/2'> {/* Article reps each Item */}
              <BsPatchCheckFill className='mt-1 text-primary-color' />
              <div>
                <h4>Python</h4>
                <small className='text-white text-opacity-80'>Intermediate</small>
              </div>
            </article>

            <article className='flex gap-2 md:gap-0 md:justify-between md:w-1/2'> {/* Article reps each Item */}
              <BsPatchCheckFill className='mt-1 text-primary-color' />
              <div>
                <h4>MySQL</h4>
                <small className='text-white text-opacity-80'>Intermediate</small>
              </div>
            </article>

            <article className='flex gap-2 md:gap-0 md:justify-between md:w-1/2'> {/* Article reps each Item */}
              <BsPatchCheckFill className='mt-1 text-primary-color' />
              <div>
                <h4>R</h4>
                <small className='text-white text-opacity-80'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>
      </motion.div>
      
    </section >
  )
}

export default Experience
