import { useState } from 'react'
import './App.css'

  const checkboxesData = [
  {
   id: 1,
   name: "Fruits",
   children: [
          {
            id: 2,
            name: "Citrus",
            children: [
                     {
                       id: 3,
                       name: "Orange",
                      },
                      {
                       id: 4,
                       name: "Lemon",
                      }
                       ],
           },
           ]
  },
  {
    id:8,
    name:"Tropical",
    children:[
        {
            id: 8,
            name: "Citrozen",
            children: [
                     {
                       id: 9,
                       name: "mango",
                      },
                      {
                       id: 10,
                       name: "banana",
                      }
                       ],
           },
    ]
  },
  {
     id: 5,
     name: "Berries",
     children: [
           { 
            id: 6,
            name: "Strawberry",
           },
          {
           id: 7,
           name: "Blueberry",
          },
          ]
  },
  {
    id:13,
    name:"apple",

  }
]

function App() {

  // here we create a central state where we store checkbox is check or not using there ids {10:true/flase}
  const [checked,setChecked] =  useState({})

  return (
    <>
     <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div>
          Nested Checkboxes demo
        </div>
        <div className='CheckBoxContainer'>
         <CheckBoxes data={checkboxesData} checked = {checked} setChecked = {setChecked} />
        </div>
     </div>
    </>
  )
}

export default App

// checkbox component here we perform recursion
const CheckBoxes = ({data,checked,setChecked}) => {

  const handleChange = (isChecked,node) => {

    setChecked((prev)=>{
      const newChecked = {...prev,[node.id] : isChecked}

      const updateChildNode = (node) =>{
        // if parent checked then all child to be checked
        node?.children?.forEach((childNode)=>{
          newChecked[childNode.id] = isChecked
          // here we recurse it to update the children of children
          childNode?.children?.length > 0 && updateChildNode(childNode)
        })
      }
       updateChildNode(node)

      //  fn to check agar top level node ke sare children checked hai to parent ko bhi checked karo
       const verifyCheck = (node) => {
        if(!node.children) return newChecked[node.id] || false // agar node ke children nahi hai to yahi se bollean value return karo
          // .every() return true if all elements met true to the condition 
        const isAllChildrenChecked = node?.children?.every((child)=>verifyCheck(child)) // here we check recursively (child ke children)
          newChecked[node.id] = isAllChildrenChecked // agar parent ke sabhi child checked hai to parent ko bhi checked kiya
          return isAllChildrenChecked
       }
      //  here loop the all elements so we can check agar child check hai to parent ko bhi check karo  
       checkboxesData.forEach((node)=>verifyCheck(node))
      return newChecked
    })

  }



  return (
    <>
     {
       data.map((node)=>{
              return (
                 <div key={node.id}>
                  <div>
                    <input type="checkbox" name="" id="" checked={checked[node.id] || false} onChange={(e)=>{handleChange(e.target.checked,node)}} />
                    <span>{node?.name}</span>
                 </div>
                 <div style={{marginLeft:"20px"}}>
                   {
                    node?.children?.length > 0 && <CheckBoxes data={node.children} checked = {checked} setChecked = {setChecked}  /> 
                   }
                 </div>
                 </div>
                )
            })
     }
     
    </>
  )
}







