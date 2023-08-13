import React from 'react'
import LeftHeroComponent from './LeftHeroComponent'
import RightHeroComonent from './RightHeroComonent'

const Hero = () => {
  return (

    <div className='h-full flex flex-col-reverse items-center justify-evenly lg:flex-row bg-blue-500'>
       <LeftHeroComponent/>
       <RightHeroComonent/>
    </div>
    
  )
}

export default Hero