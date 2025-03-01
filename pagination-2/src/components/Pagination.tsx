


type PaginatioType = {
    noOfPages: number,
    currentPage: number
    setCurrentPage: (val: number) => void
}

const Pagination = ({
    noOfPages,
    currentPage,
    setCurrentPage
}: PaginatioType) => {
    return (

        <div>
            <span onClick={() => setCurrentPage((prev: number) => prev - 1)} style={{ cursor: 'pointer', display: `${currentPage == 0 ? 'none' : ''}` }}>◀</span>
            {[...Array(noOfPages).keys()].map((item) => <span onClick={() => setCurrentPage(item)} style={{ border: '1px solid', padding: '5px', margin: '2px', cursor: 'pointer', backgroundColor: `${currentPage === item ? 'black' : ''}`, color: `${currentPage === item ? 'white' : ''}` }}>{item}</span>)}
            <span onClick={() => setCurrentPage((prev: number) => prev + 1)} style={{ cursor: 'pointer', display: `${currentPage == noOfPages - 1 ? 'none' : ''}` }}>▶</span>
        </div>

    )
}

export default Pagination
