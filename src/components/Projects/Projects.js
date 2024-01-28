import { useSelector } from "react-redux";
import frontend from "../../assets/portfolio/frontend.png";
import backend from "../../assets/portfolio/backend.jpeg";

function Projects() {
    const darkMode = useSelector((state) => state.darkMode);
    return (
        <div className={darkMode ? "dark" : ""}>
            <div>
                <section id="project" className="dark:text-white p-4 text-md md:text-xl">
                    <h1 className="text-3xl mb-4"><span className="font-bold border-b-4 border-teal-400">Projects</span></h1>
                    <div className="grid grid-cols-2 divide-x space-x-4">
                        <div className="shadow-md shadow-white rounded-3xl">
                            <img src={frontend} alt="frontend.jpeg" className="rounded-t-2xl" />
                            <div className="flex flex-col items-center justify-center">
                                <h1 className="text-teal-300 text-md">Crypto Currency Dashboard</h1>
                                <div className="flex items-center space-x-12 mb-2">
                                    <a href="https://spark-cryptocurrency-dashboard.onrender.com/"><button className="duration-200 hover:scale-150 hover:text-teal-600 font-burtons">Live</button></a>
                                    <a href="https://github.com/mdashifreza/mdashifreza.git"><button className="duration-200 hover:scale-150 hover:text-teal-600 font-burtons">Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md shadow-white rounded-3xl">
                            <img src={backend} alt="backend.jpeg" className="rounded-t-2xl" />
                            <div className="flex flex-col items-center justify-center">
                                <h1 className="text-teal-300 text-md">BookMyShow</h1>
                            <div className="flex items-center justify-center space-x-12 mb-2">
                                <a href="https://bookmyshow-project-frontend.vercel.app/"><button className="duration-200 hover:scale-150 hover:text-teal-600 font-burtons">Live</button></a>
                                <a href="https://github.com/mdashifreza/BMS-Client.git"><button className="duration-200 hover:scale-150 hover:text-teal-600 font-burtons">Code</button></a>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Projects;
