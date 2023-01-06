import React, {useEffect, useState} from 'react'
import { EllipsisHorizontalIcon  } from '@heroicons/react/24/solid'
import {HeartIcon, BookmarkIcon, ChatBubbleBottomCenterIcon, FaceSmileIcon } from '@heroicons/react/24/outline'
import { useSession} from "next-auth/react";
import { addDoc, serverTimestamp, collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import {db} from '../firebase'
import Moment from 'react-moment';


export default function Post({img, userImg, caption, username, id}) {
  const {data: session} = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  useEffect(()=>{
    console.log(id)
    const unsubscribe = onSnapshot(
      query(collection(db, "posts/"+id+"/comments"), orderBy("timeStamp", "desc")), (snapshot) => {setComments(snapshot.docs)}
    )
  }, [db, id])


  async function sendComment(event){
    event.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username:session.user.username,
      userImage: session.user.image,
      timeStamp: serverTimestamp(),
    })
  }
  return (
    <div className='bg-white my-7 border rounded-md'>
      {/* Post Header */}

      <div className="flex items-center p-5">
        <img className='h-12 rounded-full object-cover border p-1 mr-3' src={userImg} alt={username} />
        <p className='font-bold flex-1'>{username}</p>
        <EllipsisHorizontalIcon className='h-5'/>
      </div>
    
    <img className='object-cover w-full' src={img} alt="" />

    {session && (
      <div className="flex justify-between px-4 pt-4">
      <div className="flex space-x-4">
          <HeartIcon className='btn'></HeartIcon>
          <ChatBubbleBottomCenterIcon className='btn'></ChatBubbleBottomCenterIcon>
      </div>
      <BookmarkIcon className='btn'></BookmarkIcon>
    </div>
    )}


    

    <p className='p-5 truncate'>
        <span className='font-bold mr-2'>{username}</span>{caption}
    </p>
    {comments.length > 0 && (
      <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
        {comments.map((com)=>(
          <div className="flex items-center space-x-2 mb-2">
            <img className='h-7 rounded-full object-cover' src={com.data().userImage} alt="userImage" />
            <p className='font-semibold' >{com.data().username}</p>
            <p className='flex-1 truncate'>{com.data().comment}</p>
            <Moment fromNow>{com.data().timeStamp?.toDate()}</Moment>
          </div>
        ))}
      </div>
    )}

    {/* Post input box */}
    {session && (
       <form className="flex items-center p-4">
       <FaceSmileIcon className='h-7'></FaceSmileIcon>
       <input
      value={comment}
      onChange={(event)=>setComment(event.target.value)}
       className='border-none flex-1 focus:ring-0' type="text"  placeholder='Enter your comment'/>
       <button type='submit' onClick={sendComment} disabled={!comment.trim()} className='text-blue-400 font-bold disabled:text-blue-200'>Post</button>
   </form>
    )}
   

    </div>

    
  )
}
