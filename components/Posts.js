import React from 'react'
import Post from './Post'

export default function Posts() {
    const posts = [
        {
            id: "1",
            username: "alex",
            userImg: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
            img: "https://images.unsplash.com/photo-1672608322232-be8fbf473789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            caption: "Wow really cool image no ?",

        },
        {
            id: "2",
            username: "alex",
            userImg: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
            img: "https://images.unsplash.com/photo-1452127308952-47a699216fc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            caption: "New pic",
            
        }
    ]
    



  return (
    <div>
      {
        posts.map(post=>(
            <Post
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
            ></Post>
        ))
      }
    </div>
  )
}
