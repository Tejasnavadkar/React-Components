
import './App.css'
import Post from './components/Post'
import Pagination from './components/Pagination'
import { useEffect, useState } from 'react'
import axios from 'axios'

export type Data = {
  id: string,
  author: string,
  width: number,
  height: number,
  url: string,
  download_url: string
}

function App() {

  const [data, setdata] = useState<Data[] | null>(null)
  const [pageNo,setPageNo] = useState(1)
  const [loading,setLoading] = useState(false)

  async function getData() {
      setLoading(true)
   try {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${pageNo}&limit=4`)
    if (response.status == 200) {
      setdata(response.data)
      setLoading(false)
    }
   } catch (error:any) {
    setLoading(false)
    throw new Error(error)
   }

    console.log('response-', data)
  }

  useEffect(() => {
    getData()
  },[pageNo])


  if (loading) {
    return <div className='h-screen flex justify-center items-center font-bold text-xl'>
      Loading...
    </div>
  }


  return (
    <>
      <div className='w-full h-screen'>
        <div className=' w-[95%] m-auto flex flex-col items-center'>
          <div className='flex gap-4 mt-6'>
            {data.map((item, idx) => {

              return <Post key={idx} {...item} />
            })}

          </div>
        </div>
        <Pagination pageNo={pageNo} setPageNo={setPageNo} />
      </div>
    </>
  )
}

export default App


//https://picsum.photos/v2/list?page=1&limit=4 api with query-params page , limit