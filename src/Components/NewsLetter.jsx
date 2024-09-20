import React from 'react'

export default function NewsLetter() {
  return (
    <div className='w-full bg-[#2699fb] p-4'>
        <div className=' max-w-[1100px] mx-auto md:flex justify-between py-[50px]'>
            <div className='m-3'>
                <h1 className='text-[25px] md:text-[40px] font-bold text-white'>Wants to learn latest I.T skills?</h1>
                <span className='text-white'>Sign up to your newslettre and stay up to date.</span>
            </div>
            <div className='m-3 '>
                <input type="text" className='py-2 px-3 mb-6 text-slate-300 rounded'placeholder='Email'/>
                <button className='bg-black text-white py-2 px-3 rounded mt-8'>Get Started</button>
                <br />
                <span className='text-white'>We care about the protection of your data. Read your <br /> <a href="" className='text-black'>privacy policy.</a></span>
            </div>
        </div>
      
    </div>
  )
}
