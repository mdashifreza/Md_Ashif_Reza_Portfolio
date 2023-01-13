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
            𝑨 𝒅𝒆𝒅𝒊𝒄𝒂𝒕𝒆𝒅 𝒂𝒏𝒅 𝒅𝒆𝒕𝒂𝒊𝒍-𝒐𝒓𝒊𝒆𝒏𝒕𝒆𝒅 𝒊𝒏𝒅𝒊𝒗𝒊𝒅𝒖𝒂𝒍 𝒉𝒂𝒗𝒆 𝒂 𝒑𝒂𝒔𝒔𝒊𝒐𝒏 𝒇𝒐𝒓 𝒅𝒆𝒗𝒆𝒍𝒐𝒑𝒊𝒏𝒈 𝒔𝒄𝒂𝒍𝒂𝒃𝒍𝒆 𝒘𝒆𝒃 𝒂𝒑𝒑𝒍𝒊𝒄𝒂𝒕𝒊𝒐𝒏𝒔 𝒂𝒏𝒅 𝒘𝒐𝒓𝒌𝒊𝒏𝒈 𝒂𝒄𝒓𝒐𝒔𝒔 𝒕𝒉𝒆 𝒇𝒖𝒍𝒍 𝒔𝒕𝒂𝒄𝒌 .𝑰 𝒂𝒎 𝒍𝒐𝒐𝒌𝒊𝒏𝒈 𝒕𝒐 𝒋𝒐𝒊𝒏 𝒇𝒐𝒓𝒄𝒆𝒔 𝒘𝒊𝒕𝒉 𝑾𝒆𝒃3.0 𝑻𝒆𝒄𝒉𝒏𝒐𝒍𝒐𝒈𝒊𝒆𝒔 𝒕𝒐 𝒈𝒂𝒊𝒏 𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒆 𝒂𝒏𝒅 𝒆𝒙𝒑𝒐𝒔𝒖𝒓𝒆 𝒂𝒏𝒅 𝒆𝒙𝒑𝒂𝒏𝒅 𝒎𝒚 𝒌𝒏𝒐𝒘𝒍𝒆𝒅𝒈𝒆.
        </div>
    </div>

</div>
</div>
)
}
export default Intro;
