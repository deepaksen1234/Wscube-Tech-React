import React, { useState } from 'react'
import { IoMenuOutline,IoCloseOutline } from "react-icons/io5";


export default function Header() {

    const[toggle,setToggle]=useState(false);
  return (
    <div className='bg-[#2699fb] p-4'>
     <div className='max-w-[1200px] py-2 items-center flex justify-between mx-auto'>
        <div className='text-3xl font-bold'>Wscube Tech</div>
        {
            toggle?
<IoCloseOutline onClick={()=>setToggle(!toggle)}  className='text-white text-2xl md:hidden block'/> 
:
<IoMenuOutline onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block' />


        }
       
       
        <ul className=' hidden md:flex gap-8 text-white'>
            <li>
                Home
            </li>
            <li>
                Company
            </li>
            <li>
                Resources
            </li>
            <li>
                About
            </li>
            <li>
                Contact
            </li>
        </ul>
        {/* responsive menu */}
        <ul className={`duration-300 md:hidden w-full h-screen z-10 text-white fixed bg-black top-[84px] ${toggle ? 'left-0' : 'left-[-100%]'}`}>

            <li className='p-5'>
                Home
            </li>
            <li className='p-5'>
                Company
            </li>
            <li className='p-5'>
                Resources
            </li>
            <li className='p-5'>
                About
            </li>
            <li className='p-5'>
                Contact
            </li>
        </ul>
     </div>
    </div>
  )
}
