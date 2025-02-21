

import { Fragment } from 'react/jsx-runtime';
import './App.css'
import Accordion from './components/Accordion'
import { useState } from 'react';

function App() {

  const [selectedIndex,setSelectedIndex] = useState<number | null>(null)



  return (
    <>
      <div className='w-full flex flex-col gap-2 items-center pt-20'>
       {Data.map((item,idx)=>{

        return <Fragment key={idx}>
          <Accordion 
            item={item} 
            onClick={()=>setSelectedIndex(prevIndex => (prevIndex === idx ? null : idx))}
            isOpen={selectedIndex === idx}
            />
        </Fragment>
       })}
      </div>
    </>
  )
}

const Data = [
  {
    question: "What is the primary purpose of photosynthesis?",
    answer:
      "The primary purpose of photosynthesis is to convert sunlight into chemical"
  },
  {
    question: "What is the primary purpose of photosynthesis?",
    answer:
      "The primary purpose of photosynthesis is to convert sunlight into chemical"
  },
  {
    question: "What is the primary purpose of photosynthesis?",
    answer:
      "The primary purpose of photosynthesis is to convert sunlight into chemical"
  },
  {
    question: "What is the primary purpose of photosynthesis?",
    answer:
      "The primary purpose of photosynthesis is to convert sunlight into chemical"
  },

];

export default App
