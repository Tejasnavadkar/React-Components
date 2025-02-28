

interface propsType { 
  email:string,
  setEmail:(value:string)=>void
}

const Email = ({email,setEmail}:propsType) => {

  return (
    <div>
        <label htmlFor="">Email</label>
        <input 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        type="email" 
        placeholder='Email...' 
        />
    </div>
  )
}

export default Email
