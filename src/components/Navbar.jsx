import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="p-5 bg-[#2B32B2] shadow md:flex md:items-center md:justify-between border-b-2 border-neutral-800">
        <div className="flex justify-between items-center">
            <span className="text-2xl font-[Poppins] text-zinc-50 cursor-pointer">
                <img className="h-10 inline mr-3" src="https://img.icons8.com/?size=512&id=63250&format=png" alt="logo" />
                    Timesheet
            </span>
            <span className="text-3xl cursor-pointer mx-2 md:hidden block">
                <svg className="h-10 inline" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="#a600ff">
                        </path>
                    </g>
                </svg>
            </span>
        </div>
        <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-[#2B32B2] w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] trasition-all ease-in duration-500">
            <li className="mx-4 my-6 md:my-0">
                <Link to="/about" className="text-xl text-sky-100 hover:text-sky-700 duration-500">Dashboard</Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
                <Link to="/pagehome" className="text-xl text-sky-100 hover:text-sky-700 duration-500 active:text-teal-400 active:bg-black">Time Entry</Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
                <Link to="/" className="text-xl text-sky-100 hover:text-sky-700 duration-500">Assignment</Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
                <Link to="#" className="text-xl text-sky-100 hover:text-sky-700 duration-500">Report</Link>
            </li>
            <li className="mx-4 my-6 md:my-0 flex flex-row">
                <img src="https://img.icons8.com/?size=512&id=12784&format=png" alt="setting" className="w-7 h-7 mx-2 cursor-pointer" />
                <img src="https://img.icons8.com/?size=512&id=21441&format=png" alt="user" className="w-7 h-7 mx-2 cursor-pointer" />
                <Link to="/">
                    <img src="https://img.icons8.com/?size=512&id=119068&format=png" alt="log out" className="w-7 h-7 mx-2 cursor-pointer" />
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
