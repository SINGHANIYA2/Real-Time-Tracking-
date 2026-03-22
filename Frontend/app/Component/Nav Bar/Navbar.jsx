"use client";
import { useState } from "react";
import Navi_Content from "./Navi_Content"

function Navbar({ setLoginpage, setSignup }) {
    const Navitem = [
        { name: "Home", path: "/" },
        { name: "Track", path: "/Map" },
        { name: "Book Ticket", path: "/ticketsection" },
        { name: "Fleet", path: "/fleet" },
        { name: "Alert", path: "/alert" },
    ];
    return (
        <nav>
            <div className="h-[80px] bg-blue-950 top-0 z-10 sticky">
                <div className="max-w-[1350px] mx-auto h-full flex justify-between px-[20px]">
                    <div className="h-[80px] flex w-fit  gap-5">
                        <img src="/bus.jpg" alt="" className="h-[40px] w-[40px] rounded-2xl mt-[20px]" />
                        <button className="text-[26px] text-white font-sans cursor-pointer"><b>Mytrip</b></button>
                    </div>
                    <div className="flex justify-between items-center hidden md:flex w-full ml-[120px] mr-[60px]">
                        {
                            Navitem.map((obj, index) => (
                                <Navi_Content key={index} obj={obj} />
                            ))
                        }
                    </div>
                    <div className="flex ml-[20px] text-white font-bold gap-12 items-center ">
                        <button className={`border-2 h-fit p-[7px] w-[90px] bg-transparent text-white font-sans rounded-xl cursor-pointer hover:-translate-y-[.8px] hover:translate-x-[.8px] transition-all duration-350`} onClick={() => {
                            setLoginpage(true);
                            setSignup(false);
                        }}>
                            Log in
                        </button>
                        <button className={`border-2 h-fit p-[7px] w-[90px] bg-white text-blue-600 font-sans rounded-xl cursor-pointer hover:-translate-y-[.8px] hover:translate-x-[.8px] transition-all duration-350 `} onClick={() => {
                            setSignup(true);
                            setLoginpage(false);
                        }}>
                            SignUp
                        </button>
                    </div>
                </div>
            </div >
        </nav>
    );
}

export default Navbar;