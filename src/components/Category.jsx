import React from 'react'
import {categories} from '../Data/data'

const Category = () => {
  return (
    <div className='mx-4 py-3'>
        <h1 className='text-orange-500 text-center font-bold text-3xl'>Top Rated Menu Items</h1>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6 '>
            {
                categories.map(((items,index)=> {
                    return (
                        <div key={index} className='flex items-center gap-2 justify-between p-4 bg-[#eee] rounded-xl'>
                            <div className='font-bold text-xl'>{items.name}</div>
                            <img className='w-[70px]' src={items.image} alt="" />
                        </div>
                    )
                }))
            }

        </div>
    </div>
  )
}


export default Category