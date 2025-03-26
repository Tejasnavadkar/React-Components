import React, { useState } from 'react'
import CommentCard from './CommentCard'

// another apprach (Scalable) recursive call for comments
interface commentsType{
    
        id:()=>number,
        Author:string,
        text:string,
        replies:[]
    
}

const CommentSection = () => {
    const [comments,setComments] = useState<commentsType[]>([])
    const [newComment,setNewComment] = useState<string>('')

    const addComment = () =>{

        if(newComment.trim()){ // if not blank value
            setComments([
                ...comments,
                {
                    id:new Date().getTime,
                    Author:'Aditya',
                    text:newComment,
                    replies:[]
                }
            ])
            setNewComment('')
        }
    }

    const addReply = (comments,commentId,replyText) =>{

        const newComment:commentsType = {
            id:new Date().getTime,
            Author:'Aditya',
            text:replyText,
            replies:[]
        } 

        const addreplayToComment = (comments:commentsType[],commentId:()=>number,replay:string) =>{
               comments.map((comment)=>{
                if(comment.id === commentId){
                    return {
                        ...comment,
                          replies:[
                            ...comment.replies,
                            replay
                        ]
                    }
                }else if(comment.replies.length > 0){
                    return {
                        ...comment,
                        replies:addreplayToComment(comment,commentId,replay)  // here we execute recursive call
                    }
                }else{
                    return comment
                }
            })
        }
        
        setComments(addreplayToComment(comments,commentId,replyText))

    }


  return (
    <div className='m-4'>
    {/* {comment?.body} */}
    <div className='flex '>
        <div className='w-3/5'>
            <textarea value={newComment} onChange={(e)=>setNewComment(e.target.value)}  className='bg-white rounded-md w-full' placeholder='write a comment'></textarea>
        </div>
        <button onClick={addComment} className='bg-blue-500 px-2 rounded-md'>Send</button>
    </div>
    <div className='flex flex-col gap-3'>
        {comments.map((item)=>{
            return <CommentCard
            key={item.id} 
            comment={item}
            addReply={addReply}
            />
        })}
    </div>
</div>
  )
}

export default CommentSection

