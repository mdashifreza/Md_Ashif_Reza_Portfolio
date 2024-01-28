import profile from '../../assets/profile.jpeg';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { useSelector } from "react-redux";
function Intro() {
    const darkMode = useSelector((state) => state.darkMode);
    return (
        <section className={darkMode ? "dark" : ""}>
            <div className='mt-24 text-md md:text-xl text-black dark:text-white flex flex-wrap justify-center space-x-16 items-center'>
                <div className='items-center justify-center'>
                    <h1 className='text-teal-500 text-md'>Hi, my name is</h1>
                    <h1 className='text-3xl font-extrabold'>Md Ashif Reza</h1>
                    <h1 className='text-xl font-bold text-gray-350'>I'm a Full Stack Developer</h1>
                    <p className='justify-text w-[500px] text-gray-300'>
                        I am an experienced Full Stack Developer specializing proficient
                        in MERN stack technology in both backend and frontend development
                    </p>
                    <div className="flex justify-center m-3 gap-11 rounded-md text-5xl cursor-pointer">
                        <a href="https://www.linkedin.com/in/md-ashif-reza/"><AiFillLinkedin /></a>
                        <a href="https://github.com/mdashifreza"><AiFillGithub /></a>
                        <a href="https://twitter.com/Ashif_rez"><AiFillTwitterCircle /></a>
                    </div>
                </div>
                    <img src={profile} alt="" className='rounded-full items-center justify-center' />
            </div>
        </section>
    )
}
export default Intro;
