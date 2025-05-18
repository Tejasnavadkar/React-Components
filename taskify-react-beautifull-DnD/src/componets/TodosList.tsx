import React from 'react'
import { Droppable } from 'react-beautiful-dnd'

interface todosProps {
  todos: string[],
  deleteTodo: (idx: number) => void,
  completedTodos: string[]
}

const TodosList = ({ todos, deleteTodo, completedTodos }: todosProps) => {



  return (
    <div className='flex mt-6 gap-2 '>
      {/* activeTasks container  */}
      <Droppable droppableId=''>
        {
          (provided) => (
            <div ref={provided.innerRef} className='w-[50%] border h-fit border-black text-white bg-[#33c3cd] px-3 py-4 flex flex-col gap-2' {...provided.droppableProps}>
              <span className='text-xl'>
                activeTask
              </span>

              <div className='space-y-2'>
                {/* single TodosList */}
                {/* map todos here */}
                {
                  todos && todos?.map((todo, idx) => (
                    <div draggable key={idx} className=' px-2 rounded-md py-1 bg-emerald-950 flex justify-between cursor-move'>
                      {todo}
                      <button className='cursor-pointer' onClick={() => deleteTodo(idx)}>
                        delete
                      </button>
                    </div>
                  ))
                }
              </div>
            </div>
          )
        }
      </Droppable>

      {/* completedTasks container */}
      <div className='w-[50%] border h-fit border-black text-white bg-[#eb6751] px-3 py-4 flex flex-col gap-2'>
        <span className='text-xl'>
          complete tasks
        </span>

        <div>
          {/* single TodosList */}
          {/* map todos here */}

          {
            completedTodos && completedTodos?.map((todo, idx) => (
              <div draggable key={idx} className=' px-2 rounded-md py-1 bg-emerald-950 flex justify-between cursor-move'>
                {todo}
                <button className='cursor-pointer' onClick={() => deleteTodo(idx)}>
                  delete
                </button>
              </div>
            ))
          }

        </div>
      </div>

    </div>
  )
}

export default TodosList
