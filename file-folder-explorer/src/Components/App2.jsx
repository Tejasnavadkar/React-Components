import React, { useState } from 'react'
import jsonData from "./data.json"
import { BiFolder } from 'react-icons/bi'
import { v4 as uuidv4 } from 'uuid';

const App2 = () => {
    // this component/fileexplorer is created from akshay saini yt channel and App.jsx is created by myself
    const [data,setdata] = useState(jsonData)
     
    const addNodeToList = (parentId) =>{
        const name = prompt("Enter the name")
        const newItem = {
            id:uuidv4(),
            name,
            isFolder:true
        }

        const updateNode = (list) =>{
          return list.map((item)=>{

                if(item.id === parentId){
                    const exstingChildren =  Array.isArray(item.children) ? item.children : []
                    return {
                        ...item,
                        children:[...exstingChildren,newItem]
                    }
                }
                if(item.children){
                    return {
                        ...item,
                        children:updateNode(item.children)
                    }
                }
                return item
            })
        }

        setdata((prev)=>updateNode(prev))

    }

    const handleDelete = (id) => {

        const deleteNode = (list)=>{
            // first we traverse the top level elements to filter them map to all and check each elements child using recursion
           return list.filter((item)=>item.id !== id).map((item)=>{
            if(item?.children?.length){
                return {
                    ...item,
                    children:deleteNode(item.children)
                }
            }
            return item
           })
        }
  
        // 2nd approach using reduce
//         const deleteNode = (list) => {
//          return list.reduce((acc, item) => {

//          if (item.id === id) {
//             return acc; // skip this item (delete)
//          }

//       if (item.children && item.children.length > 0) {
//         const updatedChildren = deleteNode(item.children);
//         // create a new item only when children changed (immutability)
//         if (updatedChildren.length !== item.children.length) {
//           acc.push({ ...item, children: updatedChildren });
//           return acc;
//         }
//       }

//       acc.push(item);
//       return acc;
//     }, []);
//   };
         // 2nd approach
        // const deleteNode = (list) =>{
        //    return list.reduce((acc,item)=>{
        //         if(item.id === id) return acc  //here if we found that item then skip it not add inside acc (for deletion)

        //         if(item?.children?.length > 0){
        //            const NewItem = {
        //             ...item,
        //             children:deleteNode(item?.children)
        //            }
        //            acc.push(NewItem)
        //            return acc
        //         }
        //         acc.push(item)
        //         return acc
        //     },[])
        // }

        setdata((prev)=>{
          return deleteNode(prev)
        })
    }
  return (
    <div>
      <div className='text-center'>
        fil-Explorer
      </div>
      <div className='mt-6'>
          <List data={data} addNodeToList={addNodeToList} handleDelete={handleDelete}  />
      </div>
    </div>
  )
}

export default App2

const List = ({data,addNodeToList,handleDelete}) => {

    const [isExpanded,setIsExpanded] = useState({})
      console.log(isExpanded)
    return (
        <div className='pl-6'>
            {
                data?.map((item)=>{
                    return <div key={item.id} className=''>
                        <div className='flex gap-1'>
                        {item.isFolder && <span onClick={()=>{setIsExpanded((prev)=>({...prev,[item?.name]: !prev[item?.name]}))}} className='cursor-pointer'>{isExpanded[item.name] ? "-" : "+"}</span>}
                        <span>{item.name}</span>
                        {item.isFolder && <button onClick={()=>addNodeToList(item.id)} className='cursor-pointer ml-2'><BiFolder/></button>}
                        <button onClick={()=>handleDelete(item.id)} className=''>❌</button>
                        </div>
                      {isExpanded[item.name] && <div className=''>
                         {
                            item?.children?.length > 0 && <List data={item?.children} addNodeToList={addNodeToList} handleDelete={handleDelete} />
                        }
                       </div>}
                    </div>
                })
            }
        </div>
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
