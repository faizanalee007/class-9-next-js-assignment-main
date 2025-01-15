import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex h-20 w-full bg-indigo-600 justify-between items-center px-10'>
      {/* Logo */}
      <div className='w-32 h-10 bg-black rounded-md'></div>
      {/* Subtitle */}
      <div className='w-40 h-10 bg-gray-700 rounded-md'></div>
      <h1 className='text-white font-bold text-2xl'>Faizan Ahmed</h1>
      {/* Navigation Links */}
      <ul className='flex space-x-6'>
        <li className='px-4 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 cursor-pointer transition-all'>Home</li>
        <li className='px-4 py-2 bg-lime-700 text-white rounded-lg hover:bg-lime-800 cursor-pointer transition-all'>About</li>
        <li className='px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 cursor-pointer transition-all'>Services</li>
        <li className='px-4 py-2 bg-fuchsia-800 text-white rounded-lg hover:bg-fuchsia-900 cursor-pointer transition-all'>Portfolio</li>
        <li className='px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 cursor-pointer transition-all'>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
