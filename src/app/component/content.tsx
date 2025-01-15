import React from 'react'

const Content = () => {
  return (
    <div className="mx-4 md:mx-10 my-10 space-y-8">
      {/* Top Row (2 boxes) */}
      <div className="flex flex-wrap gap-6">
        <div className="flex-1 min-w-[45%] bg-blue-500 h-48 md:h-64 rounded-lg shadow-lg"></div>
        <div className="flex-1 min-w-[45%] bg-blue-400 h-48 md:h-64 rounded-lg shadow-lg"></div>
      </div>

      {/* Bottom Row (3 boxes) */}
      <div className="flex flex-wrap gap-6">
        <div className="flex-1 min-w-[30%] bg-blue-300 h-48 md:h-64 rounded-lg shadow-lg"></div>
        <div className="flex-1 min-w-[30%] bg-green-500 h-48 md:h-64 rounded-lg shadow-lg"></div>
        <div className="flex-1 min-w-[30%] bg-green-400 h-48 md:h-64 rounded-lg shadow-lg"></div>
      </div>
    </div>
  )
}

export default Content
