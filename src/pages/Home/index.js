import React from 'react'
import RightSide from './RightSide'
import LeftSide from './LeftSide';

function Home() {
  return (
    <div className='flex justify-between items-start '>
      <div className='w-2/6'> 
        <LeftSide />
      </div>
      <div className='w-4/6'>
       <RightSide />
      </div>
    </div>
  )
}

export default Home