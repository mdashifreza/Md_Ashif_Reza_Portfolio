import React from 'react';
import { useSelector } from "react-redux";
function Intro() {
const darkMode = useSelector((state) => state.darkMode);
return(
<div className={darkMode ? "dark" : ""}>
<div className='w-full p-4 text-md md:text-xl text-black dark:text-white'>
    <h1 className='text-sm mt-1 py-2 font-medium md:text-xl text-teal-300'>Hi,myself</h1>
    <h1 className='text-md mt-1 py-1 md:text-2xl'> Md Ashif Reza</h1>
    <h1 className="text-2xl mt-1 py-0.5 text-teal-600 dark:text-teal-300 md:text-3xl">Full Stack Developer</h1>
    <div className="">
        <div className="">
            π¨ πππππππππ πππ ππππππ-ππππππππ ππππππππππ ππππ π πππππππ πππ ππππππππππ ππππππππ πππ ππππππππππππ πππ πππππππ ππππππ πππ ππππ πππππ .π° ππ πππππππ ππ ππππ ππππππ ππππ πΎππ3.0 π»πππππππππππ ππ ππππ ππππππππππ πππ ππππππππ πππ ππππππ ππ πππππππππ.
        </div>
    </div>

</div>
</div>
)
}
export default Intro;
