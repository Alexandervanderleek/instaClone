import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
export default function Feed() {
  return (
    <main>
        <section>
            {/* stories */}
            <Stories></Stories>

            {/* posts */}
            <Posts></Posts>
        </section>

        <section>
            {/* Mini profile */}

            {/* Suggestion */}
        </section>
    </main>
  )
}
