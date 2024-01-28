import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import Md_Ashif_Reza_Full_Stack_Dev from "../../assets/portfolio/Md_Ashif_Reza_Full_Stack_Dev.pdf";
import { updateDarkMode } from '../../state/action-creators';
function Navbar() {
    const dispatch = useDispatch();
    const [dark, setDark] = useState(false);
    const handleClick = ()=>{
        setDark(!dark)
        dispatch(updateDarkMode(dark))
    }
    const darkMode = useSelector((state) => state.darkMode);
    const navbarData = [
        {   
            id:1,
            path:"/",
            menu:"Home"
        },
        {   
            id:2,
            path:"#about",
            menu:"About"
        }, 
        {   
            id:3,
            path:"#experience",
            menu:"Experience"
        },
        {   
            id:4,
            path:"#project",
            menu:"project"
        },
        {   
            id:5,
            path:"#contact",
            menu: "Contact"
        },
    ];
    return (
        <nav className={darkMode ? "dark" : ""}>
            <div className="px-10 dark:bg-gray-600 dark:text-white md:px-20 lg:px-20 w-full">
                <div className=" dark:bg-slate-600 flex justify-start items-center">
                    <div className="text-2xl flex font-serif pl-2 pt-1 bg-teal-400 w-[180px] shadow-md hover:scale-110 duration-500 rounded">
                        <h1 className="font-customfont_1"><a href="/">Md Ashif Reza</a></h1>
                    </div>
                    <div className="container flex items-center justify-end p-6 mx-auto capitalize font-serif text-xl">
                        {
                            navbarData?.map((item)=>{return(<a href={item.path} key={item.id}
                                className="border-b-2 border-transparent hover:border-teal-600 mx-1.5 sm:mx-4 "
                            >{item.menu}</a>)})
                        }
                        <button className="ml-3 mr-6" onClick={handleClick}><BsFillMoonStarsFill size={25}/></button>
                        <a href={Md_Ashif_Reza_Full_Stack_Dev} target="_blank" rel="noopener noreferrer" className="bg-teal-400 p-1 pr-3 pl-3 rounded-md text-xl">Resume</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
