import React from 'react'
import Typewriter from './Components/Shimmer/Typewriter'

const UpdateNotification = () => {
  return (
    <div className='w-full h-[100vh] bg-[#1F1E24]'>
      <div className='w-full h-full text-white px-4 flex justify-start items-center flex-col relative'>
        <h1 className='text-6xl font-bold text-[#ff661f89] mb-5 mt-20 '><Typewriter text="Sorry.." loop/></h1>
      <div className='block absolute top-[60vw] text-xl text-zinc-300 px-5'>
      <h1>Oops! It looks like you're trying to access our web app on a smaller device. We're currently working to make it suitable for smaller screens. For the best viewing experience, please switch to a larger screen, such as a laptop or desktop.<br/> <span className='block text-center mt-4 text-2xl font-bold'>Thank you!</span></h1>
      
      </div>
      <span className='absolute bottom-4 right-4 text-center text-xl font-bold text-[#ff661fbb]'>Ks.</span>
      </div>
    </div>
  )
}

export default UpdateNotification