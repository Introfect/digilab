import React from 'react'
import { ArrowRight } from 'lucide-react';

const Learnmore = () => {
  return (
    <div className='flex cursor-pointer'>
        <p className='text-blue-700'>Learn more</p>
        <ArrowRight className='text-blue-500'/>
    </div>
  )
}

export default Learnmore