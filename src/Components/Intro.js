import React from 'react'
import logo from '../Images/GulmoharLogo.png'
import homeImage from '../Images/homeImage.jpg.png'

const Intro = () => {
  return (
    <div>
        <img className='absolute' src={homeImage} alt='background image' />
        <div className='bg-black relative bg-opacity-50 text-white'>
        <img className='w-28 h-28 relative' src={logo} alt='logo' />
            <div className='p-48 text-center'>
            <h4>WELCOME TO </h4>
            <h1 className='text-6xl p-10'>GULMOHAR TOWNSHIP</h1>
            <p className='text-balance'>Find your dream home with a trusted global advisor.</p>
            <button className='border-2 border-white px-8 py-4 m-8'>SEARCH ALL HOMES</button>
            </div>
        </div>
    </div>
  )
}

export default Intro