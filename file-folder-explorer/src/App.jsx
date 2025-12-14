import { useState } from 'react'
import './App.css'
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdCreateNewFolder } from 'react-icons/md';
import { FaFile } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const sideBarJson = [
  {
    id:1,
    name:"public",
    type:"folder",
    children:[
      {
        id:2,
        name:"assets",
        type:"folder",
        children:[
          {
            id:3,
            name:"img-1",
            type:"file"
          }
        ]
      }
    ]
  },
  {
    id:4,
    name:"src",
    type:"folder",
    children:[
      {
        id:5,
        name:"app",
        type:"file"
      }
    ]
  }
]

function App() {

  // by myself from scratch

  const [sideBarData,setSideBarData] = useState(sideBarJson)
  const [clickedId,setClickedId] = useState({}) // expand or not if true then expand its child or not
  const [selectType,setSelectType] = useState()
  const [name,setName] = useState("")
  const [SearchOpenId,setSearchOpenId] = useState(-1)

  // it handles when folder should open/expands so we can see the children 
   const handleOpen = (id) =>{
    // here we create a object which contains the id with true/false if any items id true then we open there children using css w-0 to w-full
    setClickedId((prev)=>{
      const newIds = {...prev}
      newIds[id] = !newIds[id] || false
      return newIds
    })

    // onClick={()=>{setClickedId((prev)=>({...prev,[item?.id]: !prev[item?.id]}))}} this is also work also get item for this
  }

  // file/folder creation handler
  const create = (type,name,nodeId) =>{
      // here fetch the node and insert created item into children off that node
      const newItem = {
        id:uuidv4(),  // use uuid
        name,
        type
      }
      
      // this fun add new node in an element
      const updateData = (items = []) => {
        return items.map((item) => {
          if (item.id === nodeId) {
            const existingChildren = Array.isArray(item.children) ? item.children : []
            return {
              ...item,
              children: [...existingChildren, newItem]
            }
          }

          if (item.children && item.children.length > 0) {
            return {
              ...item,
              children: updateData(item.children) //call it recursively for child
            }
          }

          return item
        })
      }
      // update state with new item with new children
       setSideBarData((prev)=>{
        return updateData(prev)
       })

      // after creation close the inputbox
      setSearchOpenId(-1)

       // means ki top level pe item insert karo
      if(nodeId == 0){
          setSideBarData((prev)=>{
            return [...prev,newItem]
          })
        }

  }

  // onkey handler
  const handleKeyDown = (e,name,type,nodeId = 0)=>{
    //  when type and hit enter on inputbox we create that node
      if(e.key === "Enter"){
        console.log({name,type,nodeId})
        create(type,name,nodeId)
      }
  }

  // handleDelete function

  const handleDelete = (id) => {

    const deleteNode = (list) =>{
     // first we traverse the top level elements to filter them map to all and check each elements child using recursion
      return list.filter((item)=>item.id !== id).map((item)=>{
        if(item?.children?.length > 0){
          return {
            ...item,
            children:deleteNode(item.children)
          }
        }
        return item
      })
    }
       
    // 2nd approach using reduce + recursion
    // const deleteNode = (list) => {
    //    return list.reduce((acc,item)=>{
    //        if(item.id === id) {
    //         return acc
    //       }

    //        if(item?.children?.length > 0){
    //         const newItem = {
    //            ...item,
    //            children:deleteNode(item.children)
    //         }
    //         acc.push(newItem)
    //         return acc
    //        }

    //        acc.push(item)
    //        return acc
    //     },[])
    // }

    setSideBarData((prev)=>deleteNode(prev))
  }

  return (
   <>
    <div className=' flex h-screen '>
       {/* sideBar */}
      <aside className='border h-full w-50 p-2'>
         {/* File explorer heading and buttons */}
          <div className='flex justify-between'>
          <div className='text-sm'>{SearchOpenId == -2 ? <input className='w-full border outline-none bg-white text-black px-0.5 rounded-md' type="text" name="" id="" onBlur={()=>setSearchOpenId(-1)} onClick={(e)=>e.stopPropagation()} value={name} onChange={(e)=>setName(e.target.value)} onKeyDown={(e)=>handleKeyDown(e,name,selectType)} />  :"File-Folder-Explorer"}</div>
          <div className='flex gap-2'>
            <button onClick={()=>{ 
              setName("") 
              setSearchOpenId(-2)
              setSelectType("folder") 
              }} className='cursor-pointer'><MdCreateNewFolder/></button>
            <button onClick={()=>{
               setName("") 
              setSearchOpenId(-2)
              setSelectType("file") 
              }} className='cursor-pointer'><FaFile /></button>
          </div>
         </div>

         {/* folders/files  */}
        <Item  data={sideBarData} clickedId={clickedId} setClickedId={setClickedId} handleOpen={handleOpen} SearchOpenId={SearchOpenId} setSearchOpenId={setSearchOpenId} setName={setName} name={name} setSelectType={setSelectType} handleKeyDown={handleKeyDown} selectType={selectType} handleDelete={handleDelete}  />
      </aside>

      {/* file-screen */}
       <div className='border h-full flex-1 p-2'>
           file-explorer
       </div>
    </div>
   </>
  )
}

export default App


//  item render component
const Item = ({data,clickedId,setClickedId,handleOpen,SearchOpenId,setSearchOpenId,setName,name,setSelectType,handleKeyDown,selectType,handleDelete}) => {

  return(
    <> 
      <div>
        <div className='space-y-2'>
        {
          data?.map((elem)=>{
            return <div className='space-y-1' key={elem.id}>
                      <div onClick={()=>handleOpen(elem.id)} className='bg-gray-700 px-2 py-0.5 cursor-pointer flex justify-between items-center '>
                        <div className='flex items-center gap-0.5 '>
                          {elem.type == "folder" && <span>{clickedId[elem.id] ? <IoIosArrowDown /> : <IoIosArrowForward /> }</span>}
                        {SearchOpenId == elem.id ? <input className='w-full border outline-none bg-white text-black px-0.5 rounded-md' type="text" name="" id="" onBlur={()=>setSearchOpenId(-1)} onClick={(e)=>e.stopPropagation()} value={name} onChange={(e)=>setName(e.target.value)} onKeyDown={(e)=>handleKeyDown(e,name,selectType,elem.id)} /> : <span>{ elem.type == "file" ? `${elem.name}.txt` : elem.name}</span>}
                        </div>
                       <div className='flex gap-1'>
                        {elem.type == "folder" &&<div className='flex gap-2'>
                                                    {/* create Folder  */}
                                                   <button onClick={(e)=>{
                                                      e.stopPropagation()
                                                      setName("")
                                                      setSearchOpenId(elem.id)
                                                      setSelectType("folder")
                                                      
                                                    }} className='cursor-pointer'><MdCreateNewFolder/></button>

                                                     {/* create file  */}
                                                   <button onClick={(e)=>{
                                                    e.stopPropagation()
                                                    setName("")
                                                    setSearchOpenId(elem.id)
                                                    setSelectType("file")
                                                   }} className='cursor-pointer'><FaFile /></button>
                                                 </div>}
                       <div>
                          <button onClick={()=>handleDelete(elem.id)} className=''>❌</button>
                       </div>
                       </div>
                      </div>
                     {clickedId[elem?.id] && <div className={`ml-2 mt-2 overflow-hidden border-none outline-none`}>
                        {elem?.children?.length > 0 && <Item data={elem.children} clickedId={clickedId} setClickedId={setClickedId} handleOpen={handleOpen} SearchOpenId={SearchOpenId} setSearchOpenId={setSearchOpenId} setName={setName} name={name} setSelectType={setSelectType} handleKeyDown={handleKeyDown} selectType={selectType} handleDelete={handleDelete}  />}
                      </div>}
            </div>

          })
        }
      </div>
      </div>
    </>
  )
}


// deletion using reduce method 

// const arr = [1,2,3,4,5]

// const result = arr.reduce((acc,item)=>{
//     if(item === 2) return acc  // this step actually skip the iteration so it skip 2 so it wont add 2 in acc
//     acc.push(item)
//     return acc
// },[])

// console.log("result--",result)
