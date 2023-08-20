import React, { useState } from 'react'
import {data} from '../Data/data.js'



const Food = () => {
  

    const [foods,setfoods]=useState(data)

    const filterType=(category) =>{
        setfoods(data.filter ((items) =>{
            return category===items.category;
        }))
    }
    const filterPrice=(price) =>{
        setfoods(data.filter ((items) =>{
            return price===items.price;
        }))
    }


  return (
    <div className='py-10 mx-4 '>
        <h1 className=' text-orange-500 text-center text-3xl font-bold'>Top Rated Menu Items</h1>
        <div className='flex justify-between flex-col md:flex-row'>
            <div>
                <p className='text-lg font-bold'>Filter Type</p>
                <div>
                    <button onClick={()=>setfoods(data)} className='text-orange-400 border-orange-400 border-solid border-[1px] py-2 px-4 rounded-xl m-1 hover:text-white hover:bg-orange-400 duration-300'>All</button>
                    <button onClick={()=>filterType('burger')} className='text-orange-400 border-orange-400 border-solid border-[1px] py-2 px-4 rounded-xl m-1 hover:text-white hover:bg-orange-400 duration-300'>Burgers</button>
                    <button onClick={()=>filterType('pizza')}className='text-orange-400 border-orange-400 border-solid border-[1px] py-2 px-4 rounded-xl m-1 hover:text-white hover:bg-orange-400 duration-300'>Pizza</button>
                    <button onClick={()=>filterType('salad')} className='text-orange-400 border-orange-400 border-solid border-[1px] py-2 px-4 rounded-xl m-1 hover:text-white hover:bg-orange-400 duration-300'>Salads</button>
                    <button onClick={()=>filterType('chicken')} className='text-orange-400 border-orange-400 border-solid border-[1px] py-2 px-4 rounded-xl m-1 hover:text-white hover:bg-orange-400 duration-300'>Chicken</button>   
                </div>
            </div>
            <div>
                <p className='text-lg font-bold'>Filter Price</p>
                <div>
                    <button onClick={()=>filterPrice('$')} className='text-orange-400 border-orange-400 border-solid border-[1px] py-2 px-4 rounded-xl m-1 hover:text-white hover:bg-orange-400 duration-300'>$</button>
                    <button onClick={()=>filterPrice('$$')} className='text-orange-400 border-orange-400 border-solid border-[1px] py-2 px-4 rounded-xl m-1 hover:text-white hover:bg-orange-400 duration-300'>$$</button>
                    <button onClick={()=>filterPrice('$$$')} className='text-orange-400 border-orange-400 border-solid border-[1px] py-2 px-4 rounded-xl m-1 hover:text-white hover:bg-orange-400 duration-300'>$$$</button>
                    <button onClick={()=>filterPrice('$$$$')} className='text-orange-400 border-orange-400 border-solid border-[1px] py-2 px-4 rounded-xl m-1 hover:text-white hover:bg-orange-400 duration-300'>$$$$</button>   
                </div>
            </div>
        </div>

        <div className='my-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-10'>
            {  foods.map((items,index)=> {
        return(
            
            <div key={index} className='  shadow-xl hover:scale-[1.06] duration-300'>
                <img className=' rounded-t-xl w-full object-cover h-[200px]' src={items.image} alt="" />
                <div className='flex justify-between items-center p-2 '>
                    <p className='text-lg font-bold'>{items.name}</p>
                    <span className='p-2 text-white bg-orange-400 rounded-lg'>{items.price}</span>
                </div>
            </div>
    
        )
    })}
        </div>

    </div>
  )
}

export default Food