import React from 'react'
import dark from './images/image-about-dark.jpg';
import light from './images/image-about-light.jpg';
function Footer() {
  return (
    <div className='flex  flex-col gap-4 md:gap-2 md:flex-row '>
      <img src={dark} alt="" className='w-full' />
      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 className=' font-bold text-2xl tracking-widest uppercase text-VeryDarkGray'>about our furniture</h1>
        <p className=' p-2 md:p-4  text-DarkGray text-center'>Our multifunctional collection blends design and function to 
            suit your individual taste. Make each room unique, or 
            pick a cohesive theme that best express your interests 
            and what inspires you. Find the furniture pieces you need, 
            from traditional to contemporary styles or anything in between. 
            Product specialists are available to help you create your dream space.</p>
      </div>
      <img src={light} alt=""  className='w-full'/>
    </div>
  )
}

export default Footer