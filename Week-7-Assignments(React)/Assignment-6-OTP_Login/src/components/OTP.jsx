import { useRef } from "react"


function OTP (){
   const input1 = useRef()
   const input2 = useRef()
   const input3 = useRef()
   const input4 = useRef()

    return<>
    
    <div className="border border-black bg-gray-900 w-80 h-72 rounded-lg flex flex-col items-center pt-12 gap-3 ">
        
        <div className="text-white text-xl">Login Via OTP</div>
        <div className="flex flex-col items-center gap-3 ">
         
         <div className=" flex gap-2">
            <input ref={input1} onKeyUpCapture={()=>{
                input2.current.focus()
                
            }} className="w-8 h-8 rounded-lg" type="text" />
            <input ref={input2} onKeyUpCapture={()=>{
                input3.current.focus()
                
            }}   className="w-8 h-8 rounded-lg" type="text" />
            <input ref={input3} onKeyUpCapture={()=>{
                input4.current.focus()
                
            }}   className="w-8 h-8 rounded-lg" type="text" />
            <input ref={input4}  className="w-8 h-8 rounded-lg" type="text" />
         </div>
         <button className="text-white border rounded-lg bg-slate-950 px-3 py-1">Login</button>
        </div>
     

 </div>
    
    </>
}
export default OTP






// import { useState } from "react";

// function OTP() {
//   const [otp, setOtp] = useState(["", "", "", ""]);

//   // Handle input change
//   const handleChange = (index, value) => {
//     if (!/^\d*$/.test(value)) return; // Allow only numbers

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     // Move to the next input if a number is entered
//     if (value && index < 3) {
//       document.getElementById(`otp-${index + 1}`).focus();
//     }
//   };

//   // Handle Backspace key
//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       document.getElementById(`otp-${index - 1}`).focus();
//     }
//     if (e.key === "Enter" && index === otp.length - 1 && otp[index]) {
//       handleLogin();
//     }
//   };

//   // Function to handle login (API Call)
//   const handleLogin = async () => {
//     const otpValue = otp.join("");

//     if (otpValue.length !== 4) {
//       alert("Please enter a valid 4-digit OTP");
//       return;
//     }

//     try {
//       const response = await fetch("https://your-api-endpoint.com/verify-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ otp: otpValue }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("OTP Verified Successfully!");
//       } else {
//         alert(data.message || "OTP Verification Failed");
//       }
//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="border border-black bg-gray-900 w-80 h-72 rounded-lg flex flex-col items-center pt-12 gap-3">
//       <div className="text-white text-xl">Login Via OTP</div>
//       <div className="flex flex-col items-center gap-3">
//         <div className="flex gap-2">
//           {otp.map((digit, index) => (
//             <input
//               key={index}
//               id={`otp-${index}`}
//               value={digit}
//               onChange={(e) => handleChange(index, e.target.value)}
//               onKeyDown={(e) => handleKeyDown(index, e)}
//               className="w-8 h-8 rounded-lg text-center"
//               type="text"
//               maxLength="1"
//             />
//           ))}
//         </div>
//         <button
//           onClick={handleLogin}
//           className="text-white border rounded-lg bg-slate-950 px-3 py-1"
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }

// export default OTP;
