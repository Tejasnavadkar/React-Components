import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import SingleTodo from './SingleTodo'

interface todosProps {
  todos: string[],
  deleteTodo: (idx: number) => void,
  completedTodos: string[]
}

const TodosList = ({ todos, deleteTodo, completedTodos }: todosProps) => {



  return (
    <div className='flex mt-6 gap-2 '>
      {/* activeTasks container  */}
      {/* we wrap the dives <Droppable> component where we drop the items  */}
      <Droppable droppableId='todolist'> 
        {
          (provided) => (
            <div
               ref={provided.innerRef} // to provide ref so react beautifull dnd can control this as droppable zone
              {...provided.droppableProps}
              className='w-[50%] border h-fit border-black text-white bg-[#33c3cd] px-3 py-4 flex flex-col gap-2'
            >
              <span className='text-xl'>
                activeTask
              </span>

              <div className='space-y-2'>
                {/* single TodosList */}
                {/* map todos here */}     
                {
                  todos && todos?.map((todo, idx) => (
                    <SingleTodo key={`${todo} + ${idx}`} idx={idx} todo={todo} deleteTodo={deleteTodo} />
                  ))
                }
              </div>
              {provided.placeholder}
            </div>
          )
        }
      </Droppable>

      {/* completedTasks container */}
      <Droppable droppableId='todoRemove'>
        {
          (provided) => (

            <div 
            className='w-[50%] border h-fit border-black text-white bg-[#eb6751] px-3 py-4 flex flex-col gap-2'
            ref={provided.innerRef}
            {...provided.droppableProps}
            >
              <span className='text-xl'>
                complete tasks
              </span>
              <div>
                {/* single TodosList */}
                {/* map todos here */}

                {
                  completedTodos && completedTodos?.map((todo, idx) => (
                     <SingleTodo key={`${todo} + ${idx}`} idx={idx} todo={todo} deleteTodo={deleteTodo} />
                  ))
                }

              </div>
              {provided.placeholder}
            </div>
          )
        }
      </Droppable>

    </div>
  )
}

export default TodosList
