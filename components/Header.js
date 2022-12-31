import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div>
      {/* Left */}
            <div className="flex items-center justify-between max-w-6xl">
                <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
                    <Image
                        className="object-contain"
                        src="https://cdn2.downdetector.com/static/uploads/logo/Instagram_Logo_Large.png"
                        fill
                        alt="insta"
                    />
                </div>
                <div className="cursor-pointer h-10 w-10 relative lg:hidden">
                    <Image
                        className="object-contain"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                        fill
                        alt="insta"
                    />
                </div>


                <h1>Right side</h1>

            </div>
      {/* Mid */}

      {/* Right */}
    </div>
  )
}
