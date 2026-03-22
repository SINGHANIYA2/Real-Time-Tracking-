import DetailsCard from "./DetailsCard"
import Header from "./Header"
import Management from "./Management"
export default function DashBoard() {
    return (
        <div className="flex flex-col bg-gray-100 pt-[80px] font-sans">
            <Header></Header>
            <div className="w-[1200px] flex flex-col sm:flex-row mx-auto gap-8 my-[40px]">
                <DetailsCard></DetailsCard>
                <DetailsCard></DetailsCard>
                <DetailsCard></DetailsCard>
                <DetailsCard></DetailsCard>
            </div>
            <Management></Management>
        </div>
    );
}