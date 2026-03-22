export default function Alert_Card() {
    return (
        <div className="flex">
            <div className="bg-red-100 border-l-6 border-l-red-500 flex w-[100%] p-[15px] rounded-[20px] gap-5">
                <img src="/alter.png" alt="" className="w-[40px] h-[38px]" />
                <div className="flex flex-col gap-1">
                    <p className="font-bold flex gap-4 text-red-800"> Route 7C experiencing major delays
                        <span className="p-[7px] bg-red-800 rounded-2xl text-[10px] tracking-widest text-white">CRITICAL</span>
                    </p>
                    <p className="text-[15px] tracking-wide text-gray-500">Heavy traffic congestion on Airport Road due to construction. Expected delay: 10-15 minutes. Consider alternative routes.</p>
                    <div className="flex gap-8 text-red-800 text-[13.5px]">
                        <p>
                            <span><img src="" alt="" /></span>
                            2 minutes ago
                        </p>
                        <p>
                            <span><img src="" alt="" /></span>
                            Airport Road, Zone 3
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}