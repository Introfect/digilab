import React from 'react'
import Checkbox from './Checkbox'

const CallToAction = () => {
  return (
    <div>
        <section class="bg-white dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" className="flex">
          <div className='w-4/5'>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 rounded" placeholder="Enter your email" required/>
          </div>
          <button type="submit"className='bg-blue-500 px-4 py-2 text-semibold rounded  mx-4'>Submit</button>
      </form>
  </div>
  <div className='flex flex-wrap text-black items-center justify-center space-x-8'>
<div className='flex space-x-2'>
 <Checkbox/>
 <p>fully Secure</p>
  </div>
  <div className='flex space-x-2'>

 <Checkbox/>
 <p>24/7 Support</p>
  </div>
 <div className='flex space-x-2'>

 <Checkbox/>
 <p>Done Deal</p>
 </div>
</div>
 
 
</section>
    </div>
  )
}

export default CallToAction