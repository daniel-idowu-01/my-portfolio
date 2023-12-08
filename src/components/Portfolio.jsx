import React from 'react'
import portfolioData from '../portfolioData.json'
import PortfolioComponent from './PortfolioComponent';

const Portfolio = () => {

  return (
    <section className='text-white pt-20' id='portfolio'>
      <div className='text-center text-white text-opacity-80 flex flex-col gap-1'>
        <h5 className='text-center text-xs text-white text-opacity-80'>My Recent Work</h5>
        <h2 className='text-center text-xl text-primary-color'>Portfolio</h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 justify-center gap-5 mt-5 mx-5 md:mx-10'>
        { portfolioData.portfolio.map((portfolio, index) => (
          <PortfolioComponent
            key={index}
            image={portfolio.image}
            name={portfolio.name}
            description={portfolio.description}
            github={portfolio.github}
            liveLink={portfolio.liveLink}
          />
        ))}
      </div>

    </section>
  )
}

export default Portfolio
