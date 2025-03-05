


function Card ({userinfo}){

    return <>
    
    <div className="border border-black bg-gray-900 w-80 h-72 rounded-lg flex flex-col items-center pt-12 gap-3 ">
        
           <div className="text-white text-xl">Login Via OTP</div>
           <div className="flex flex-col items-center gap-3 ">
            <input className="py-2 rounded-lg px text-black" type="text" placeholder="Enter mobile number" />
            <button className="text-white border rounded-lg bg-slate-950 px-3 py-1">Send OTP</button>
           </div>
        

    </div>
    
    </>
}

export default Card