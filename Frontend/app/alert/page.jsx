import Alert_Card from "./Alert_Card"
export default function Alert() {
    return (
        <div className=" bg-gray-100 pb-[77px] pt-[90px]">
            <div className="max-w-[1200px] bg-white flex flex-col mx-auto p-[30px] rounded-[20px] gap-8 transition-all duration-300 hover:shadow-2xl hover:translate-x-[.8px] hover:-translate-y-[.8px]">
                <div className="flex w-[100%] justify-between">
                    <h1 className="text-2xl leading-relaxed font-extrabold">Service Updates & Alerts</h1>
                    <button className="font-bold text-blue-600 cursor-pointer">View All</button>
                </div>
                <Alert_Card></Alert_Card>
                <Alert_Card></Alert_Card>
                <Alert_Card></Alert_Card>
            </div>
        </div>
    );
}