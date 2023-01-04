import React from 'react'
import { EllipsisHorizontalIcon  } from '@heroicons/react/24/solid'
import {HeartIcon, BookmarkIcon, ChatBubbleBottomCenterIcon, FaceSmileIcon } from '@heroicons/react/24/outline'

export default function Post({img, userImg, caption, username, id}) {
  return (
    <div className='bg-white my-7 border rounded-md'>
      {/* Post Header */}

      <div className="flex items-center p-5">
        <img className='h-12 rounded-full object-cover border p-1 mr-3' src={userImg} alt={username} />
        <p className='font-bold flex-1'>{username}</p>
        <EllipsisHorizontalIcon className='h-5'/>
      </div>
    
    <img className='object-cover w-full' src={img} alt="" />
    <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
            <HeartIcon className='btn'></HeartIcon>
            <ChatBubbleBottomCenterIcon className='btn'></ChatBubbleBottomCenterIcon>
        </div>
        <BookmarkIcon className='btn'></BookmarkIcon>
    </div>

    <p className='p-5 truncate'>
        <span className='font-bold mr-2'>{username}</span>{caption}
    </p>

    {/* Post input box */}
    
    <form className="flex items-center p-4">
        <FaceSmileIcon className='h-7'></FaceSmileIcon>
        <input className='border-none flex-1 focus:ring-0' type="text"  placeholder='Enter your comment'/>
        <button className='text-blue-400 font-bold'>Post</button>
    </form>

    </div>

    
  )
}