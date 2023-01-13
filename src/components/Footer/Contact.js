import React from 'react'
import { useSelector } from 'react-redux';
function Contact() {
const darkMode = useSelector((state) => state.darkMode);
return (
<div className={darkMode ? "dark" : ""}>
    <div className="p-4 text-md md:text-xl text-black dark:text-white">
        <section id="contact">
            <div className="pb-8">
                <p className="text-3xl darkMode:text-red-600 font-bold border-b-4 border-teal-400 p-1 inline">Contact</p>
                <p className="mt-5">Submit the form below to get in touch with me</p>
            </div>
        <div>
        <div className="flex justify-center items-center">
            <form
            action="https://getform.io/f/ca7bfbd3-3ad8-4a51-b86f-362ed68b593b"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
            >
            <label id="name" className='text-2xl -mt-4'>Name:</label>
            <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <label id="email" className='text-2xl'>Email:</label>
            <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <label id="message" className='text-2xl'>Meesage:</label>
            <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="bg-gradient-to-b from-cyan-500 to-teal-500 px-6 py-3 my-2 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Send Us
            </button>
            </form>
        </div>
        </div>
        </section>
    </div>
</div>
)
}
export default Contact