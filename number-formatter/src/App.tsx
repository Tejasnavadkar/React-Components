import { useState } from 'react'
import './App.css'

function App() {
    const [numInput, setNumInput] = useState<number>()

  
  const styles = {
    main: {
      padding: '20px',
    },
    title: {
      color: '#5C6AC4'
    },
  };
  
  const formatNumber = (num:number) => {
    const str = num?.toString()
    const demo = []
    let join = ''
   for(let i = 0 ; i <str?.length ; i++){
     if(i==0) demo.push("(")
   
     if(i == 2  || i == 6){
        demo.push(str[i])
        demo.push(")")
        demo.push("-")
        demo.push("(")
    }else{
        demo.push(str[i])
    }
    
    if(i==str?.length-1) demo.push(")")
}
   join = demo.join("")
   return join
  }
  
  const formatedResult = numInput ? formatNumber(numInput) : ''

  return (
    <>
       <div style={styles.main}>
      <h1 style={styles.title}>Number formatter</h1>
      <div>
        <input maxLength={10}  value={numInput} onChange={(e:React.ChangeEvent<HTMLInputElement>):void=>{
        if(e.target.value.length > 10) return
          setNumInput(Number(e.target.value))
        }} type='number' />
      </div>
      <div>
        {formatedResult}
      </div>
    </div>
    </>
  )
}

export default App
