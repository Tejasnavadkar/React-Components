import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputField from './componets/InputField'
import TodosList from './componets/TodosList'
import { DragDropContext } from 'react-beautiful-dnd'

function App() {

  const [todos, setTodos] = useState<string[]>([])
  const [completedTodos, setCompletedTodos] = useState<string[]>([])
  const [todo, setTodo] = useState('')

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
      <DragDropContext onDragEnd={() => { }}>
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
