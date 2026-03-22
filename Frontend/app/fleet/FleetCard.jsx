export default function FleetCard({ title, number, color }) {
    return (
        <div className="w-full mt-[20px] text-white ">
            <div className="bg-green-400 rounded-[12px] p-[10px] flex flex-col gap-7 pb-[20px]">
                <img src="" alt="" />
                <h1 className="text-4xl font-bold font-sans">{number}</h1>
                <p className="font-sans tracking-wide">{title}</p>
            </div>
        </div>
    );
}