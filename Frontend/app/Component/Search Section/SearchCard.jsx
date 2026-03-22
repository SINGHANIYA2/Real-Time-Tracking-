"use client"
import { useState } from "react";

function SearchCard() {
    const [active, setActive] = useState(false);
    return (
        <div className="flex">
            <div className="w-full bg-[linear-gradient(7deg,rgba(81,140,36,0.21)_0%,rgba(9,9,121,0.87)_0%,rgba(38,131,212,0.62)_100%,rgba(255,255,255,1)_0%,rgba(50,135,54,1)_0%)] ">
                <div className="relative flex justify-center items-center
            h-[140px] text-white border-1">
                    <div className=" h-[80px] absolute flex justify-between bg-neutral-50 -bottom-[40px] min-w-[900px] rounded-[40px]  transform-al
             duration-300 border-2 shadow-2xs hover:shadow-xl hover:translate-y-[.8px] hover:translate-x-[.8px] transition-all duration-400">
                        <input type="" placeholder="Choose Starting Point" className="text-gray-500 outline-0 flex pl-[40px] placeholder:font-sans text-[18px]" />
                        <img src="/swap.png" alt="" className={`w-[30px] h-[30px] my-auto ml-[120px] cursor-pointer transition-all duration-700 ${active ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"}`} onClick={() => setActive(!active)} />
                        <input type="text" placeholder="Choose Destination" className="text-gray-500 outline-0 ml-[120px] placeholder:font-sans text-[18px]" />
                        <div></div>
                        <img src="search.png" alt="" className={`w-[40px] h-[40px] mt-[18px] transition-all duration-200 cursor-pointer hover:translate-x-[.9px] hover:-translate-y-[0.9px] mr-[15px]`} />
                    </div>
                </div>
            </div>
        </div>


    );
}
export default SearchCard;