import React from 'react'
import { InfiniteMovingCards } from './ui/InfinityMovingCards'
import { companies, testimonials } from '@/data'
import { Vortex } from './ui/vortex'

const Clients = () => {
  return (
    
      <div className='py-20' id='testimonials'>
      <h1 className='heading'>
        Always Updating  {' '}
        <span className='text-red-600'>my Knowldge and Techstack</span>
      </h1>
      <div className='flex flex-col items-center max-lg:mt-10 '>
       
       <InfiniteMovingCards  
        items={testimonials}
        direction='right'
        speed='slow'
        />
      </div>
    </div>

    
  )
}

export default Clients