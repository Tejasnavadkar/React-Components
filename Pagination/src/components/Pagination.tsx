
type PaginationProps = {
    pageNo: number,
    setPageNo: (pageNo: number) => void
}

const Pagination = ({ pageNo, setPageNo }: PaginationProps) => {
    /// now we need show current button prve 3 and next 3 
    const prevThreeNoArray = Array.from({ length: 3 }, (_, idx) => pageNo - 1 - idx).filter((value) => value > 0).reverse() // here we create a an array with prev 3 element and next 4 element only above 0
    const nextFourNoArray = Array.from({ length: 4 }, (_, idx) => pageNo + idx).filter((value) => value > 0) 

    const buttonArray = [...prevThreeNoArray, ...nextFourNoArray]

    const handleNext = () => {
        setPageNo(pageNo + 1)
    }

    const handlePrev = () => {
        setPageNo(pageNo - 1)
    }

    return (
        <div className='flex justify-evenly mt-4 '>
            {pageNo > 1 && (<button onClick={handlePrev} className='bg-black px-4 py-2 rounded-md text-white'>{"<"}</button>)}
            {/* <button onClick={()=>setPageNo(pageNo)} className='bg-black px-4 py-2 rounded-md text-white'>{pageNo}</button> */}
            {buttonArray.map((item) => {
                return <button onClick={() => setPageNo(item)} className={` px-4 py-2 rounded-md  ${item === pageNo ? 'bg-white text-black border ' : 'bg-black text-white'}`}>{item}</button>
            })}
            <button onClick={handleNext} className='bg-black px-4 py-2 rounded-md text-white'>{">"}</button>
        </div>
    )
}

export default Pagination
