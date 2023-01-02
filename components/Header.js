import React from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import {HomeIcon} from '@heroicons/react/24/solid'

export default function Header() {
  return (
        <div className="shadow-sm border-b sticky top-0 bg-white z-30">
            <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
                <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
                    <Image
                        className="object-contain"
                        src="https://cdn2.downdetector.com/static/uploads/logo/Instagram_Logo_Large.png"
                        fill
                        alt="insta"
                    />
                </div>
                <div className="cursor-pointer h-24 w-10 relative lg:hidden">
                    <Image
                        className="object-contain"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                        fill
                        alt="insta"
                    />
                </div>

                <div className="relative mt-1">
                    <div className="absolute top-2 left-2">
                        <MagnifyingGlassIcon className='h-5 text-gray-500'></MagnifyingGlassIcon>
                    </div>

                    <input type="text" placeholder='Search' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md' />
                </div>

                <div className="flex space-x-4 items-center">
                    <HomeIcon className='hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'></HomeIcon>
                    <PlusCircleIcon className='h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out' ></PlusCircleIcon>
                    <img src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg" alt="user-image" className='h-10 w-10 rounded-full cursor-pointer' />
                </div>

            </div>
        </div>
      
            
     
    
  )
}
