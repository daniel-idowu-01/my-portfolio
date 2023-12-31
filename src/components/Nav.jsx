import React from 'react'
import { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'


const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <div
     className='fixed text-white text-opacity-80 flex justify-center gap-4 px-5 mx-10 py-4 backdrop-blur-xl rounded-full w-fit nav z-10'>
      <a
       rel="noopener noreferrer" 
       onClick={() => setActiveNav('#home')}
       className={`${activeNav === '#home' ? 'active' : ''} p-2 text-2xl hover:bg-secondary-color rounded-full transition-all`} href='#home'>
         <AiOutlineHome /> 
      </a>
      <a 
       rel="noopener noreferrer"
       onClick={() => setActiveNav('#about')}
       className={`${activeNav === '#about' ? 'active' : ''} p-2 text-2xl hover:bg-secondary-color rounded-full transition-all`} href='#about'>
         <AiOutlineUser /> 
      </a>
      <a 
       rel="noopener noreferrer"
       onClick={() => setActiveNav('#experience')}
       className={`${activeNav === '#experience' ? 'active' : ''} p-2 text-2xl hover:bg-secondary-color rounded-full transition-all`} href='#experience'> <BiBook /> </a>
      <a 
       rel="noopener noreferrer"
       onClick={() => setActiveNav('#services')}
       className={`${activeNav === '#services' ? 'active' : ''} p-2 text-2xl hover:bg-secondary-color rounded-full transition-all`} href='#services'> <RiServiceLine /> </a>
      <a 
       rel="noopener noreferrer"
       onClick={() => setActiveNav('#contact')}
       className={`${activeNav === '#contact' ? 'active' : ''} p-2 text-2xl hover:bg-secondary-color rounded-full transition-all`} href='#contact'> <BiMessageSquareDetail /> </a>
    </div>
  )
}

export default Nav
