import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Certificate from "./components/Certification/Certificate";
import Contact from "./components/Footer/Contact";
import Experience from "./components/Experience";
import { useSelector } from "react-redux";
function App() {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div>
      <Navbar />
      <div className={darkMode ? "dark" : ""}>
        <div className="dark:bg-gray-900 dark:text-gray-400 flex flex-col w-full">
          <Intro />
          <Experience/>
          <About />
          <Projects />
          <Certificate />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default App;