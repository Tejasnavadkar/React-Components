import React, { useState } from 'react'

const CommentCard = ({ comment, addReply }) => {
    const [showReply, setShowReply] = useState(false);
    const [replayText, setReplayText] = useState('');

    const handleReplay = () =>{
        if(replayText.trim()){
            addReply(comment.id,replayText)
            setReplayText('') // blank input field
            setShowReply(false)
        }
    }

    return (
        <div>
            <span>{comment.author}</span>
            <span>2 hours ago</span>
            <div>{comment.text}</div>
            <button onClick={() => setShowReply(!showReply)}>Reply</button>

            {showReply && (
               <div>
                   <textarea value={replayText} onChange={(e)=>setReplayText(e.target.value)}></textarea>
                   <button onClick={handleReplay} >Cancel</button>
               </div>
            )}

             <div>   {/*// show all replays here  */}
                {
                    comment.replies.map((item)=>{
                        return <CommentCard    {/* recursive call */}
                                key={item.id}
                                comment={replayText}
                                addReply={addReply}
                         /> 
                    })
                }
            </div>
        </div>
    )
}

export default CommentCard
