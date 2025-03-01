import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  
  type PaginationProps = {
    noOfPages: number
    currentPage: number
    setCurrentPage: (val: number) => void
  }
  
  export function PaginationShadcn({ noOfPages, currentPage, setCurrentPage }: PaginationProps) {
    // Handle previous page click
    const handlePrevious = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1)
      }
    }
  
    // Handle next page click
    const handleNext = () => {
      if (currentPage < noOfPages - 1) {
        setCurrentPage(currentPage + 1)
      }
    }
  
    // Generate the page numbers to display
    const getPageNumbers = () => {
      const pageNumbers = []
      const SIBLINGS = 1 // Number of pages to show on each side of current page
  
      // Always include first page
      pageNumbers.push(0)
  
      // Calculate range around current page
      const start = Math.max(1, currentPage - SIBLINGS)
      const end = Math.min(noOfPages - 2, currentPage + SIBLINGS)
  
      // Add ellipsis after first page if needed
      if (start > 1) {
        pageNumbers.push("start-ellipsis")
      }
  
      // Add pages around current page
      for (let i = start; i <= end; i++) {
        pageNumbers.push(i)
      }
  
      // Add ellipsis before last page if needed
      if (end < noOfPages - 2) {
        pageNumbers.push("end-ellipsis")
      }
  
      // Always include last page
      if (noOfPages > 1) {
        pageNumbers.push(noOfPages - 1)
      }
  
      return pageNumbers
    }
  
    return (
      <Pagination className="my-4">
        <PaginationContent>
          {currentPage > 0 && (
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  handlePrevious()
                }}
              />
            </PaginationItem>
          )}
  
          {getPageNumbers().map((pageIndex, idx) => (
            <PaginationItem key={idx}>
              {pageIndex === "start-ellipsis" || pageIndex === "end-ellipsis" ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  href="#"
                  isActive={currentPage === pageIndex}
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentPage(pageIndex as number)
                  }}
                >
                  {(pageIndex as number) + 1}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
  
          {currentPage < noOfPages - 1 && (
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  handleNext()
                }}
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    )
  }
  
  