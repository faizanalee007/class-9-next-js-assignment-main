

import React from 'react'

const Content = () => {
  return (

<div className="mx-10 my-10 space-y-4">
      {/* Top Row (3 boxes) */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-500 h-64"></div>
        <div className="bg-blue-400 h-64"></div>
        <div className="bg-blue-300 h-64"></div>
      </div>

      {/* Bottom Row (2 boxes, full-width) */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-500 h-64"></div>
        <div className="bg-green-400 h-64"></div>
      </div>
    </div>
 

 
    
  )
}

export default Content

