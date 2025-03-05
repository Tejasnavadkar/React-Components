import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import axios from 'axios'

function App() {
  const [userData, setuserData] = useState({})

  const Fetch = async () =>{
    const res =  await axios.get("https://api.github.com/users/Tejasnavadkar")
    setuserData(res.data)
  }

  useEffect(()=>{
     Fetch()
  },[])

  return (
    <>
    <div className='w-full h-screen bg-slate-700 flex justify-center items-center'>
   
   <Card userinfo = {userData} />
   </div>
    </>
  )
}

export default App
