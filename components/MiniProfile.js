import React from 'react'

export default function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
        <img className='h-16 rounded-full border p-[2px]' src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg" alt="" />
        <div className='flex-1 ml-4'>
            <h2 className='font-bold'>code with me</h2>
            <h3 className='text-sm text-gray-400' >Welcome to insta</h3>
        </div>
        <button className='font-semibold text-blue-400 text-sm'>Sign Out</button>
    </div>
  )
}
