export default function DetailsCard() {
    return (
            <div className="w-[300px] sm:w-[100%] mx-[130px] sm:mx-0 font-sans flex flex-col gap-[16px] bg-white p-[32px] rounded-2xl border-l-blue-500 border-l-6 transition-all duration-[.4s] hover:shadow-2xl hover:translate-x-[.5px] hover:-translate-y-[4px] shadow-xl">
                <p className="flex justify-between items-center font-bold text-gray-600 text-[16px] uppercase tracking-wider">Total<span className=" bg-blue-100 rounded-[10px] p-[10px]"><img src="/Bluetrain.png" alt="" className="w-[34px]" /></span></p>
                <h1 className="font-bold text-3xl">248</h1>
                <p className="text-blue-700 text-[14px]">12% Increase</p>
            </div>
    );
}