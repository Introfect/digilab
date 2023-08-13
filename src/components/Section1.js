import React from 'react'
import Rec from './Rec'
import Photo from '../../public/Photo.png'
import Photo2 from '../../public/Photo2.png'
import Image from 'next/image'
const Section1 = () => {
  return (
    <div className='items-center justify-between min-h-max bg-white text-black'>
        <div className='py-16 px-8 flex flex-col items-center justify-between'>
            <p className='font-bold text-4xl text-gray-800'>
            Redefining Product Features
            </p>
            <p className='font-light text-lg py-6 text-gray-600'>
            Keeping your eye on the ball while performing a deep dive on the start-up mentality to  derive convergence on cross-platform integration.
            </p>
        </div>
        
        <div className='flex flex-col-reverse space-y-4 xl:flex-row w-full items-center justify-around'>
            <div>
              <Rec/>
            </div>
            <div className='xl:hidden'>
            <Image
            src={Photo2}
            className='w-full my-10 py-4'
           alt='not found'
            />
            </div>
            <div className=' min-max hidden xl:block py-12'>
            <Image
            src={Photo}
            className='w-full'
           alt='not found'
            />
            </div>
        
        </div>
    </div>
  )
}

export default Section1