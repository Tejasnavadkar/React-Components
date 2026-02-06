import './App.css'
import MultiSelectDropdown from './components/MultiSelectDropdown'
import { OPTIONS } from './data'

function App() {

  return (
    <>
      <div>
          <div className='border'>Dropdown list</div>
          {/* <div className='mt-20'>
            <select className='border w-90 py-2 px-2 rounded-md' name="" id="">
               <option value="">
                <input type="text" placeholder='search' />
               </option>
               <option value="">react</option>
               <option value="">javaScript</option>
            </select>
          </div> */}
          <MultiSelectDropdown OPTIONS={OPTIONS}/>

      </div>
    </>
  )
}

export default App
