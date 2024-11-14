import React from 'react'

function Topbar() {
  return (
    <div className="flex flex-row justify-between border-2 border-gray-300 p-6">
        <input type="text" placeholder="Search Bar" className="w-5/12 border-2 border-gray-400 rounded-xl p-1 pl-3 pr-3"/>
        <button className="bg-blue-500 rounded-xl p-1 pl-3 pr-3 text-white font-bold">+ Add New Post</button>
    </div>
  )
}

export default Topbar