export default function Input_Details() {
    return (
        <div className="flex flex-col gap-5">
            <div>
                <div className="flex">
                    <img src="" alt="" />
                    <p className="font-medium font-sans"> Passenger Name</p>
                </div>
                <input type="text" placeholder="Enter full name" className="rounded-[8px] h-[50px] w-[640px] border-[2px] border-gray-300 mt-[4px] pl-[10px] focus:outline-none pr-[5px] placeholder:font-sans placeholder:opacity-50" />
            </div>
            <div>
                <div className="flex">
                    <img src="" alt="" />
                    <p className="font-medium font-sans"> Email Address</p>
                </div>
                <input type="email" placeholder="Enter your email" className="rounded-[8px] h-[50px] w-[640px] border-[2px] border-gray-300 mt-[4px] pl-[10px] focus:outline-none pr-[5px] placeholder:font-sans placeholder:opacity-50" />
            </div>
            <div>
                <div className="flex">
                    <img src="" alt="" />
                    <p className="font-medium font-sans">Phone Number</p>
                </div>
                <input type="number" placeholder="Enter your number" className="rounded-[8px] h-[50px] w-[640px] border-[2px] border-gray-300 mt-[4px] pl-[10px] focus:outline-none pr-[5px] placeholder:font-sans placeholder:opacity-50" />
            </div>
        </div>
    );
}