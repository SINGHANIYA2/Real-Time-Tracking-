import Available_Offer from "./Available_Offer";
function Booking_Summary(props) {
    // const price = props.price;
    let price = 5.01;
    return (
        <div className="w-full flex flex-col">
            <div className="relative rounded-2xl overflow-hidden 
  bg-gradient-to-br from-indigo-400 to-purple-600 p-6 text-white  w-full flex flex-col gap-6" >
                <div className="absolute leading-0 w-48 h-48 -top-10 -right-10 rounded-full bg-white/10"></div>
                <p className="font-sans text-[14px] tracking-widest">BOOKING SUMMARY</p>
                <h1 className="text-[40px] font-bold font-sans">$ {price}</h1>
                <div className="bg-white/10 p-[20px] rounded-xl flex flex-col gap-3 tracking-wide">
                    <p className="font-sans text-white/70 text-[14px] flex justify-between">Base Fare <span>$5.00</span></p>
                    <p className="font-sans  text-white/70 text-[14px] flex justify-between">Base Fare <span>$5.00</span></p>
                    <p className="font-sans text-white/70 text-[14px] flex justify-between">Base Fare <span>$5.00</span></p>
                    <div className="h-[2px] bg-white/50"></div>
                    <p className="flex font-bold text-xl justify-between">Total <span>$5.01</span></p>
                </div>
                <p className="font-sans opacity-80 text-[14px]">
                    <span></span>
                    Secure payment & instant confirmation
                </p>
            </div>
            <Available_Offer></Available_Offer>
        </div >
    );
}
export default Booking_Summary;