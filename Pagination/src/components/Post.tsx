import React from 'react'
import {Data} from '../App'

const Post = (item:Data) => {
    console.log('item--',item)
  return (
    <div>
      <div className='flex h-[500px] w-[300px] rounded-lg overflow-hidden'>
          <img className='h-full object-cover ' src={item.download_url} alt="" /> 
      </div>
    </div>
  )
}

export default Post
