import Link from "next/link";

function Navi_Content(props) {
    const name = props.obj.name;
    const path = props.obj.path;

    return (
        <Link
            href={path}
            className="relative flex justify-center items-center group text-white font-semibold font-sans text-[17px] cursor-pointer w-fit"
        >
            <button className="cursor-pointer">{name}</button>
            <div className="h-[2.5px] absolute left-0 w-0 -bottom-[26px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></div>
        </Link>
    );
}

export default Navi_Content;
