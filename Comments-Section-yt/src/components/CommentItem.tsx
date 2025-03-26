import { memo, useState } from 'react'
import { CommentType } from './comments'

interface CommentItmType {
    item: CommentType,
    AddReply: (commentId: number, body: string, name: string) => void,
    ReplayShow: boolean,
    toggleReplayShow: () => void
}


const CommentItem = memo(({ item,AddReply,ReplayShow,toggleReplayShow }: CommentItmType) => {

   
    const [replyComment, setReplyComment] = useState('')

    const handleReply = () => {
        AddReply(item.id, replyComment, item.name);
        setReplyComment(''); // Reset input after reply
    };

    return (
        <div>
            <div className='border'>
                <div className='text-sm '>{item.name}</div>
                <div className='text-2xl'>{item.body}</div>
                {item?.reply?.length > 0 && (
                    item.reply.map((rpl)=>{
                        return <div key={rpl.id} className='ml-6'>
                        <div className='text-sm '>{rpl.name}</div>
                        <div className='text-2xl'>{rpl.body}</div>
                    </div>
                    })
               )}
                {ReplayShow ? (<>
                    <div>
                        <input 
                        value={replyComment}
                        onChange={(e)=>setReplyComment(e.target.value)} 
                        className='bg-white rounded-md py-1' 
                        type="text" 
                        placeholder='add replay'
                         />

                        <div className='flex gap-3'>
                            <button onClick={handleReply} >Send</button>
                            <button onClick={toggleReplayShow} >Cancel</button>
                        </div>
                    </div>
                </>) : <button onClick={toggleReplayShow} className='text-xs text-blue-800 cursor-pointer'>Reply?</button>}
            </div>
        </div>
    )
})

export default CommentItem
