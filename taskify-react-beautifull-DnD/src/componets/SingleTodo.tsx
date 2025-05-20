import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

interface SingleTodoProps {
  idx: number,
  todo: string,
  deleteTodo: (id: number) => void
}


const SingleTodo: React.FC<SingleTodoProps> = ({ idx, todo, deleteTodo }) => {
  return (
    <Draggable draggableId={`${todo} - ${idx}`} index={idx}>
      {
        (provided) => (
          <div 
           key={idx} 
           ref={provided.innerRef}
           {...provided.draggableProps}
           {...provided.dragHandleProps}
           className=' px-2 rounded-md py-1 bg-emerald-950 flex justify-between'
           >
            {todo}
            <button className='cursor-pointer' onClick={() => deleteTodo(idx)}>
              delete
            </button>
          </div>
        )
      }
    </Draggable>
  )
}

export default SingleTodo
