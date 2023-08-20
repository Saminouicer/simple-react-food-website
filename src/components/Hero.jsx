import React from 'react'

const Hero = () => {
  return (
    <div className=' m-4  relative'>
        <div className='absolute text-white bg-black/50 w-full h-full flex flex-col  justify-center pl-8 text-2xl md:text-5xl lg:text-6xl font-bold'>
            <p>The <span className='text-orange-500'>Best</span></p>
            <p><span className='text-orange-500'>foods</span>Delivered</p>
        </div>
        <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    </div>
  )
}

export default Hero