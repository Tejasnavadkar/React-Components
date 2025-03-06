import { useState } from 'react'
import './App.css'
import OtpPanel from './components/OtpPanel'

function App() {
  const [number, setNumber] = useState()
  const [showOTPPanel,setShowOTPPanel] =  useState(false)


  const handleInpuChange = (e) => {
    const {value} = e.target
    setNumber(value)

  }

 const handleSubmit = (e) =>{
  e.preventDefault()

  const regex = /^([^0-9]*)$/

  if(number.length < 10 || number.length > 10 || regex.test(number)){
    alert('invalid number')
    return
  }

  // api call

setShowOTPPanel(true)

 }

 const onOtpSubmit = (otp) =>{

  console.log('otp-',otp)
 }

  return (
    <>
      <div style={{ height: "100vh", textAlign: 'center' }}>
        {!showOTPPanel ? (<div>
          <h3>Enter Phone Number</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder='Enter number'
              value={number}
              onChange={handleInpuChange}
            />
            <button type="submit">Proceede</button>
          </form>
        </div>) : (
         <OtpPanel length={4} onOtpSubmit={onOtpSubmit} />
        )}
      </div>
    </>
  )
}

export default App
