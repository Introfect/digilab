import React from 'react'
import { CLL1, CLL2, CL3, CL4, CL5, CL6 } from './svg'

const LogoSection = () => {
  return (
    <div className='text-black'>
          <div className="py-16 px-8 mx-4 flex flex-col items-center justify-center">
        <p className="font-bold text-4xl text-gray-800">Proud to Be Used By</p>
        <p className="font-light text-lg py-6 text-gray-600">
        Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
        </p>
      </div>
      <div className='flex items-center justify-center flex-col space-y-6 space-x-4 md:flex-row md:flex-wrap lg:flex-nowrap'>

        <CLL1 className='w-40'/>
        <CLL2 className='w-40'/>
        <CL3 className='w-40'/>
        <CL4 className='w-40'/>
        <CL5 className='w-40'/>
        <CL6 className='w-40'/>
      </div>
    </div>
  )
}

export default LogoSection