import React, { useEffect, useMemo, useState } from "react";

const CinemaSeatBooking = ({
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
  // here we creat scalable component so here we accept props from parent to make this reusable

  
  const [seats, setSeats] = useState(initializeSeats);
  const [selectedSeats, setSelectedSeats] = useState([]);


  //   const handleSeatClick = (rowIdx, seatIdx) => {
  //   setSeats(prevSeats => {
  //     // Deep copy the seats array
  //     const newSeats = prevSeats.map((row, rIdx) => {
  //       if (rIdx !== rowIdx) return row;
  //       return {
  //         ...row,
  //         seatno: row.seatno.map((seat, sIdx) => {
  //           if (sIdx !== seatIdx) return seat;
  //           return { ...seat, selected: !seat.selected };
  //         }),
  //       };
  //     });

  //     // Update selectedSeats
  //     const rowId = prevSeats[rowIdx].id;
  //     const seatNumber = prevSeats[rowIdx].seatno[seatIdx].seat;
  //     const seatKey = `${rowId}${seatNumber}`;

  //     setSelectedSeats(prevSelected => {
  //       if (prevSeats[rowIdx].seatno[seatIdx].selected) {
  //         // If already selected, remove from selectedSeats
  //         return prevSelected.filter(s => s !== seatKey);
  //       } else {
  //         // If not selected, add to selectedSeats
  //         return [...prevSelected, seatKey];
  //       }
  //     });

  //     return newSeats;
  //   });
  // };

  // const handleSeatClick = (rowIdx, seatIdx) => {
  //   setSeats(prevSeats => {
  //     const newSeats = prevSeats.map((row, rIdx) => {
  //       if (rIdx !== rowIdx) return row;
  //       return {
  //         ...row,
  //         seatno: row.seatno.map((seat, sIdx) => {
  //           if (sIdx !== seatIdx) return seat;
  //           return { ...seat, selected: !seat.selected };
  //         }),
  //       };
  //     });

  //     // Calculate the new selected state for this seat
  //     const rowId = prevSeats[rowIdx].id;
  //     const seatNumber = prevSeats[rowIdx].seatno[seatIdx].seat;
  //     const seatKey = `${rowId}${seatNumber}`;
  //     const wasSelected = prevSeats[rowIdx].seatno[seatIdx].selected;
  //     // Use the toggled value
  //     setSelectedSeats(prevSelected => {
  //       if (!wasSelected) {
  //         // Now selected, add to list
  //         console.log("hey")
  //         return [...prevSelected, seatKey];
  //       } else {
  //         // Now unselected, remove from list
  //         return prevSelected.filter(s => s !== seatKey);
  //       }
  //     });

  //     return newSeats;
  //   });
  // };

  // Update selectedSeats whenever seats state changes
  useEffect(() => {
    const selected = [];
    seats.forEach((row) => {
      row.seatno.forEach((seat) => {
        if (seat.selected) {
          selected.push(`${row.id}${seat.seat}`);
        }
      });
    });
    setSelectedSeats(selected);
  }, [seats]);

  const initializeSeats = useMemo(() => {
    let seats = [];
    for (let rows = 0; rows < layout.rows; rows++) {
      let id = String.fromCharCode(65 + rows);
      let seatno = [];
      for (let seat = 1; seat <= layout.seatPerRow; seat++) {
        seatno.push({ seat, selected: false });
      }
      seats.push({
        id,
        seatno: seatno,
      });
    }
    console.log("seats", seats);
    return seats;
  }, [layout, seatTypes, bookedSeat]); // here jab bhi seats ke layout,seatTypes and booked seats me changes hoga seat arrangement change hogi

  const handleSeatClick = (rowIdx, seatIdx) => {
    setSeats((prevSeats) =>
      prevSeats.map((row, rIdx) => {
        if (rIdx !== rowIdx) return row;
        return {
          ...row,
          seatno: row.seatno.map((seat, sIdx) => {
            if (sIdx !== seatIdx) return seat;
            return { ...seat, selected: !seat.selected };
          }),
        };
      })
    );
  };

  // const bookSeats = () => {
  //   console.log("book")
  //      let newSeats = [] 
  //      selectedSeats?.map((seat)=>{
  //       let Id_No = seat.split("")
  //       let bookedSeatIndex = seats.findIndex((elem)=>elem.id == Id_No[0])
  //       seats[bookedSeatIndex].seatno[Id_No[1]].booked = true
  //      })
  //      newSeats = seats
  //      setSeats(newSeats)
  // }

  const bookSeats = () => {
  setSeats(prevSeats =>
    prevSeats.map(row => ({
      ...row,
      seatno: row.seatno.map(seat => {
        const seatKey = `${row.id}${seat.seat}`;
        if (selectedSeats.includes(seatKey)) {
          return { ...seat, booked: true, selected: false };
        }
        return seat;
      }),
    }))
  );
};


  console.log("selectedSeat-", selectedSeats);

  return (
    <div className=" bg-gray-50 min-h-screen">
      {/* ui */}

      {/* title */}
      <div className="bg-white max-w-6xl mx-auto p-6 rounded-md shadow-lg ">
        <h1 className="text-2xl font-bold text-center">{title}</h1>
        <p className="text-gray-500 text-lg font-medium text-center">
          {subTitle}
        </p>
        <div className="border my-4 py-4 space-y-2 text-center">
          {/* screen */}
          <div>
            <div className="w-full h-6 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-200 rounded-lg shadow-inner" />
            <p className="font-semibold text-xl">Screen</p>
          </div>

          {/* seat map  */}
          <div className="border flex flex-col items-center gap-4 p-4">
            <div className=" w-full flex flex-col space-y-4">
              {seats.map((item, rowIdx) => {
                return (
                  <div key={item.id} className="flex ">
                    <div className=" flex w-full gap-2 px-3">
                      <div>{item.id}</div>
                      <div className="flex justify-evenly w-full">
                        {item.seatno.map((seat, seatIdx) => {
                          return (
                            <div className="flex" key={seatIdx}>
                              <span
                                onClick={() => handleSeatClick(rowIdx, seatIdx)}
                                className={` inline-block px-2 py-1 ${
                                  seat.selected
                                    ? "bg-green-400 text-white"
                                    : "bg-gray-400"
                                } ${seat?.booked ? 'bg-red-600 text-white' : 'bg-gray-400'} `}
                              >
                                {seat.seat}
                              </span>
                              {seatIdx + 1 === layout?.aislePosition && (
                                <div className=" w-9"></div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="my-4 text-center">
            <span className="font-semibold">Selected Seats: </span>
            {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
          </div>

          {/* legend  */}
          {/* summary  */}
          {/* book button */}

          <div>
            {selectedSeats.length > 0 && <button onClick={bookSeats} className="bg-green-400 px-2 py-1 rounded-md ">Book Tickets</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinemaSeatBooking;
