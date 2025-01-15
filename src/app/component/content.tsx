import React from 'react'

const Content = () => {
  return (
    <div className="mx-10 my-10 space-y-8">
      {/* Top Row (2 boxes) */}
      <div className="flex gap-8">
        <div className="flex-1 bg-blue-500 h-64 rounded-lg shadow-lg"></div>
        <div className="flex-1 bg-blue-400 h-64 rounded-lg shadow-lg"></div>
      </div>

      {/* Bottom Row (3 boxes) */}
      <div className="flex gap-8">
        <div className="flex-1 bg-blue-300 h-64 rounded-lg shadow-lg"></div>
        <div className="flex-1 bg-green-500 h-64 rounded-lg shadow-lg"></div>
        <div className="flex-1 bg-green-400 h-64 rounded-lg shadow-lg"></div>
      </div>
    </div>
  )
}

export default Content
