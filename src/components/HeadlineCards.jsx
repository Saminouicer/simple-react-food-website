import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='mx-4 py-11 grid md:grid-cols-3 gap-6 '>

    
           <div className='relative '>
                <div className='rounded-xl absolute left-0 top-0 w-full h-full  bg-black/40 font-xl px-4 py-5 '>
                            <h1 className='text-white font-bold text-xl'>Sun's Out, BOGO's Out</h1>
                            <p className='text-white'>Through 8/26</p>
                            <button className='bg-white rounded-full text-black px-4 py-2 max-w-max absolute bottom-4'>order now</button>
                </div>
                    <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
             </div>
           <div className='relative '>
                <div className='rounded-xl absolute left-0 top-0 w-full h-full  bg-black/40 font-xl px-4 py-5 '>
                            <h1 className='text-white font-bold text-xl'>New Restaurants</h1>
                            <p className='text-white'>Added Daily</p>
                            <button className='bg-white rounded-full text-black px-4 py-2 max-w-max absolute bottom-4'>order now</button>
                </div>
                    <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
             </div>
           <div className='relative '>
                <div className='rounded-xl absolute left-0 top-0 w-full h-full  bg-black/40 font-xl px-4 py-5 '>
                            <h1 className='text-white font-bold text-xl'>We Deliver Desserts Too</h1>
                            <p className='text-white'>Tasty Treats</p>
                            <button className='bg-white rounded-full text-black px-4 py-2 max-w-max absolute bottom-4'>order now</button>
                </div>
                    <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.pexels.com/photos/3702403/pexels-photo-3702403.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
             </div>

    </div>
  )
}

export default HeadlineCards