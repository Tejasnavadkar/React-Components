import React, { useMemo, useState } from "react";

// this component follows optimize approach
const CinemaSeatBooking2 = ({
  layout = {
    rows: 8,
    seatPerRow: 12,
    aislePosition: 6,
  },
  seatTypes = {
    regular: { name: "regular", price: "150", rows: [0, 1, 2] }, // here rows meanse kitne rows regular honge
    premium: { name: "premium", price: "250", rows: [3, 4, 5] },
    vip: { name: "vip", price: "350", rows: [6, 7] },
  },
  bookedSeat = [],
  currency = "₹",
  onBookingComplete = () => {},
  title = "Cinema Hall Booking",
  subTitle = "Select Your Preferred seats",
}) => {

  const colors = [
       "blue",
       "purple",
       "yellow",
       "green",
       "red",
       "indigo",
       "pink",
       "gray",
];


  const getSeatInfo = (row) => {
    // here we return seat ainfo like price, color, type
    const seatTypeEntries = Object.entries(seatTypes) // convert object into array with key
    
    for(let i = 0 ; i < seatTypeEntries.length ; i++){
      const [type,config] = seatTypeEntries[i]
      
      if(config.rows.includes(row)){
        let color = colors[i % colors.length] // it will fetch the respective color with respect to that particulr row
        return {type:type,color,...config}
      }
    }

    const [firstType,firstConfig] = seatTypeEntries[0] 
    return {type:firstType,color:colors[0],...firstConfig}  // default    

  };

  const handleSeatClick = (rowIndex, seatIndex) => {
    //seat click logic
    console.log({ rowIndex, seatIndex }); // o/p {rowIndex: 0, seatIndex: 1}
  };

  const getColorClass = (seatColor) =>{

  }

  const getSeatClassName = (seat) => {
    const baseClass = "w-8 h-8 sm:w-10 sm:h-10 1g:w-12 lg:h-12 m-1 rounded-t-lg border-2 cursor-pointer transition-all duration-200 flex items-center justify-center text-xs sm:text-sm font-bold bg-blue-100 border-blue-300  text-blue-800"; // these styling for regular/default seats

    // more conditions resepect to the seat type seat.type like this
    if (seat.status === "booked") {
      return `${baseClass} bg-gray-400 border-gray-500 text-gray-600 cursor-not-allowed `
  }
   if (seat.selected) {
     return `${baseClass} bg-green-500 border-green-600 text-white transform scale-110;`
  }

    return `${baseClass} ${getColorClass(seat.color)}` // color with respective to seat color 

  };
  const renderSeatSection = (seatRow, startIndex, endIndex) => {
    return seatRow.slice(startIndex, endIndex).map((seat, index) => {
      // here we not render all seats we return some seats and title for more info
      return (
        <div
          key={index}
          className={getSeatClassName(seat)}
          title={`${seat.id}-${getSeatInfo(seat.row)?.name || "regular"}`}
          onClick={() => handleSeatClick(seat.row, startIndex + index)}
        >
          {startIndex + index + 1}
        </div>
      );
    });
  };

  const initilizeSeats = useMemo(() => {
    // now here we write logic to create seats array so we can render it on screen
    let seats = []; // this array consists array of seats object [[{id:'A1',row:0,seat:0,type:'regular',color:'blue',..},{},{}],[{},{},{}]]
    for (let row = 0; row < layout.rows; row++) {
      let seatRow = [];
      let seatTypeInfo = getSeatInfo(row)
    //  console.log('seatTypeInfo--', seatTypeInfo)
      for (let seat = 0; seat < layout.seatPerRow; seat++) {
        let seatId = `${String.fromCharCode(65 + row)}${seat + 1}`; // e.g A1
        seatRow.push({
          id: seatId,
          row,
          seat,
          type: seatTypeInfo?.type || "regular",
          price: seatTypeInfo?.price || "150",
          color: seatTypeInfo?.color || "blue",
          status: bookedSeat.includes(seatId) ? "booked" : "available",
          selected: false,
        });
      }
      seats.push(seatRow);
    }
    console.log("seats--", seats);
    return seats;
  }, [layout, seatTypes, bookedSeat]);

  const [seats, setSeats] = useState(initilizeSeats);
  const [selectedSeats,setSelectedSeats] = useState([])

  return (
    <div className=" bg-gray-50 min-h-screen">
      {/* ui */}

      <div className="bg-white max-w-6xl mx-auto p-6 rounded-md shadow-lg ">
        {/* title */}
        <h1 className="text-2xl font-bold text-center">{title}</h1>
        <p className="text-gray-500 text-lg font-medium text-center">
          {subTitle}
        </p>
        <div className="border my-4 py-4 space-y-2 text-center">
          {/* screen */}
          <div>
            <div className="w-full h-6 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-lg shadow-inner" />
            <p className="font-semibold text-xl">Screen</p>
          </div>

          {/* seat map window  */}

          <div className="border border-red-500 ">
            <div className="flex flex-col items-center">
              {seats?.map((row, rowIndex) => (
                <div key={rowIndex} className="flex items-center gap-2">
                  <span className="">{String.fromCharCode(65 + rowIndex)}</span>
                  {renderSeatSection(row, 0, layout.aislePosition)}{" "}
                  {/* here we not render all seats directly we create a new function and we pass first and last position/index */}
                  {/* aisle space*/}
                  <div className="w-10"></div>
                  {renderSeatSection(
                    row,
                    layout.aislePosition,
                    layout.seatPerRow
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* legend  */}
          {/* summary  */}
          {/* book button */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CinemaSeatBooking2;
