import FleetCard from "./FleetCard";
export default function Fleet() {
    // const color = [green, blue, darkyellow, red];
    return (
        <div className="bg-gray-100 pb-[50px] flex pt-[90px]">
            <div className="flex flex-col gap-5 w-[1200px] rounded-[10px] bg-white mx-auto pt-[40px] p-[30px] transition-all duration-300 hover:shadow-2xl hover:translate-x-[.8px] hover:-translate-y-[.8px] pb-[20px]">
                <h1 className="text-4xl text-center font-bold font-sans">Fleet Management Dashboard</h1>
                <p className="font-sans text-gray-500 opacity-80 text-center tracking-wide">Comprehensive view of all vehicles and their operational status</p>
                <div className="flex gap-6 text-center">
                    <FleetCard title={"Total Fleet"} number={"18"} ></FleetCard>
                    <FleetCard title={"Operational"} number={"18"} ></FleetCard>
                    <FleetCard title={"Under Maintenance"} number={"18"} ></FleetCard>
                    <FleetCard title={"Critical Issues"} number={"18"} ></FleetCard>
                    <FleetCard title={"Critical Issues"} number={"18"} ></FleetCard>
                </div>
                <div className="p-[25px] bg-gray-100 flex flex-col gap-6 rounded-xl">
                    <h1 className="font-bold font-sans text-[17px] tracking-wide" >
                        <span><img src="" alt="" /></span>
                        Fleet Overview
                    </h1>
                    <p className="text-[13.5px] font-sans text-gray-600">The fleet management dashboard provides real-time monitoring of all vehicles in the transport network. Track vehicle locations, monitor operational status, schedule maintenance, and manage driver assignments all from a centralized interface. Use the detailed table view to drill down into specific vehicle metrics and performance indicators.
                    </p>
                </div>
            </div>
        </div >
    );
}