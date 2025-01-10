import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
      <h1 className='text-2xl text-yellow-400 font-bold'>BLOGGER</h1>
      <p className='text-white'>Copyright © 2024 Bayu Husada</p>
      
    
    </div>
  )
}

export default Footer