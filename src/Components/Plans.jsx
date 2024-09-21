import React from 'react'
import single from '../Assests/single.png'
import double from '../Assests/double.png'
import triple from '../Assests/triple.png'

export default function Plans() {
  return (
    <div className='py-[100px]'>
      <div className='md:grid md:max-w-[1100px] mx-auto gap-8 grid-cols-3'>
        <div className='shadow-xl flex flex-col justify-center align-middle mb-6  hover:scale-105 text-center duration-500 gap-8 py-4'>
            <img className='w-12 ms-[150px]' src={single} alt="" />
            <h1 className='font-bold text-2xl'>Web development</h1>
            <h1 className='font-bold text-xl'>$149</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />  quos explicabo quisquam odio blanditiis unde! Perspiciatis omnis iure vitae?    </p>
            <button className='bg-[#00df9a] hover:bg-[#2699FB] ms-[100px] text-black py-2 px-4 rounded mt-8 w-[40%]'>Get Started</button>

        </div>
        <div className='shadow-xl bg-gray-100 hover:scale-105 mb-6 duration-500 text-center py-4'>
        <img className='w-12 ms-[150px] mb-6' src={double} alt="" />
            <h1 className='font-bold text-2xl mb-6'>Digital Marketing</h1>
            <h1 className='font-bold text-xl mb-9'>$149</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />  quos explicabo quisquam odio blanditiis unde! Perspiciatis omnis iure vitae?    </p>
            <button className='bg-[#00df9a] hover:bg-[#2699FB]  text-black py-2 px-4 rounded mt-8 w-[40%]'>Get Started</button>
        </div>
        <div className='shadow-xl flex flex-col mb-6 align-middle  hover:scale-105 text-center py-5 duration-500 gap-8'>
            <img className='w-12 ms-[150px]' src={triple} alt="" />
            <h1 className='font-bold text-2xl'>App development</h1>
            <h1 className='font-bold text-xl'>$149</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />  quos explicabo quisquam odio blanditiis unde! Perspiciatis omnis iure vitae?    </p>
            <button className='bg-[#00df9a] hover:bg-[#2699FB] ms-[100px] text-black py-2 px-4 rounded mt-7 w-[40%]'>Get Started</button>

        </div>
      </div>
    </div>
  )
}
