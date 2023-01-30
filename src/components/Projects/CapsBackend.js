import React from 'react';
import { useSelector } from "react-redux";
import backend from "../../assets/portfolio/backend.jpeg";
function CapsBackend() {
const darkMode = useSelector((state) => state.darkMode);
return (
    <div className={darkMode ? "dark" : ""}> 
    <section id="project" className="dark:text-white p-4 text-md md:text-xl">
            <div className="pb-6">
                <h1 className="text-teal-500 font-bold mt-4">Backend Capstone:</h1>
                <h1 className="mt-1">Check out Backend Capstone project work-</h1>
            </div>
        <div className="grid grid-cols-2 divide-x space-x-4">
            <div className="shadow-md shadow-white rounded-3xl">
                <img src={backend} alt="backend.jpeg" className="rounded-t-2xl"/>
                <div className="flex items-center justify-center">
                    <a href="https://bookmyshow-project-frontend.vercel.app/"><button className="w-1/2 px-6 py-0.1 m-4 duration-200 hover:scale-150 hover:text-teal-600 font-burtons">Live</button></a>
                    <a href="https://github.com/mdashifreza/BMS-Client.git"><button className="w-1/2 px-6 py-0.1 m-4 duration-200 hover:scale-150 hover:text-teal-600 font-burtons">Code</button></a>    
                </div>
            </div>
            <div className="shadow-md shadow-white rounded-3xl p-4">
                <h1 className='text-teal-500 font-bold mb-1'>BookMyShow:</h1>
                <p className='text-justify leading-6'>The purpose of the project titled “BookMyShow” is to provide a web application that is user-friendly & reliable. The project mainly focuses on the back-end and front-end technologies to build web applications. It has four modules: Movie Name, Time Slot, Seat Slot, and Last Booking Details .
</p>
            </div>
        </div> 
    </section>
    </div>
)
}
export default CapsBackend;
