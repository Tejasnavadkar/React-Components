import { useEffect, useRef, useState } from 'react'
import "./Stepper.css"


const Stepper = ({ Steps }) => {

    const stepRef = useRef([])
   const [activeStep,setActiveStep] = useState(1)
   const [margin,setMargin] = useState({
    marginLeft:0,
    marginRight:0
   })
//    const [isComplete,setIsComplete]= useState(false)
// .offSetWidth() it gives width of current element

 
 useEffect(()=>{
    console.log('stepRef',stepRef.current[0].offsetWidth)
    setMargin({
        marginLeft:(stepRef.current[0].offsetWidth)/2,
        marginRight:(stepRef.current[Steps.length-1].offsetWidth)/2
    })

    // console.log('margin--',margin)
 },[Steps,stepRef])

const handleClick = () => {
    setActiveStep(activeStep + 1)
}


const calculateProgressWidth = () =>{
    return ((activeStep-1)/(Steps.length - 1)) * 100;
}


    return (
        <>
        <div className='container'>
            <div className='stepper'>
                {Steps.map((item, idx) => {
                    return <div 
                    ref={ele=> (stepRef.current[idx] = ele)}  // here we create ref as array and store every element inside it to get there width using offsetWidth
                    key={idx} 
                    className='step'
                    >
                        <div className={`index ${activeStep == idx + 1 ? 'active-index' : (idx + 1 < activeStep ? 'completed' : '') } `} >{idx + 1 < activeStep ? (<span>&#10003;</span>) : (idx + 1)}</div>
                        <div className='step-name'>{item.name}</div>
                    </div>
                })}
                <div className="progress-bar" style={{
                    width:`calc(100% - ${margin.marginLeft + margin.marginRight}px)`,
                    marginLeft:margin.marginLeft,
                    marginRight:margin.marginRight
                }}>
                    <div className="progress" style={{width:`${calculateProgressWidth()}%`}} ></div>
                </div>
            </div>
            
        </div>

        <button onClick={handleClick}>Next</button>
        </>
    )
}

export default Stepper
