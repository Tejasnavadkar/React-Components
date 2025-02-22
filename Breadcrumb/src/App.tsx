
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Breadcrumb from './component/Breadcrumb'
import Home from './pages/home'
import Product from './pages/product'
import ProductList from './pages/productList'

interface item {
  lable:string,
  link?:string  // opional
}

export type Data = item[]

function App() {

  const data:Data = [
    {
      lable:'home',
      link:'/home'
    },
    {
      lable:'edit',
      link:'/home'
    },
    {
      lable:'mobiles'
    }
  ]
  

  return (
    <>
      
       <BrowserRouter>
       <Breadcrumb data={data}/>
         <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/products' element={<ProductList/>} />
            <Route path='/products/:id' element={<Product/>}  />
         </Routes>

       </BrowserRouter>
    </>
  )
}

export default App
