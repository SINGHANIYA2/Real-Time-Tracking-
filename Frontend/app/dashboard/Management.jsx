export default function Management() {
    return (
        <div className="bg-gray-100 font-sans pb-[90px]">
            <div className="max-w-[1200px] flex flex-col bg-white p-[30px] mx-auto mt-[40px] rounded-2xl transition-all duration-300 hover:translate-x-[.8px] hover:-translate-y-[.9px] hover:shadow-2xl">
                <div className="flex justify-between">
                    <p className="flex flex-col text-gray-500">
                        <span className="font-bold text-3xl tracking-wide text-black">Fleet Management</span>
                        Monitor and manage all vehicles in real-time
                    </p>
                    <button className=" cursor-pointer flex justify-center items-center font-semibold bg-green-700 opacity-70 text-white px-[11px] h-[52px] rounded-[10px] gap-2">
                        <img src="/add.png" alt="" className="w-[30px] bg-white rounded-full focus:outline-none" />
                        Add Vehicle
                    </button>
                </div>
                <table className="mt-[40px] ">
                    <thead className="bg-gray-50 text-gray-500 text-sm">
                        <tr className="">
                            <th className="px-6 py-4">VEHICLE ID</th>
                            <th className="px-6 py-4">ROUTE</th>
                            <th className="px-6 py-4">STATUS</th>
                            <th className="px-6 py-4">SPEED</th>
                            <th className="px-6 py-4">LOCATION</th>
                            <th className="px-6 py-4">LAST UPDATED</th>
                            <th className="px-6 py-4">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-6 py-5 font-semibold">VH-1042</td>

                            <td className="px-6 py-5 flex items-center gap-3">
                                <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-md font-semibold">
                                    42A
                                </span>
                                <span className="bg-blue-600 text-white px-2 py-1 rounded-md text-sm">
                                    Central → Downtown
                                </span>
                            </td>

                            <td className="px-6 py-5">
                                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                                    ✔ On Time
                                </span>
                            </td>

                            <td className="px-6 py-5 font-semibold">42 km/h</td>
                            <td className="px-6 py-5">Market St</td>
                            <td className="px-6 py-5 text-gray-500">2 sec ago</td>

                            <td className="px-6 py-5 flex gap-3">
                                <button className="bg-blue-50 p-2 rounded-lg text-blue-600">
                                    ✏️
                                </button>
                                <button className="bg-green-50 p-2 rounded-lg text-green-600">
                                    👁️
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-5 font-semibold">VH-1042</td>

                            <td className="px-6 py-5 flex items-center gap-3">
                                <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-md font-semibold">
                                    42A
                                </span>
                                <span className="bg-blue-600 text-white px-2 py-1 rounded-md text-sm">
                                    Central → Downtown
                                </span>
                            </td>

                            <td className="px-6 py-5">
                                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                                    ✔ On Time
                                </span>
                            </td>

                            <td className="px-6 py-5 font-semibold">42 km/h</td>
                            <td className="px-6 py-5">Market St</td>
                            <td className="px-6 py-5 text-gray-500">2 sec ago</td>

                            <td className="px-6 py-5 flex gap-3">
                                <button className="bg-blue-50 p-2 rounded-lg text-blue-600">
                                    ✏️
                                </button>
                                <button className="bg-green-50 p-2 rounded-lg text-green-600">
                                    👁️
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-5 font-semibold">VH-1042</td>

                            <td className="px-6 py-5 flex items-center gap-3">
                                <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-md font-semibold">
                                    42A
                                </span>
                                <span className="bg-blue-600 text-white px-2 py-1 rounded-md text-sm">
                                    Central → Downtown
                                </span>
                            </td>

                            <td className="px-6 py-5">
                                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                                    ✔ On Time
                                </span>
                            </td>

                            <td className="px-6 py-5 font-semibold">42 km/h</td>
                            <td className="px-6 py-5">Market St</td>
                            <td className="px-6 py-5 text-gray-500">2 sec ago</td>

                            <td className="px-6 py-5 flex gap-3">
                                <button className="bg-blue-50 p-2 rounded-lg text-blue-600">
                                    ✏️
                                </button>
                                <button className="bg-green-50 p-2 rounded-lg text-green-600">
                                    👁️
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-5 font-semibold">VH-1042</td>

                            <td className="px-6 py-5 flex items-center gap-3">
                                <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-md font-semibold">
                                    42A
                                </span>
                                <span className="bg-blue-600 text-white px-2 py-1 rounded-md text-sm">
                                    Central → Downtown
                                </span>
                            </td>

                            <td className="px-6 py-5">
                                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                                    ✔ On Time
                                </span>
                            </td>

                            <td className="px-6 py-5 font-semibold">42 km/h</td>
                            <td className="px-6 py-5">Market St</td>
                            <td className="px-6 py-5 text-gray-500">2 sec ago</td>

                            <td className="px-6 py-5 flex gap-3">
                                <button className="bg-blue-50 p-2 rounded-lg text-blue-600">
                                    ✏️
                                </button>
                                <button className="bg-green-50 p-2 rounded-lg text-green-600">
                                    👁️
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}