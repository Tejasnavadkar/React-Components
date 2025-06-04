import { useState } from "react"


const Counter = () => {

    const [count, setCount] = useState<number>(0)

    if(count > 5){
        throw new Error('number should be less than 5 ')
    }


    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{display: "flex", flexDirection:"column",justifyItems:"center"}}>
                    <p style={{textAlign:"center"}}>{count}</p>
                    <button onClick={() => setCount((prevCount) => prevCount + 1)} >Add</button>
                </div>
            </div>
        </>
    )
}

export default Counter