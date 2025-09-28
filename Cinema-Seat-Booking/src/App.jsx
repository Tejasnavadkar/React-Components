import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='text-white border border-red-600'>
        Cinema Seat Booking..
     </div>
    </>
  )
}

export default App
