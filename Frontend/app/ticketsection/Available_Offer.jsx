export default function Available_Offer() {
    return (
        <div className="flex">
            <div className="w-full flex flex-col p-[18px] mt-[20px] rounded-xl bg-neutral-100 gap-5 transition-all duration-500 hover:shadow-2xl hover:translate-x-[.8px] shadow-xl hover:-translate-y-[.8px]">
                <p className="font-sans font-bold opacity-70 gap-4">
                    <span><img src="" alt="" /></span>
                    Available Offers
                </p>
                <div className="flex justify-between border-2 border-dashed font-sans border-green-600 rounded-[6px] p-[12px]">
                    <p className="flex flex-col text-[14px]"><b className="text-[15px] font-sans opacity-80 tracking-wider">FIRST20</b>20% off first booking</p>
                    <button className="cursor-pointer w-[70px] h-[30px] my-auto bg-green-600 rounded-[10px] text-white font-semibold">Apply</button>
                </div>
                <div className="flex justify-between border-2 border-dashed font-sans border-blue-600 rounded-[6px] p-[12px]">
                    <p className="flex flex-col text-[14px]"><b className="text-[15px] font-sans opacity-80 tracking-wider">FIRST20</b>20% off first booking</p>
                    <button className="cursor-pointer w-[70px] h-[30px] my-auto bg-blue-600 rounded-[10px] text-white font-semibold">Apply</button>
                </div>
            </div>
        </div>
    );
}