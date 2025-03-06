import React, { useEffect, useRef, useState } from 'react'

const OtpPanel = ({length=4,onOtpSubmit=()=>{}}) => { 
   const [otp,setOtp] = useState(new Array(length).fill(""))  // create an array with empty array 4 elem
   const inputRef = useRef([]) // array bcoz we gonna store all inputs ref

//    console.log('inputref--',inputRef)

   useEffect(()=>{
        if(inputRef.current[0]){
            inputRef.current[0].focus()  // focus on first input field on first render
        }
   },[])

   const handleChange = (idx,e) =>{

    const value = e.target.value

    if(isNaN(value)) return  // if its not a number then return

    const newOtp = [...otp]
    newOtp[idx] = value.substring(value.length-1) // input me kuch bhi type kiya to last wala element lega
    setOtp(newOtp) 

    if(value && idx < length-1 && inputRef.current[idx + 1]){ // use newElems coz setOtp is async if u use it here it might give oldr value(lagech update hot nahi) thats why use newElems  // jab me input clear karunga tab age move nahi hoga
        inputRef.current[idx+1]?.focus()
    }

    // submit trigger

    const combinedOtp = newOtp.join("") // here also if use otp give older value
    
    if(combinedOtp.length === length){
        onOtpSubmit(combinedOtp)
    }
   }

   const handleClick = (idx) =>{  // when i click sets the cursor position to the end of the input value if it already contains a value   

    const input = inputRef.current[idx]
   if(input && input.value){
        input.setSelectionRange(input.value.length,input.value.length) //This line sets the cursor position to the end of the input value. The setSelectionRange method is used to set the start and end positions of the selection. By setting both the start and end positions to input.value.length, the cursor is placed at the end of the input value.
   }

   if(!otp[idx-1]){  // agar previous field empty hai to automatically uspe focus ho jayega
    inputRef.current[otp.indexOf("")].focus()
   }

   }

   const handleKey = (e,idx) => {
    if(e.key =="Backspace" ){
    //   if(!otp[idx]) document.getElementById(`item-${idx - 1}`).focus()
    if(!otp[idx] && idx > 0 ) inputRef.current[idx - 1].focus() // agar input field 0 se jyada hai tabhi backspace ho
    }
   }
  return (
    <div>
      <div>
        <h3>Enter Otp</h3>
        <div>
            {otp.map((item,idx)=>{
                return <input 
                ref={input => inputRef.current[idx] = input}
                id={`item-${idx}`}
                key={idx}
                type="text" 
                value={item}
                onChange={(e)=>handleChange(idx,e)}
                onClick={()=>handleClick(idx)}
                onKeyDown={(e)=>handleKey(e,idx)}
                style={{height:'40px',width:'40px', margin:'0.5rem',textAlign:'center'}}
                // maxLength={1}
                />
            })}
        </div>
      </div>
    </div>
  )
}

export default OtpPanel
