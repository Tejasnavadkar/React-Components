import { useEffect, useState } from 'react'
import './App.css'
import Firstname from './components/Firstname'
import Lastname from './components/Lastname'
import Email from './components/Email'
import Interest from './components/Interest'

function App() {
  const [active, setActive] = useState(0)     // here all data is in central place(parent component) becoz of persistance across the components
  const [firstName, setFirstname] = useState("")
  const [lastName, setLastname] = useState("")
  const [email, setEmail] = useState("")

  const tabs = ["FirstName", "LastName", "Email"]

  useEffect(() => {
    console.log(firstName)
  }, [firstName])

  const formComponent = (active: number) => {

    switch (active) {
      case 0:
        return <Firstname firstName={firstName} setFirstname={setFirstname} />
        break;

      case 1:
        return <Lastname lastName={lastName} setLastname={setLastname} />
        break;

      case 2:
        return <Email email={email} setEmail={setEmail} />
        break;


      default:
        break;
    }

  }

  const handleNext = async () => {

    if (active === 0 && !firstName) {   // if validate then only you can move further
      alert("firstname is required")
      return
    }
    if (active === 1 && !lastName) {
      alert("lastName is required")
      return
    }
    if (active === 2 && !email) {
      alert("email is required")
      return
    }


    if (active == tabs.length - 1) {
      console.log("api call-", { firstName, lastName, email })
    } else {
      setActive(active + 1)
    }

  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", width: "50%", margin: "auto", marginTop: "2rem" }}>
        {tabs.map((item, idx) => {
          return <span key={idx} onClick={() => setActive(idx)} style={{ backgroundColor: `${idx < active ? "blue" : (idx === active ? "green" : "gray")}`, padding: "0.5rem", borderRadius: "10px", color: "white" }}>{item}</span>
        })}
      </div>

      <div style={{ width: "50%", margin: "auto", marginTop: "2rem" }}>
        {formComponent(active)}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: "2rem" }}>
        <button disabled={active == 0} onClick={() => setActive(active - 1)}>prev</button>
        <button
          // disabled={active === tabs.length - 1} 
          onClick={handleNext}>
          {active == tabs.length - 1 ? "Submit" : "Next"}</button>
      </div>
      <div>
        {/* <Interest/> */}
      </div>
    </>
  )
}

export default App

// another way

// const tabs = [
//   {
//     name:"FirstName",
//     component:"Firstname",
//     validate:()=>{   instead of creating fn in global we create it within particular tab 
//          const err = {}
//          if(!Firstname || Firstname <= 2 ){
//              err.name = "name is not valid"
//          }
//          SetError(err) // to show errors in form
//          return err.Firstname ? false : true
// }
//   }, 
//   {
//     name:"LastName",
//     component:"Lastname"
//   }, 
//   {
//     name:"Email",
//     component:"Email"
//   }
// ]

// const activeComponent = tabs[activeTab].component

// const handelNext = () =>{
//   if(tabs[activeTab].validate()){    // agar validate ho tabhi next page pe jao
//     setactive(active + 1)
//   }
// }(ak saini)
