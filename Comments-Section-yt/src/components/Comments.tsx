import React, { useState } from 'react'
import CommentItem from './CommentItem'

interface replyType{
    id:number,
    name:string,
    body:string
}

export interface CommentType {
    id: number,
    name: string,
    body: string
    reply: replyType[]
}

const Comments = () => {

    const [comment, setComment] = useState<CommentType | null>()
    const [AllComments, setAllComments] = useState<CommentType[]>([])
    const [replayShowState, setReplayShowState] = useState<{ [key: number]: boolean }>({});

    const HandleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

        setComment({
            id: new Date().getSeconds(),
            name: 'tejas',
            body: e.target?.value,
            reply: []
        })


    }

    const HandelClick = () => {

        if (comment) {
            setAllComments((prev) => [
                ...prev,
                comment
            ]);
        }

        setComment({
            id: new Date().getSeconds(),
            name: 'tejas',
            body: '',
            reply: []
        })

    }

    const toggleReplayShow = (commentId: number) => {
        setReplayShowState((prev) => ({
            ...prev,
            [commentId]: !prev[commentId],
        }));
    };

    // bad code
    // const AddReply = (commentId:any,body:string,name='comment',setShowReplay:any) =>{

    //    const filteredItem =  AllComments.filter((item)=>{
    //         return item.id === commentId
    //     })

    //     if(filteredItem){
    //         const updatedItem = filteredItem[0].reply.push({
    //             id:commentId,
    //             body:body,
    //             name:name
    //         })
    //         setAllComments((prev)=>{
    //            return [
    //                 ...prev,
    //                 updatedItem
    //             ]
    //         })

    //         setReplayShowState((prev) => ({
    //             ...prev,
    //             [commentId]: false
    //         }));
    //         console.log('allcomments--',AllComments)
    //     }

    //    } 

    // optimise code
    const AddReply = (commentId: number, body: string, name: string) => {
        setAllComments((prev) => {
            return prev.map((comment) => {
                if (comment.id === commentId) {
                    return {
                        ...comment,
                        reply: [
                            ...comment.reply,
                            {
                                id: new Date().getTime(),
                                body,
                                name
                            }
                        ]
                    };
                }
                return comment;
            });
        });

        // Reply add hone ke baad replay show state ko false kar do
        setReplayShowState((prev) => ({
            ...prev,
            [commentId]: false
        }));
    };

    return (
        <div className='m-4'>
            {/* {comment?.body} */}
            <div className='flex '>
                <div className='w-3/5'>
                    <textarea value={comment?.body} className='bg-white rounded-md w-full' onChange={HandleChange} placeholder='write a comment'></textarea>
                </div>
                <button onClick={HandelClick} className='bg-blue-500 px-2  rounded-md'>Send</button>
            </div>
            <div className='flex flex-col gap-3'>
                {
                    AllComments.map((item) => {
                        return <CommentItem
                            key={item.id}
                            item={item}
                            AddReply={AddReply}
                            // ReplayShow={ReplayShow} 
                            // setShowReplay={setShowReplay}   
                            ReplayShow={replayShowState[item.id] || false}
                            toggleReplayShow={() => toggleReplayShow(item.id)}
                        />

                    })
                }
            </div>
        </div>
    )
}

export default Comments


// const AddReply = (commentId, body, name = 'comment') => {

//     setAllComments((prev) => {
//         return prev.map((item) => {
//             if (item.id === commentId) {
//                 return {
//                     ...item,
//                     reply: [
//                         ...item.reply,
//                         {
//                             id: new Date().getSeconds(),
//                             body: body,
//                             name: name
//                         }
//                     ]
//                 };
//             }
//             return item;
//         });
//     });

// }
