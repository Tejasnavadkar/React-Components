
import { useState } from 'react'
import './App.css'

function App() {

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
const CheckBoxes = ({data}) => {

  return (
    <>
     {
       data.map((item)=>{
              return (
                 <div key={item.id}>
                  <div>
                    <input type="checkbox" name="" id=""  />
                    <span>{item?.name}</span>
                 </div>
                 <div style={{marginLeft:"20px"}}>
                   {
                    item?.children?.length > 0 && <CheckBoxes data={item.children}  /> 
                   }
                 </div>
                 </div>
                )
            })
     }
     
    </>
  )
}







