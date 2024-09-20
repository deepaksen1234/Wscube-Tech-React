import React from 'react'
import { ReactTyped } from "react-typed";

export default function Banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[100px]'>
        <div className='max-w-[1200px] mx-auto text-center'>
            <div className='text-2xl md:text-4xl font-bold md:mt-8'>Learn with us</div>
            <h2 className='text-white font-bold md:mt-8 text-4xl md:text-[60px]'>Grow With Us</h2>
            <div className='font-bold text-2xl md:text-[40px] text-white md:mt-8'>Learn
            <ReactTyped className='ps-3' strings={[ "Web development","Digital Marketing","Ethical Hacking"]} typeSpeed={100}
            loop={true} backSpeed={50}/>
            </div>
            <button className='bg-black text-white py-2 px-4 rounded mt-8'>Get Started</button>
        </div>
      
    </div>
  )
}
