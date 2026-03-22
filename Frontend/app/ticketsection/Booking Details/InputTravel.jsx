function InputTravel({ first, second }) {
    return (
        <div className=" flex gap-[40px] ">
            <datalist id="cities" className="">
                <option value="Jaipur" />
                <option value="Delhi" />
                <option value="Mumbai" />
                <option value="Bangalore" />
            </datalist>

            <div className="">
                <div className="flex">
                    {/* <img src="" alt="" /> */}
                    <p className="font-medium font-sans">{first}</p>
                </div>
                <input list="cities" placeholder="Choose Boarding Point" className="rounded-[8px] h-[50px] w-[300px] border-[2px] border-gray-300 mt-[4px] pl-[10px] focus:outline-none placeholder:opacity-50 placeholder:font-sans" />
            </div>
            <div>
                <div className="flex">
                    {/* <img src="" alt="" /> */}
                    <p className="font-medium font-sans">{second}</p>
                </div>
                <input list="cities" placeholder="Choose Destination" className="rounded-[8px] h-[50px] w-[300px] focus:outline-none border-[2px] border-gray-300 mt-[4px] pl-[10px] placeholder:opacity-50 placeholder:font-sans" />
            </div>
        </div>
    );
}
export default InputTravel;