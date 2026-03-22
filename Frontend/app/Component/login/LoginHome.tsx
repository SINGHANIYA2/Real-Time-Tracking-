import LogIn from "./logIn";
export default function LogInHome({ setLoginpage }: any) {

    return (
        <div className={` top-0 h-[100vh] absolute pt-[27px] fixed bg-black/80 absolute z-20 w-full`}>
            <div className="pointer-events-auto transition-all duration-500">
                <LogIn setLoginpage={setLoginpage} />
            </div>
        </div>
    );
}