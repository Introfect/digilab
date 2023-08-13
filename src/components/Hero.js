import React from 'react'
import LeftHeroComponent from './LeftHeroComponent'
import RightHeroComonent from './RightHeroComonent'

const Hero = () => {
  return (

    <div className='h-4/5 flex flex-col-reverse items-center justify-center lg:flex-row bg-blue-500'>
       <LeftHeroComponent/>
       <RightHeroComonent/>
    </div>
    
  )
}

export default Hero