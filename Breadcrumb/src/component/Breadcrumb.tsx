import React from 'react'
import {Data} from '../App'
import { Link, useLocation } from 'react-router-dom'


// interface Props{
//     data:Data
// }
const Breadcrumb:React.FC<Props> = ({data}) => {

   const {pathname} = useLocation()

   const path = pathname.split('/').filter((x)=>x)
  //  let BreadCrumbPath = ""

   // here we create breadcrum on the basis of url
   //eg:- url - /products/4 
   // breadcrumb - Home / products / 4

//    console.log('pathname',pathname) 
//    console.log('path',path)
  return (
    <div className='p-10'>
        {path.length > 0 && <Link to={'/'}>Home</Link>}
        {path.map((name,idx)=>{
            // BreadCrumbPath += `/${name}`

            if(idx === path.length - 1){
                return <span>/{name}</span>
            }

            return <Link to={`/${name}`}>/{name}</Link>
        })}
    </div>
  )
}


export default Breadcrumb




    // <div>
    //   {data.map((item,idx)=>{
    //  if(idx < data.length - 1){// not set '/' for last item in array
    //     return <a key={idx} href={`${item.link}`}> 
    //     {item.lable} {idx < data.length-1 && '/'}  
    // </a>
    //  }else{
    //   return  <span className='text-gray-500'>{item.lable}</span>  // agar last element hua to make it palne text 
    //  }
    //   })}
    // </div>
