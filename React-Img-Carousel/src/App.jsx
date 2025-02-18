
import './App.css'
import Carousel from './Components/Carousel'
import {slides} from './Data/CarouselData.json'

function App() {
 

  return (
    <>
      <div>
          <Carousel slides={slides} />
      </div>
    </>
  )
}

export default App
