import React from 'react'
import '../index.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {

  return (
    <section id='experience' className='pt-20 text-white'>
      <div className='text-center text-white text-opacity-80 flex flex-col gap-1'>
        <h5 className='text-center text-xs text-white text-opacity-80'>What Skills I have</h5>
        <h2 className='text-center text-xl text-primary-color'>My Experience</h2>
      </div>

      {/* Experience container to house the front-end and data analysis skills */}
      <div className='flex gap-3 sm:justify-around flex-col sm:flex-row mt-10 mx-5 md:mx-10'>
        {/* Frontend */}
        <div className='border border-secondary-color bg-secondary-color p-8 md:px-20 rounded-2xl hover:bg-transparent transition-all experience-container sm:w-[40%]'>
          <h3 className='text-center mb-8 text-primary-color text-xl'>Frontend Development</h3>
          <div className='grid grid-cols-2 gap-y-8'>
            <article className='flex gap-2 md:gap-0 md:justify-between md:w-1/2'> {/* Article reps each Item */}
              <BsPatchCheckFill className='mt-1 text-primary-color' />
              <div className=''>
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

        {/* Backend Development */}
        <div className='border border-secondary-color bg-secondary-color p-8 md:px-20 rounded-2xl hover:bg-transparent transition-all experience-container sm:w-[40%]'>
          <h3 className='text-center mb-8 text-primary-color text-xl'>Backend Development</h3>
          <div className='grid grid-cols-2  gap-y-8'>
            <article className='flex gap-2 md:gap-0 md:justify-between md:w-1/2'> {/* Article reps each Item */}
              <BsPatchCheckFill className='mt-1 text-primary-color' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-white text-opacity-80'>Experienced</small>
              </div>
            </article>

            <article className='flex gap-2 md:gap-0 md:justify-between md:w-1/2'> {/* Article reps each Item */}
              <BsPatchCheckFill className='mt-1 text-primary-color' />
              <div>
                <h4>Express</h4>
                <small className='text-white text-opacity-80'>Experienced</small>
              </div>
            </article>

            <article className='flex gap-2 md:gap-0 md:justify-between md:w-1/2'> {/* Article reps each Item */}
              <BsPatchCheckFill className='mt-1 text-primary-color' />
              <div>
                <h4>NodeJS</h4>
                <small className='text-white text-opacity-80'>Intermediate</small>
              </div>
            </article>

            <article className='flex gap-2 md:gap-0 md:justify-between md:w-1/2'> {/* Article reps each Item */}
              <BsPatchCheckFill className='mt-1 text-primary-color' />
              <div>
                <h4>PHP</h4>
                <small className='text-white text-opacity-80'>Intermediate</small>
              </div>
            </article>

            <article className='flex gap-2 md:gap-0 md:justify-between md:w-1/2'> {/* Article reps each Item */}
              <BsPatchCheckFill className='mt-1 text-primary-color' />
              <div>
                <h4>Firebase</h4>
                <small className='text-white text-opacity-80'>Intermediate</small>
              </div>
            </article>

            <article className='flex gap-2 md:gap-0 md:justify-between md:w-1/2'> {/* Article reps each Item */}
              <BsPatchCheckFill className='mt-1 text-primary-color' />
              <div>
                <h4>Supabase</h4>
                <small className='text-white text-opacity-80'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>
      </div>
      
    </section >
  )
}

export default Experience
