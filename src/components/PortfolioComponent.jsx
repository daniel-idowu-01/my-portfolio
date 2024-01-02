import React from 'react'

const PortfolioComponent = ({ image, name, github, liveLink, description}) => {

  const githubStyle = 'text-slate-gray inline-block p-2 px-5 border border-secondary-color bg-secondary-color hover:scale-105'
  const liveLinkStyle = 'text-white text-opacity-80 inline-block p-2 px-5 border bg-transparent hover:scale-105 ml-2'

  return (
    <article>
      {/* Div for portfolio image */}
      <div>
        <img src={image} alt='' />
      </div>
      <div className='flex flex-col gap-3 bg-primary-color p-3 rounded-br-2xl rounded-bl-2xl flex-1'>
        <h3 className='text-secondary-color text-xl underline mb-2 font-semibold'>{name}</h3>
        <p>{description}</p>
        <div className='flex gap-3'>
          <a rel="noopener noreferrer" href={github} target='_blank'
            className={githubStyle}>Github</a>
          <a rel="noopener noreferrer" href={liveLink} target='_blank'
            className={liveLinkStyle}>Live Demo</a>
        </div>
        
      </div>
    </article>
  )
}

export default PortfolioComponent
