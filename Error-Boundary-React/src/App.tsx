import Counter from './Components/Counter'
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary'
import FallBackUi from './Components/FallBackUi'
import ErrorBoundaryClass from './Components/ErrorBoundaryClass'

function App() {

  const fallbackRenderHandler = ({ error }: FallbackProps) => {  // here we can catch the error and return fallback ui 
    console.log('error is:', error)
    return <FallBackUi />
  }

  return (
    <>
      <ErrorBoundary 
       // fallback={<FallBackUi />} //inside fallback we give fallback ui component 
      fallbackRender={fallbackRenderHandler}
       >  
        <div style={{ display: "flex", flexDirection: "column", justifyItems: "center", gap: "3rem", padding: "4rem" }}>
          <div style={{ border: "2px solid black", display: "flex", justifyContent: "center" }} >
            <span style={{ fontSize: '2rem' }}> Counter App </span>
          </div>
          <div>
            <Counter />
          </div>
        </div>
      </ErrorBoundary>
    </>
  )
}

export default App

// here we are using react-error-boundary package from npm bcoz by default ErrorBoundary component is class based component 
// we also explore class based component ie    <ErrorBoundaryClass></ErrorBoundaryClass>
// by library <ErrorBoundary> </ErrorBoundary> we generaly use this package for errorboundary not custome classbased component