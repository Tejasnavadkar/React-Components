import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num, setNum] = useState('')
  const [paragraph,setParagraph] = useState('')

  const generate = (n) => {
    const number = parseInt(n)
    let str = 'abcdefghijklmnopqrstuvwxyz'
    let para =""
    for(let i=0; i<number; i++){
        let word =""
       let value = Math.floor(Math.random()*4)
        console.log("value--",value)
        for(let j=0; j<=value;j++){
            let position =Math.floor(Math.random()*26)
            word = word + str.charAt(position) 
        }
        para = para + word + " "
      
    }
    
    setParagraph(para)
    
}

// let paragraph = generate(12)

  return (
    <>
     <div className='h-screen w-full flex justify-center'>
      <div className='mt-28 w-full flex flex-col items-center '>
        <div className='text-2xl font-bold'>Para Generator</div>
        <div className='w-full flex justify-center gap-2 '>
          <input onChange={(e)=>setNum(e.target.value)} className='border w-3/4 py-4 ' type="text"  />
          <button onClick={()=>{
              generate(num)
          }} className='bg-gray-800 rounded-xl px-4 text-white'>Generator</button>
        </div>
        <div className='mt-11'>
        <p>{paragraph}</p>
      </div>
      </div>
      

     </div>
    </>
  )
}

export default App
