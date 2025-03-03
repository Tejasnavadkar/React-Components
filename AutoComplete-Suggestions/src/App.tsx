import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [inputVal, setInputVal] = useState<string>("")
  const [results, setResults] = useState([])
  const [showSearches, setShowSearches] = useState(false)
  const [cache, setCache] = useState<{ [key: string]:[] }>({})  // apply caching to prevent api calls again and again for same input
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const Fetchdata = async (inputVal:string) => {
    

    if(cache[inputVal]){ // without hasOwnProperty() // apply caching to prevent api calls again and again for same input
        console.log('cache:',cache)
      setResults(cache[inputVal])
      return
    }

    // if(cache.hasOwnProperty(inputVal)){  // apply caching to prevent api calls again and again for same input
    //   setResults(cache[inputVal])
    //   return
    // }                                    // so here if inputVal present in cashe we will set directly intead of hit api

    

    const res = await fetch(`https://dummyjson.com/recipes/search?q=${inputVal}`)
    const data = await res.json()
    setResults(data?.recipes?.slice(0, 10))

    setCache(prev=>({   // cashe
      ...prev,
      [inputVal]:data?.recipes?.slice(0, 10)
    }))

  }


  useEffect(() => {   // here we apply debouncing 1st time settimeout chalega but 2nd time return pehele chalega if time hai to reset it
    let timer:number = 0
    timer = setTimeout(() => { 
      Fetchdata(inputVal) 
    }, 1000)

    return () => {     // this return calls when component unmount
      if (timer) {
        clearTimeout(timer)
      }
    }

  }, [inputVal])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => { // select suggetions using key up and down
    console.log('inputVal',inputVal)
    if (results.length === 0) return;

    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1)); // agar first suggestion selected hai and agar keyup dabaya to search bar pe jayega
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      setInputVal(results[selectedIndex]?.name);
      setShowSearches(false);
    }
  };

 


  return (
    <>
      <div onClick={(e) => {
        e.stopPropagation()
        // setActiveInput(false)
      }} className='flex justify-center mt-18'>
        <div>
          <input
            type="text"
            value={inputVal}
            // onClick={(e)=>{
            //   e.stopPropagation()
            //   setActiveInput(true)
            // }}
            onFocus={() => setShowSearches(true)} // when input clicked then only searches visible when click outside hide results
            onBlur={() => setShowSearches(false)}
            onChange={(e) => {
              setShowSearches(true)
              setInputVal(e.target.value)
              setSelectedIndex(-1); // Reset selection when typing
              
            }}
            onKeyDown={handleKeyDown} // Capture keyboard events
            placeholder='Search here..'
            className='border w-96 px-4 py-1 rounded-lg'
          />
          {showSearches && (<div className='  flex flex-col gap-1 mt-1' >
            {results?.map((item,idx) => {
              return <Suggetions item={item} idx={idx} selectedIndex={selectedIndex} />
            })}
          </div>)}
        </div>
      </div>
    </>
  )
}

export default App


const Suggetions = ({ item,idx,selectedIndex }: any) => {

  return <div key={item.id} className={`px-2 py-2 rounded-md ${selectedIndex === idx ? 'bg-emerald-400' : '' } `}>
    <div>{item?.name}</div>
  </div>
}
