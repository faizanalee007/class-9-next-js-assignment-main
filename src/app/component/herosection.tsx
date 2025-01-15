import React from 'react'

const HeroSection = () => {
  return (
    <main className='flex flex-col md:flex-row mx-4 md:mx-10 gap-6 md:gap-8 items-center'>
      <div className='h-64 md:h-96 w-full md:w-1/2 bg-fuchsia-500 rounded-lg shadow-lg'></div>
      <div className='h-64 md:h-96 w-full md:w-1/2 bg-fuchsia-700 rounded-lg shadow-lg'></div>
    </main>
  )
}

export default HeroSection
