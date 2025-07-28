
import group from '../../assets/Group.png'
import { MdOutlineFileDownload } from "react-icons/md";

const Header = () => {
  
    return (
        <div className="bg-[#ffffff] lg:px-24">
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-black lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>About Me</a></li>
                            <li><a>Skills</a></li>
                            <li><a>Project</a></li>
                            <li><a>Contact me</a></li>
                        </ul>
                    </div>
                    <div className='flex gap-2'>
                        <img src={group} alt="" className='' />
                        <a className="btn btn-ghost text-2xl font-extrabold text-black">Personal</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-black"><a>About Me</a></li>
                        <li className="text-black"><a>Skills</a></li>
                        <li className="text-black"><a>Project</a></li>
                        <li className="text-black"><a>Contact me</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='hidden lg:block'>
                        <button className="btn flex justify-center text-xl w-[153px] h-[56px]">
                            Resume
                            <MdOutlineFileDownload className='text-xl'></MdOutlineFileDownload>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;