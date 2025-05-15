import React, { useRef, useState } from 'react'

const DragAndDrop = ({ initialData }) => {

    const [data, setData] = useState(initialData)
    const dragItem = useRef() // here we select the item that we drag
    const dragContainer = useRef()  // here we select the container from we drag element (source container)

    const DragStart = (e, item, container) => {
        e.target.style.opacity = '0.5'; // Set the opacity to 50% when we drag
        dragItem.current = item
        dragContainer.current = container

        console.log('dragItem--', dragItem)
        console.log('dragContainer--', dragContainer)
    }

     const DragEnd = (e) => {
        e.target.style.opacity = '1'; // Set the opacity to 1 when we drop/reverse 
    }

    const HandleDrop = (e, container) => {

        const item = dragItem.current
        const sourceContainer = dragContainer.current
        setData((prev) => {
            const newData = { ...prev }
            newData[sourceContainer] = newData[sourceContainer].filter((i) => i != item) // remove item from prev(source conatiner)
            newData[container] = [...newData[container], item] // add item to new/destination conatiner
            return newData
        })
        //api call
    }

    const handleDragOver = (e) => { // byDefault html not allow to drop element in div container so we need to prvent default element
        e.preventDefault()

    }

    return (
        <div>
            <h1>Drag And Drop</h1>
            <div className='border flex justify-between px-2 bg-gray-200 p-4'>
                {
                    Object.keys(data).map((container) => (
                        <div
                            onDrop={(e) => HandleDrop(e, container)}
                            onDragOver={handleDragOver} // byDefault html not allow to drop element in div container so we need to prvent default element
                            className='space-y-4'>
                            <div className='text-xl font-bold'>{container}</div>
                            <div
                                className='space-y-2'
                            >
                                {
                                    data[container].map((item) => (
                                        <div
                                            draggable
                                            onDragStart={(e) => DragStart(e, item, container)}
                                            onDragEnd={(e) => DragEnd(e)}
                                            className='bg-white p-2 cursor-move'>
                                            {item}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DragAndDrop
