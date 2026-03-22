function Input_Date_And_Time({ first, second }) {
    return (
        <div className="flex gap-[40px]">
            <div className="">
                <div className="flex">
                    {/* <img src="" alt="" /> */}
                    <p className="font-medium font-sans">{first}</p>
                </div>
                <input type="date" placeholder="Select Date" className="rounded-[8px] h-[50px] w-[300px] border-[2px] border-gray-300 mt-[4px] pl-[10px] focus:outline-none pr-[5px]" />
            </div>
            <div>
                <div className="flex">
                    {/* <img src="" alt="" /> */}
                    <p className="font-medium font-sans">{second}</p>
                </div>
                <input type="time" placeholder="Select Date" className="rounded-[8px] h-[50px] w-[300px] focus:outline-none border-[2px] border-gray-300 mt-[4px] pl-[10px] pr-[5px] " />
            </div>
        </div>
    );
}
export default Input_Date_And_Time;