import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'
import { ProductCard } from './components/ProductCard';
import Pagination from './components/Pagination';
import { PaginationShadcn } from './components/PaginationShadcn';
import PaginationCustom from './components/PaginationCustom';


// interface Dimensions {
//   width: number;
//   height: number;
//   depth: number;
// }

// interface Review {
//   rating: number;
//   comment: string;
//   date: string;
//   reviewerName: string;
//   reviewerEmail: string;
// }

// interface Meta {
//   createdAt: string;
//   updatedAt: string;
//   barcode: string;
//   qrCode: string;
// }

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  // dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  // reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  // meta: Meta;
  images: string[];
  thumbnail: string;
}




const PAGE_SIZE: number = 10 // ek page pe kitane items show karane hai

function App() {

  const [products, setProducts] = useState<Product[]>([])
  const [currentPage, setCurrentPage] = useState(0)

  const FetchData = async () => {
    const response = await axios.get('https://dummyjson.com/products?limit=500')
    if (response.status === 200) {
      setProducts(response.data.products)
    }
  }

  useEffect(() => {
    FetchData()
  }, [])

  // pagination calculations
  const TOTAL_PRODUCTS = products.length // total products
  const noOfPages = Math.ceil(TOTAL_PRODUCTS / PAGE_SIZE) //ceil(1.2) = 2  // kitane pages honge(buttons) no creates buttons in ui
  const start = currentPage * PAGE_SIZE // jab currentpage 0 hoga to starts bhi 0 jab current 1 hoga tab start 10 and end 20
  const end = start + PAGE_SIZE

  // useEffect(()=>{
  //   console.log('start--',start,'end--',end)
  // },[currentPage])


  //slice(0,10)
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h3> pagination</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '10px' }}>
          {products.slice(start, end).map((product) => {
            return <ProductCard key={product.id} img={product.thumbnail} title={product.title} />
          })}
        </div>
        {/* <Pagination               // custom
            noOfPages={noOfPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            />  */}
        {/* <PaginationShadcn           // in shadcn
          noOfPages={noOfPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        /> */}

        <PaginationCustom           // in withou shadcn
          noOfPages={noOfPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  )
}

export default App


//  ways to create Array
// let buttons = Array.from({length:20},(_,idx)=>idx + 1) o/p array of 1 - 20
// let but = [...Array(20).keys()]  o/p array of 0 - 19




