import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import CapsFrontend from "./components/Projects/CapsFrontend";
import CapsBackend from "./components/Projects/CapsBackend";
import Certificate from "./components/Certification/Certificate";
import Contact from "./components/Footer/Contact";
import { useSelector } from "react-redux";
function App() {
  const darkMode = useSelector((state) => state.darkMode);
return(
<div>
  <Navbar/>
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-gray-900 dark:text-gray-400 flex flex-col w-full">
        <div><Intro/></div>
        <div><About/></div>
        <div><CapsFrontend/></div>
        <div><CapsBackend/></div>
        <div><Certificate/></div>
        <div><Contact/></div>
        <div><Footer/></div>
      </div>
    </div>
</div>
)
} 
export default App;