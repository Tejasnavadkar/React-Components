import { useErrorBoundary } from "react-error-boundary"


const FallBackUi = () =>{
    const {resetBoundary} = useErrorBoundary()
    return (
      <div style={{fontSize:"1rem"}}>
        Opps! something wrong
         <button onClick={resetBoundary}>Try again</button>
      </div>
    )
  }
  export default FallBackUi