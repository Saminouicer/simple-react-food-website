import React, { useState } from 'react'
import {FaCarSide} from 'react-icons/fa'
import {FaBars} from 'react-icons/fa'
import {FaCartPlus} from 'react-icons/fa'
import {FaSearchengin} from 'react-icons/fa'
import {FaX} from 'react-icons/fa6'
import {FaStar} from 'react-icons/fa'
import {FaWallet} from 'react-icons/fa'
import {FaQuestionCircle} from 'react-icons/fa'
import {FaTag} from 'react-icons/fa'
import {FaArrowCircleDown} from 'react-icons/fa'
import {FaUserFriends} from 'react-icons/fa'

const Navbar = () => {

  const [bar,setbar]=useState(false)
  return (
    <div className='navbar flex justify-between p-4 items-center'>
      {/* sidebar */}
        <nav className={bar?'fixed left-0 top-0 w-[300px] h-screen z-20 bg-white duration-300':'fixed left-[-200%] top-0 w-[300px] h-screen z-20 bg-white duration:300'}>
          <FaX onClick={()=>setbar(!bar)} className='absolute right-4 top-4 cursor-pointer' size={20}/>
            <h1 className='m-4 text-2xl'>Best <span className='font-bold'>Eats</span></h1>
            <ul className=' text-gray-800 p-4'>
               <li className='flex items-center py-4'>
               <FaCarSide size={25}/>
               <span className='pl-4 text-xl '>Orders</span>
               </li>  
               <li className='flex items-center py-4'>
               <FaStar size={25}/>
               <span className='pl-4 text-xl'>Favorites</span>
               </li>  
               <li className='flex items-center py-4'>
               <FaWallet size={25}/>
               <span className='pl-4 text-xl'>Wallet</span>
               </li>  
               <li className='flex items-center py-4'>
               <FaQuestionCircle size={25}/>
               <span className='pl-4 text-xl'>Help</span>
               </li>      
               <li className='flex items-center py-4'>
               <FaTag size={25}/>
               <span className='pl-4 text-xl'>Promotions</span>
               </li>      
               <li className='flex items-center py-4'>
               <FaArrowCircleDown size={25}/>
               <span className='pl-4 text-xl'>Best Ones</span>
               </li>      
               <li className='flex items-center py-4'>
               <FaUserFriends size={25}/>
               <span className='pl-4 text-xl'>Invite Friends</span>
               </li>      
            </ul>
        </nav>
        {/* overlay */}
        {bar?<div className="overlay bg-black/80 fixed left-0 top-0 z-10 h-screen w-full duration-300"></div>:''}

        <div className='flex items-center'>
            <button onClick={()=>setbar(!bar)}><FaBars size={30}/></button>
            <h1 className='px-4 text-2xl md:text-3xl'>Best <span className='font-bold'>Eats</span></h1>
            <div className='hidden lg:flex  rounded-full bg-gray-200 p-1 text-[14px]'><span className='bg-black text-white p-2 rounded-full mr-2'>delivery</span><span className='p-2'>pickup</span></div>
        </div>

      <div className='flex items-center bg-gray-200 px-2 rounded-full w-[200px] md:w-[400px]'>
          <FaSearchengin size={20}/>
          <input type="text" placeholder='Search foods' className='w-full  bg-transparent  p-2 rounded-full focus:outline-none'/>
      </div>

        <button className='hidden md:flex items-center text-xl  bg-black text-white px-4 py-2 rounded-full'><FaCartPlus className='mr-4'/> cart</button>
    </div>
  )
}

export default Navbar;