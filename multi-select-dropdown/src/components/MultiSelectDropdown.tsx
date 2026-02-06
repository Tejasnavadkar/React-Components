import React, { useEffect, useRef, useState } from 'react'
import type { OptionsType } from '../data'

const MultiSelectDropdown = ({OPTIONS}:{OPTIONS:OptionsType[]}) => {

    const [isDropdownOpen,setIsDropdownOpen] =  useState<boolean>(false)
    const [itemStatus,setItemStatus] = useState({})
    // const [list,setList] = useState(OPTIONS)
    const [search,setSearch] = useState('')
    const dropdownRef =  useRef<HTMLDivElement | null>(null)

    const HandleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
       
        console.log(e.target.value)
        console.log(e.target.checked)
        setItemStatus(prev=>(
            {
                ...prev,
                [e.target.value]:e.target.checked
            }
        ))
    }

    const HandleSearchChange = (e) => {
        setSearch(e.target.value)
    }

    // useEffect(()=>{
    //   if(!search.trim()){
    //     return
    //   }
    //   const listCopy = [...list]
      
    //   listCopy.filter((item)=>item.label.toLowerCase().includes(search.toLowerCase()))

    //   setList(listCopy)
    

    // },[search])

    // onblur dropdown close
    useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

    const filteredList = OPTIONS.filter(item =>
  item.label.toLowerCase().includes(search.toLowerCase())
)

    const HandleDelete = (item:string) => {
       setItemStatus(prev=>({
        ...prev,
        [item]:false
       }))
    }
    console.log(itemStatus)

  return (
  <div  className='flex flex-col items-center mt-7 border'>
      <div ref={dropdownRef}  className=' w-90 py-2 px-1 rounded-md border'>
        <div className=' border px-1 py-2 rounded-md flex'>
            <div className=' w-full flex gap-1'>
              {Object.keys(itemStatus).map((elem,idx)=>{
                if(itemStatus[elem]){
                    return <div key={idx}  className='border px-1 rounded-md flex items-center gap-2'>
                        <span>{elem}</span>
                        <span className='text-xs text-red-600 cursor-pointer' onClick={()=>HandleDelete(elem)}>X</span>
                    </div>
                }
              })}    
            </div> {/* here render selected list item */}
            <button onClick={()=>setIsDropdownOpen(prev=>!prev)} className='px-4 cursor-pointer'>{isDropdownOpen ? "▼" : "▲"}</button>
        </div>

        { isDropdownOpen && <div className='border w-full mt-2 px-1 h-60 rounded-md py-1 space-y-3'>
          <div>
            <input type="text" value={search} onChange={HandleSearchChange} className=' w-full rounded-md outline-none px-2 py-1' placeholder='search' />
          </div>
          {/* list */}
          <div className='h-[80%] overflow-y-auto space-y-1'>

         {
            filteredList?.map((item,idx)=>(
                 <div key={idx} className='flex px-1 gap-2 py-1 hover:bg-gray-100'>
                   <input 
                   onChange={HandleChange} 
                //    checked={itemStatus[item.value] ? itemStatus[item.value] : false} 
                checked={!!itemStatus[item.value]}
                   type="checkbox" 
                   name="" 
                   id="" 
                   value={item.value} 
                   className='border' 
                   />
                   <span>{item.label}</span>
                 </div>
            ))
         }

          
          </div>
         </div>}
    </div>
    
  </div>
  )
}

export default MultiSelectDropdown
