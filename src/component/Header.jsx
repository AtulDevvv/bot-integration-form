import React from 'react'
import image from '../assets/chat.png'

import Button from './Button'
import { UseContext } from '../context/ContextApi'
function Header() {
  const {isLoggedIn}=UseContext();
  return (
    <div className='fixed z-10 top-0 left-0  w-full   border-b border-n-6 bg-[#0E0C15]/95 backdrop-blur-sm'>
      <div className="flex p-5 items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] mr-8" href="#hero">
          <img className='w-10' src={image} width={190} height={40} alt="BeyondChats" />
        </a>

    { !isLoggedIn?<Button text={'Login'}/>:<Button  text={'Logout'}/>}

         </div>
        

    </div>
  )
}

export default Header