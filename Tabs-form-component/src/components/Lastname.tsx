import React from 'react'

interface propsType{
    lastName:string,
    setLastname:(value:string)=>void
}

const Lastname = ({lastName,setLastname}:propsType) => {
  return (
    <div>
      <label htmlFor="">LastName</label>
      <input 
      type="text" 
      value={lastName}
      onChange={(e)=>setLastname(e.target.value)}
      placeholder='lastname..' 
      />
    </div>
  )
}

export default Lastname
