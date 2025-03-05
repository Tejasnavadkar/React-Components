import React, { useEffect, useRef, useState } from 'react'
import { categories } from '../data'


const translateAmount = 200
const Carousel = () => {
   const [translate,setTranslate] = useState(0)
   const [showLeftArrow,setShowLeftArrow] = useState<boolean>()
   const [showRightArrow,setShowRightArrow] = useState<boolean>()

   console.log('translet--',translate)
   const ref = useRef<HTMLDivElement>(null)

   useEffect(()=>{

     setShowLeftArrow(translate !== 0)
     setShowRightArrow(translate + ref.current.clientWidth < ref.current?.scrollWidth)
     console.log('show-right',translate + ref.current.clientWidth < ref.current?.scrollWidth)


   },[translate])
  return (
    <div className='overflow-x-hidden relative'>
         <div ref={ref} className='flex whitespace-nowrap gap-1' style={{transform:`translateX(-${translate}px)`}}>
              {categories.map((item,idx)=>{
                return <span className='bg-gray-200 px-2 py-1 rounded-md'>
                    {item}
                </span>
              })}
         </div>
      { showLeftArrow && <button onClick={()=>{
            setTranslate(prev=>{
                 let newTranslate = prev - translateAmount

                 if(newTranslate<=0) return 0
                 return newTranslate
            })
         }} className='absolute top-1/2 -translate-y-1/2 cursor-pointer'>
            ◀
         </button>}

        { showRightArrow && <button onClick={()=>{
            setTranslate(prev => {
                let newwidth = prev + translateAmount
                let totalWidth = ref.current?.scrollWidth
                let clientWidth = ref.current?.clientWidth
                if(newwidth + clientWidth >= totalWidth){
                    return totalWidth - clientWidth
                }

                return newwidth
            })
         }} className='absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer'>
            ▶
         </button>}
    </div>
  )
}

export default Carousel
