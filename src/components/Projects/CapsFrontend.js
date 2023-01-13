import React from 'react';
import { useSelector } from "react-redux";
import frontend from "../../assets/portfolio/frontend.png";

function CapsFrontend() {
const darkMode = useSelector((state) => state.darkMode);
return (
<div className={darkMode ? "dark" : ""}> 
<section id="project" className="dark:text-white p-4 text-md md:text-xl">
        <div className="pb-6">
            <p className="text-3xl font-bold border-b-4 border-teal-400 p-1 inline">Projects</p>
            <h1 className="text-teal-500 font-bold mt-4">Frontend Capstone:</h1>
            <h1 className="mt-1">Check out Frontend Capstone project work-</h1>
        </div>
    <div className="grid grid-cols-2 divide-x space-x-4">
        <div className="shadow-md shadow-white rounded-3xl">
            <img src={frontend} alt="frontend.jpeg" className="rounded-t-2xl"/>
            <div className="flex items-center justify-center">
                <a href="https://spark-cryptocurrency-dashboard.onrender.com/"><button className="w-1/2 px-6 py-0.1 m-4 duration-200 hover:scale-150 hover:text-teal-600 font-burtons">Live</button></a>
                <a href="https://github.com/mdashifreza/mdashifreza.git"><button className="w-1/2 px-6 py-0.1 m-4 duration-200 hover:scale-150 hover:text-teal-600 font-burtons">Code</button>   
                </a>
            </div>
        </div>
        <div className="shadow-md shadow-white rounded-3xl p-4">
            <h1 className='text-teal-500 font-bold mb-1'>Cryptocurrency Dashboard:</h1>
            <p className='text-justify leading-6'>The purpose of the project titled “Cryptocurrency Dashboard” is to exclusiv provide a we application that is user-friendly & reliable.This will give the insight to tr    various cryptocurrencies o  one’s interest. The project mainly focuses on front-end technologies  build this responsive web application that will work seamlessly across all platforms. The Dashboarhas four modules: Cryptocurrency Graph, Marke    Cap table, Exchange crypto-currency, and Portfolio.</p>
        </div>
    </div>       
</section>
</div>
    )
}
export default CapsFrontend;
