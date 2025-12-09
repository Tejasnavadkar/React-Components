
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

// checkbox component
const CheckBoxes = () => {

  return (
    <>
      
    </>
  )
}
  

  return (
    <>
     <div>
        <div>
          Nested Checkboxes demo
        </div>
     </div>
    </>
  )
}

export default App





