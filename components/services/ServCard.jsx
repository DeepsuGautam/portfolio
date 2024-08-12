import React from 'react'

const ServCard = ({data}) => {
  return (
    <div className='w-full px-[20px] text-[16px] py-[40px] bg-white shadow-lg transition-all duration-500 border-2 hover:shadow-2xl text-slate-600 hover:text-white hover:bg-slate-600 ease-in-out rounded-xl'>
        <h3 className='text-[20px] h-[55px] overflow-hidden font-bold'>{data?.title}</h3>
        <p className='w-full my-[10px] opacity-70 h-[45px] overflow-hidden'>{data?.text}</p>
        <h4 className='font-bold'>Features</h4>
        <ul className='py-[5px] opacity-60'>
            {data?.services?.map((item,index)=>(
                <li className='px-[15px] font-semibold py-[5px] text-[14px]' key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ServCard