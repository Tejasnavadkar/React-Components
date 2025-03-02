import { useState } from 'react'
// import './App.css'
import ApiTrackingProgressBar from './components/ApiTrackingProgressBar'
import SimpleProgressWithButtons from './components/SimpleProgressWithButtons'

function App() {
 

  return (
    <>
      <div>
         <SimpleProgressWithButtons/>
      </div>

      <div>
        <ApiTrackingProgressBar/>
      </div>
    </>
  )
}

export default App
