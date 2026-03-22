export default function Booking_Button({ price }) {
    return (
        <div className="flex">
            <button className="rounded-[8px] h-[67px] w-[640px] mt-[20px] bg-sky-700 cursor-pointer hover:bg-sky-800 transition-all duration-300 focus:outline-none flex justify-center items-center gap-2 hover:translate-x-[.8px] hover:-translate-y-[.8px] hover:shadow-xl shadow-blue-100">
                <img src="/ticket.png" alt="" className="w-[30px] h-[30px] text-white" />
                <p className="font-semibold text-[16px] font-sans text-white">Book Ticket - {price}</p>
            </button>
        </div>
    );
} 