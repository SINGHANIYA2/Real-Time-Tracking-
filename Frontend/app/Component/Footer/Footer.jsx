function Footer1() {
    return (
        <div className="flex bg-gray-900">
            <div className="h-[370px] min-w-[1400px] mx-auto  text-white flex font-sans justify-between p-[24px]">
                <div className="flex mt-[14px] gap-25 ">
                    <div className="w-[50%] flex flex-col gap-7">
                        <h1 className="font-bold text-2xl flex gap-3 justify-baseline"><img src="/bus.jpg" alt="" className="w-[35px] h-[35px] rounded-2xl" />Mytrip</h1>
                        <p className="tracking-wide  font-sans text-[16px]">Mytrip, a Mytrip company, is the world’s leading Mobility as a Service (Maas) solutions company and maker of the #1 urban mobility app.</p>
                        <div className="flex gap-10">
                            <button className="cursor-pointer">
                                <a href=""><img src="/playstore.webp" alt="" className="w-[200px] h-[55px]" /></a>
                            </button>
                            <button>
                                <a href=""><img src="/apptore.webp" alt="" className="w-[200px] h-[55px]" /></a>
                            </button>
                        </div>
                        <p className="tracking-wide">© 2025 Mytrip - All Rights Reserved</p>
                        <ul className="flex gap-7 tracking-wide">
                            <li><a href="">Terms of Use</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 tracking-wide">
                        <b className="text-2xl">Company</b>
                        <a href="" className="">About Mytrip</a>
                        <a href="">Maas Solution</a>
                        <a href="">Mytrip Tickets</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer1;