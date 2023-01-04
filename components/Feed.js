import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestion from './Suggestion'
import { useSession } from 'next-auth/react'


export default function Feed() {
  const {data:session} = useSession();
  return (
    <main className={`grid ${session ? "gird-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto":"gird-cols-2 md:grid-cols-2 md:max-w-3xl mx-auto"}`}>
        <section className='md:col-span-2'>
            {/* stories */}
            <Stories></Stories>

            {/* posts */}
            <Posts></Posts>
        </section>

        <section className='md:col-span-1'>
            <div className="fixed w-[380px]">
              {/* Mini profile */}
              <MiniProfile></MiniProfile>

              {/* Suggestion */}

              <Suggestion></Suggestion>
            </div>
        </section>
    </main>
  )
}
