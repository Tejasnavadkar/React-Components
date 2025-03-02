import { useEffect, useState } from 'react'

const SimpleProgressWithButtons = () => {
    const [progress, setProgress] = useState(0)
    const [animatedProgress,setAnimatedProgress] = useState(0)
    const steps = 4
    const percentage = Math.round((progress / steps) * 100)

    useEffect(()=>{
        setTimeout(()=>setAnimatedProgress(75),1000)
    },[])
    return (
        <>
            <div style={{ height: '10px', marginTop: '4rem', borderRadius: '20px', border: '1px solid' }}>
                <div 
                style={{ height: '100%', 
                    backgroundColor: 'red', 
                    borderRadius: '20px', 
                    width:`${percentage}%`,
                    // transform:`translateX(${animatedProgress-100}%)`,  // here we move intir bar to left-right
                    transition:"0.5s ease-in" 
                }}
                role='progress'
                aria-valuenow={percentage}
                aria-valuemin={0}
                aria-valuemax={100}
                ></div>
            </div>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <button style={{backgroundColor:'#155dfc', padding:'0.3rem', borderRadius:'5px'}} disabled={progress === 0} onClick={() => setProgress(prev => prev - 1)}>prev</button>
                <button style={{backgroundColor:'#155dfc', padding:'0.3rem', borderRadius:'5px'}} disabled={progress === steps} onClick={() => setProgress(prev => prev + 1)}>next</button>
            </div>
        </>
    )
}

export default SimpleProgressWithButtons
