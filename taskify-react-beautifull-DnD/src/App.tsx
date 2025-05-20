import { useState } from 'react'
import './App.css'
import InputField from './componets/InputField'
import TodosList from './componets/TodosList'
import { DragDropContext, type DropResult } from 'react-beautiful-dnd'

function App() {

  const [todos, setTodos] = useState<string[]>([])
  const [completedTodos, setCompletedTodos] = useState<string[]>([])
  const [todo, setTodo] = useState('')

const onDragEnd = (result: DropResult) => {

  if (!result.destination) return;
  const { source, destination } = result;
  
  if (source.droppableId === "todolist" && destination.droppableId === "todoRemove") {
    const draggedTodo = todos[source.index];
    const newTodos = [...todos];
    newTodos.splice(source.index, 1);
    setTodos(newTodos);
    setCompletedTodos([...completedTodos, draggedTodo]);
  }

  // Add this section for dragging from completed to active
  if (source.droppableId === "todoRemove" && destination.droppableId === "todolist") {
    const draggedTodo = completedTodos[source.index];
    const newCompletedTodos = [...completedTodos];
    newCompletedTodos.splice(source.index, 1);
    setCompletedTodos(newCompletedTodos);
    setTodos([...todos, draggedTodo]);
  }
};


// const onDragEnd = (result: DropResult) => {
//     const { destination, source } = result;

//     console.log(result);

//     if (!destination) {
//       return;
//     }

//     if (
//       destination.droppableId === source.droppableId &&
//       destination.index === source.index
//     ) {
//       return;
//     }

//     let add;
//     let active = todos;
//     let complete = completedTodos;
//     // Source Logic
//     if (source.droppableId === "todolist") {
//       add = active[source.index];
//       active.splice(source.index, 1);
//     } else {
//       add = complete[source.index];
//       complete.splice(source.index, 1);
//     }

//     // Destination Logic
//     if (destination.droppableId === "todolist") {
//       active.splice(destination.index, 0, add);
//     } else {
//       complete.splice(destination.index, 0, add);
//     }

//     setCompletedTodos(complete);
//     setTodos(active);
//   };


  const addTodos = () => {
    if (!todo.trim()) return
    setTodos((prev) => {
      return [
        ...prev,
        todo
      ]
    })
    setTodo('')
  }

  const deleteTodo = (idx: number) => {

    const updatedTodos = todos.filter((item) => item !== todos[idx])
    setTodos(updatedTodos)

  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className='bg-blue-400 h-screen py-10 '>
          <div className='border w-[90%] mx-auto px-2 '>
            <div className='text-white text-2xl flex justify-center pt-6'>
              Taskify
            </div>
            {/* input  */}
            <div className='p-1 rounded-2xl w-full bg-white flex justify-between' >
              <InputField onChange={(e) => setTodo(e.target.value)} value={todo} />
              <button onClick={addTodos} className='h-9 w-9 border rounded-full text-white bg-blue-400 cursor-pointer'>Go</button>
            </div>

            {/* todos lists */}
            <div>
              <TodosList
                todos={todos}
                completedTodos={completedTodos}
                deleteTodo={deleteTodo}
              />
            </div>
          </div>
        </div>
      </DragDropContext>

    </>
  )
}

export default App
