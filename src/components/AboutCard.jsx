import React from 'react'

const AboutCard = (props) => {
  return (
    <div className=' bg-secondary-color hover:bg-transparent border border-secondary-color p-9 rounded-md text-white text-center flex flex-col gap-3'>
      <div className='text-primary-color flex justify-center text-xl'>
        {props.icon}
      </div>
      <p className='text-lg'>
        {props.title}
      </p>
      <p className='text-white text-sm text-opacity-80'>
        {props.detail}
      </p>
    </div>
  )
}

export default AboutCard
