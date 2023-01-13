import React from "react";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";
import Md_Ashif_Reza_Resume_Full_Stack_Dev from "../../assets/portfolio/Md_Ashif_Reza_Resume_Full_Stack_Dev.pdf"
function Navbar() {
    const dispatch = useDispatch();
    const { updateDarkMode } = bindActionCreators(actionCreators, dispatch);
    const darkMode = useSelector((state) => state.darkMode);
return (
<div className={darkMode ? "dark" : ""}>
    <section className="px-10 dark:bg-gray-600 dark:text-white md:px-20 lg:px-20 w-full">
        <nav className=" dark:bg-slate-600 flex justify-start items-center">
        <div className="capitalize text-2xl font-serif p-6 bg-teal-400 shadow-md hover:scale-110 duration-500 py-2 rounded-xl"><span><a href="/">Portfolio</a></span></div>
        <div className="container flex items-center justify-end p-6 mx-auto capitalize font-serif">
            <a
            href="/"
            className=" border-b-2 border-transparent hover:border-teal-600 mx-1.5 sm:mx-4"
            >
            Home
            </a>
            <a
            href="#about"
            className=" border-b-2 border-transparent hover:border-teal-600 mx-1.5 sm:mx-4"
            >
            About
            </a>
            <a
            href="#project"
            className=" border-b-2 border-transparent hover:border-teal-600 mx-1.5 sm:mx-4"
            >
            project
            </a>
            <ul className="flex items-center gap-2">
            <li>
                <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 ml-8 rounded-md mx-1.5 sm:mx-4"
                href={Md_Ashif_Reza_Resume_Full_Stack_Dev}
                download="Md_Ashif_Reza_Resume_Full_Stack_Dev"
                >
                Resume
                </a>
            </li>
            <li>
                <BsFillMoonStarsFill
                onClick={() => updateDarkMode(!darkMode)}
                className="cursor-pointer text-2xl mx-1.5 sm:mx-4"
                />
            </li>
            <a
                href="#contact"
                className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-teal-600 mx-1.5 sm:mx-4"
            >
            Contact
            </a>
        </ul>
        </div>
        </nav>
    </section>
</div>
);
}
export default Navbar;
