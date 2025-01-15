import React from 'react'

const Navbar = () => {
  return (
   
        <nav className='flex h-32 w-full bg-indigo-600 justify-around items-center'>
            {/* logo */}
            <div className='w-32 h-10 bg-black'></div>
            {/* subtitle */}
            <div className='w-32 h-10 bg-stone-700'></div>
            {/* navigation link */}
           <ul className='flex '>
             <li className='w-32 h-10 bg-emerald-700' ></li>
             <li className='w-32 h-10 bg-lime-700'></li>
             <li className='w-32 h-10 bg-pink-600'></li>
             <li  className='w-32 h-10 bg-fuchsia-950'></li>
             <li  className='w-32 h-10 bg-cyan-500'></li>
             <li  className='w-32 h-10 bg-rose-800'></li>
            
 
           </ul>
        </nav>
      
   
  )
}

export default Navbar
