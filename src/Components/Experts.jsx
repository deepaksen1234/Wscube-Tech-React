import React from 'react'
import laptop from '../Assests/laptop.jpg'

export default function Experts() {
  return (
    <div className='max-w-[1100px] p-2 mx-auto md:grid grid-cols-2 mt-10'>
     <div className='col-span-1 md:w-[80%] mb-8'>
        <img src={laptop} alt="" />
     </div>
     <div className=' col-span-1 flex flex-col justify-center'>
        <h1 className='text-[#00df9a] font-bold mb-5'>LEARN FROM EXPERTS</h1>
        <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quaerat minima aliquam rerum distinctio aspernatur recusandae ut ratione? Dolor dolorem quam enim et tempora non veritatis nesciunt qui debitis consequatur!</p>
        <button className='w-[30%] text-white bg-black py-2 px-4 rounded'>Get Started</button>
     </div>
     
    </div>
  )
}
