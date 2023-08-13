import React from 'react'
import Rec from './Rec'
import Photo2 from '../../public/Photo2.png'
import Image from 'next/image'
const Section2 = () => {
  return (
    <div className='bg-gray-950 py-16 flex flex-col space-y-4 xl:flex-row w-full items-center justify-around'>
    <div className=''>
    <Image
    src={Photo2}
    className='w-full  my-10 py-4'
   alt='not found'
    />
    </div>
    <div>
      <Rec/>
    </div>

</div>
  )
}

export default Section2