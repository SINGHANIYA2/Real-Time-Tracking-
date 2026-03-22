"use client"
import Livemap from "./Livemap";
import UpcomingArrival from "../SideBar/UpcomingArrivals"
export default function LiveTracking() {
    return (
        <div className="p-[40px] flex bg-gray-200 gap-8">
            <div className="p-[20px] rounded-2xl bg-white transition-all duration-300 hover:translate-x-[.8px] hover:-translate-y-[.8px] hover:shadow-2xl">
                <div className="w-[400px]">
                    <UpcomingArrival></UpcomingArrival>
                </div>
            </div>
            <div className=" rounded-2xl p-[21px] my-auto bg-white h-[70vh] w-[60vw] left-10 transition-all duration-300 hover:translate-x-[.8px] hover:-translate-y-[.8px] hover:shadow-2xl">
                <Livemap />
            </div>
        </div>
    )
}