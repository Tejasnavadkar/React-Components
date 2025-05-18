import React from 'react'

interface inputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value:string
}

const InputField:React.FC<inputProps> = ({onChange,value}) => {
  return (
        <input onChange={onChange} value={value} type="text" placeholder='Enter a task ' className=' outline-none rounded-md w-9/10 px-3' />
  )
}

export default InputField
