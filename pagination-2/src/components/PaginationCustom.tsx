import React from "react";

type PaginationProps = {
  noOfPages: number;
  currentPage: number;
  setCurrentPage: (val: number) => void;
};

// same as shadcn but custom

const PaginationCustom = ({ noOfPages, currentPage, setCurrentPage }: PaginationProps) => {
  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < noOfPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const SIBLINGS = 1;  // sibling decide karega ki active state ke near kitne buttons honge

    pageNumbers.push(0);

    const start = Math.max(1, currentPage - SIBLINGS);
    const end = Math.min(noOfPages - 2, currentPage + SIBLINGS);

    if (start > 1) {
      pageNumbers.push("start-ellipsis");
    }

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }

// Example: If currentPage = 5 and noOfPages = 10
// start = Math.max(1, 5 - 1) = 4
// end = Math.min(10 - 2, 5 + 1) = 6
// So using loop will show pages 4, 5, and 6

    if (end < noOfPages - 2) {
      pageNumbers.push("end-ellipsis");
    }

    if (noOfPages > 1) {     // always add last element ie total number of pages
      pageNumbers.push(noOfPages - 1);
    }

    console.log('pagenumbers--',pageNumbers)

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center mt-6 space-x-2">
      <button
        disabled={currentPage === 0}
        onClick={handlePrevious}
        className={`px-3 py-2 rounded-md border transition ${
          currentPage === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        {"<"}
      </button>

      {getPageNumbers().map((pageIndex, idx) => (
        <React.Fragment key={idx}>
          {pageIndex === "start-ellipsis" || pageIndex === "end-ellipsis" ? (
            <span className="px-2">...</span>
          ) : (
            <button
              className={`px-3 py-2 rounded-md border transition ${
                currentPage === pageIndex ? "bg-blue-600 text-white" : "bg-white hover:bg-gray-200"
              }`}
              onClick={() => setCurrentPage(pageIndex as number)}
            >
              {(pageIndex as number) + 1}
            </button>
          )}
        </React.Fragment>
      ))}

      <button
        disabled={currentPage === noOfPages - 1}
        onClick={handleNext}
        className={`px-3 py-2 rounded-md border transition ${
          currentPage === noOfPages - 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        {">"}
      </button>
    </div>
  );
};

export default PaginationCustom;
