import { useState } from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import gfg from "../assets/gfg.svg";
import leetcode from "../assets/leetcode.svg";
import id from "../assets/office-man.png";

const Navbar = () => {
    const [active, setActive] = useState(false);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 cursor-pointer">
                <a href="/" className="flex items-center">
                    <img
                        src={id}
                        className="h-10 w-10 md:h-14 md:w-14 lg:h-12 lg:w-12"
                    />
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={active}
                    onClick={() => setActive(!active)}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className={`${
                        active ? "block" : "hidden"
                    } w-full md:block md:w-auto`}
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-wrap items-center justify-end p-4 md:p-0 mt-4 border-t md:border-0 border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className="py-2 px-3 text-lg md:text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            <Link to="home" smooth={true} duration={500} onClick={() => setActive(false)}>
                                Home
                            </Link>
                        </li>
                        <li className="py-2 px-3 text-lg md:text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            <Link to="software-experience" smooth={true} duration={500} onClick={() => setActive(false)}>
                                Software Experience
                            </Link>
                        </li>
                        <li className="py-2 px-3 text-lg md:text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            <Link to="education" smooth={true} duration={500} onClick={() => setActive(false)}>
                                Education
                            </Link>
                        </li>
                        <li className="py-2 px-3 text-lg md:text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            <Link to="projects" smooth={true} duration={500} onClick={() => setActive(false)}>
                                Projects
                            </Link>
                        </li>
                        <div className="flex items-center space-x-4 py-2 px-1 text-lg md:text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            <a
                                href="https://www.linkedin.com/in/raj-lucky-7215aa259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mx-1"
                            >
                                <FaLinkedin className="cursor-pointer text-xl md:text-2xl md:hover:text-blue-700 md:dark:hover:text-blue-500 transition-all" />
                            </a>
                            <a
                                href="https://github.com/Puzzling762"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mx-1"
                            >
                                <FaGithub className="cursor-pointer text-xl md:text-2xl md:hover:text-blue-700 md:dark:hover:text-blue-500 transition-all" />
                            </a>
                            <a
                                href="https://www.instagram.com/fortunate_raj?igsh=MWxjMGtodGdydXA3dQ=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mx-1"
                            >
                                <FaInstagram className="cursor-pointer text-xl md:text-2xl md:hover:text-blue-700 md:dark:hover:text-blue-500 transition-all" />
                            </a>
                            <a
                                href="https://leetcode.com/u/Puzzling_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mx-1"
                            >
                                <img
                                    src={leetcode}
                                    alt="leetcode"
                                    className="h-8 w-8 md:h-6 md:w-6 lg:h-8 lg:w-8 md:hover:text-blue-700 md:dark:hover:text-blue-500 transition-all"
                                />
                            </a>
                            <a
                                href="https://www.geeksforgeeks.org/user/rajlucky_2004/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mx-1"
                            >
                                <img
                                    src={gfg}
                                    alt="GeeksforGeeks"
                                    className="h-8 w-8 md:h-6 md:w-6 lg:h-8 lg:w-8 md:hover:text-blue-700 md:dark:hover:text-blue-500 transition-all"
                                />
                            </a>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
