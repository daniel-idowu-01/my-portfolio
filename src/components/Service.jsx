import React from 'react'
import '../index.css'
import { BiCheck } from 'react-icons/bi'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const Service = () => {

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
    <section ref={ref} id='services' className='pt-20 text-white'>
      <div className='text-center text-white text-opacity-80 flex flex-col gap-1'>
        <h5 className='text-center text-xs text-white text-opacity-80'>What I Offer</h5>
        <h2 className='text-center text-xl text-primary-color'>Services</h2>
      </div>

      {/* Container div to house my services */}
      <motion.div animate={animation} className='grid grid-cols-1 md:grid-cols-3 gap-3 mx-5 md:mx-10 mt-5'>

      {/* Web Development */}
        <article>
          <div className='bg-primary-color rounded-bottom  '>
            <div>
              <h3 className='bg-secondary-color p-7 w-full text-center rounded-bottom text-lg'>Web Development</h3>
            </div>

            <ul className='bg-primary-color flex flex-col gap-5 p-10 rounded-bottom'>
              <li className='flex gap-2'>
                <BiCheck className='mt-1 text-secondary-color' />
                <p>Mobile Optimization and Responsiveness</p>
              </li>
              <li className='flex gap-2'>
                <BiCheck className='mt-1 text-secondary-color' />
                <p>API Integration and Fetching Data</p>
              </li>
              <li className='flex gap-2'>
                <BiCheck className='mt-1 text-secondary-color' />
                <p>Component-Based Architecture</p>
              </li>
              <li className='flex gap-2'>
                <BiCheck className='mt-1 text-secondary-color' />
                <p>Website Speed Optimization</p>
              </li>
              <li className='flex gap-2'>
                <BiCheck className='mt-1 text-secondary-color' />
                <p>State Management</p>
              </li>
              
            </ul>
          </div>
          
        </article>

        {/* Data Analysis */}

        <article>
          <div className='bg-primary-color rounded-bottom'>
            <div>
              <h3 className='bg-secondary-color p-7 w-full text-center rounded-bottom text-lg'>Data Analysis</h3>
            </div>

            <ul className='bg-primary-color flex flex-col gap-5 p-10 rounded-bottom'>
              <li className='flex gap-2'>
                <BiCheck className='mt-1 text-secondary-color' />
                <p>Data Cleaning and Preprocessing</p>
              </li>
              <li className='flex gap-2'>
                <BiCheck className='mt-1 text-secondary-color' />
                <p>Visualizing data through charts, graphs, and plots</p>
              </li>
              <li className='flex gap-2'>
                <BiCheck className='mt-1 text-secondary-color' />
                <p>Building predictive models for regression and classification tasks</p>
              </li>
              <li className='flex gap-2'>
                <BiCheck className='mt-1 text-secondary-color' />
                <p>Designing interactive and informative data dashboards</p>
              </li>
              <li className='flex gap-2'>
                <BiCheck className='mt-1 text-secondary-color' />
                <p>Identifying patterns, trends, and relationships in the data</p>
              </li>    
            </ul>
          </div>
          
        </article>

        {/* Xtra skill */}

        <article>
          <div className='bg-primary-color rounded-bottom'>
            <div>
              <h3 className='bg-secondary-color p-7 w-full text-center rounded-bottom text-lg'>Graphic Design</h3>
            </div>

            <ul className='bg-primary-color flex flex-col gap-5 p-10 rounded-bottom'>
              <li className='flex gap-2'>
                <BiCheck className='mt-1 text-secondary-color' />
                <p>Infographics and data visualization</p>
              </li>
              <li className='flex gap-2'>
                <BiCheck className='mt-1 text-secondary-color' />
                <p>Website and landing page design</p>
              </li>
              <li className='flex gap-2'>
                <BiCheck className='mt-1 text-secondary-color' />
                <p>Digital illustrations and icons</p>
              </li>
              <li className='flex gap-2'>
                <BiCheck className='mt-1 text-secondary-color' />
                <p>Email newsletter templates</p>
              </li>
              <li className='flex gap-2'>
                <BiCheck className='mt-1 text-secondary-color' />
                <p>Brochure and flyer design</p>
              </li>
            </ul>
          </div>
          
        </article>

      </motion.div>
    </section>
  )
}

export default Service
