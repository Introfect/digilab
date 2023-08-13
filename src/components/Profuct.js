import React from 'react'
import Features from './Features'
const Profuct = () => {
  return (
    <div className='items-center justify-between min-h-max'>
        <div className='py-16 px-8 flex flex-col items-center justify-between'>
            <p className='font-bold text-4xl text-gray-800'>
            Messaging for all
            </p>
            <p className='font-light text-lg text-gray-600'>
            User generated content in real-time will have multiple touchpoints for offshoring.
            </p>
        </div>
        
        <div>
        <Features/>
        </div>
    </div>
  )
}

export default Profuct