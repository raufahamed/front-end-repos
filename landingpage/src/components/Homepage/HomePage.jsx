import React, { useState } from 'react'
import arrow from './images/icon-arrow.svg'
import iconright from './images/icon-angle-right.svg'
import iconleft from './images/icon-angle-left.svg'
const Data = [
  {
    id: 1,
    title: "Discover innovative ways to decorate",
    desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    mobile: './images/mobile-image-hero-1.jpg',
    desktop: './images/desktop-image-hero-1.jpg'
  },
  {
    id: 2,
    title: "We are available all across the globe",
    desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    mobile: './images/mobile-image-hero-2.jpg',
    desktop: './images/desktop-image-hero-2.jpg'
  },
  {
    id: 3,
    title: "Manufactured with the best materials",
    desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    mobile: './images/mobile-image-hero-3.jpg',
    desktop: './images/desktop-image-hero-3.jpg'
  }
]

function HomePage() {
  
  const [items] = useState(Data);
  const [slide,setSlide] = useState(1);

  function nextSlide() {
    if (slide !== items.length) {
      setSlide(slide + 1)
    } else if (slide === items.length) {
      setSlide(1)
    }
  }
  function prevSlide(){

    if (slide !== 1) {
      setSlide(slide - 1)
    } else if (slide === 1) {
      setSlide(items.length)
    }
  }
 
  return (
    <div>
    {items.map((item,idx)=>(
      <div className={slide === idx + 1 ? "flex  flex-col md:flex-row gap-6":"hidden" } key={item.id}>
     <div className='w-full relative'>
     <picture className='w-full '>
                <source media="(min-width: 768px)" srcSet={item.desktop} />
                <img src={item.mobile} alt='' className="w-full" />
        </picture>
        <div className=' absolute bottom-0 right-0 '>
              <button onClick={prevSlide} className='bg-black hover:bg-DarkGray p-6'> <img src={iconleft} alt="" /></button>      
              <button onClick={nextSlide} className='bg-black hover:bg-DarkGray p-6'> <img src={iconright} alt="" /></button>      
        </div>
     </div>
      <div className='flex flex-col justify-center gap-4 items-center '>
          <h1 className='text-2xl md:text-4xl font-bold text-VeryDarkGray'>
          {item.title}</h1>
          <p className="text-DarkGray p-4 md:p-1 md:w-1/2  text-start">
                      {item.desc} </p>
  <p className=' cursor-pointer tracking-3 flex gap-1 items-center'>SHOP NOW <span><img src={arrow} alt="" /></span></p>
        </div>
    </div> 
      
    ))}
      
  </div>
  )
}

export default HomePage