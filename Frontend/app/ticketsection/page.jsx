import InputTravel from "./Booking Details/InputTravel";
import Input_Date_And_Time from "./Booking Details/Input_Date_And_Time";
import Input_Details from "./Booking Details/Input_Details";
import Booking_Button from "./Booking Details/Booking_Button";
import Booking_Summary from "./Booking_summary";
function TicketBook() {
    return (
        <div className="flex bg-gray-100 pt-[100px] pb-[50px] pb-[90px]">
            <div className="bg-white min-w-[1200px] mx-auto rounded-2xl flex flex-col p-[30px] transition-all duration-300 hover:translate-x-[.6px] hover:-translate-y-[.8px] hover:shadow-2xl shadow-2xs">
                <div className="flex text-center flex-col">
                    <h1 className="font-bold text-3xl font-sans">Book Your Ticket</h1>
                    <p className="font-sans">
                        Reserve your seat in advance for a comfortable journey
                    </p>
                </div>

                <div className="flex gap-10 pt-[60px]">
                    {/* left */}
                    <div className="flex gap-5 h-full flex-col ">
                        <InputTravel first={"From"} second={"To"}></InputTravel>
                        <Input_Date_And_Time first={"Travel Date"} second={"Departure Time"}></Input_Date_And_Time>
                        <Input_Details></Input_Details>
                        <Booking_Button></Booking_Button>
                    </div>

                    {/* right */}

                    <Booking_Summary></Booking_Summary>
                </div>
            </div>
        </div>
    );
}

export default TicketBook;