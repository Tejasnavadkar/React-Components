import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Navbar from './components/Navbar'
import { ContextProvider } from './context/theme-context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ContextProvider>
      <BrowserRouter>
      {/* navbar */}
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/blog' element={<Blog/>} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
    </>
  )
}

export default App
