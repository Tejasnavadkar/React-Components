import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import OTP from './components/OTP'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen bg-slate-700 flex-col  items-center justify-center'>
        <Card />
        <OTP/>
      </div>
    </>
  )
}

export default App
