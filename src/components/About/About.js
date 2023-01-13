import React from "react";
import { useSelector } from "react-redux";
import html from "../../assets/html.png";
import java from "../../assets/java.png";
import css from "../../assets/css.png";
import js2 from "../../assets/js2.png";
import github from "../../assets/github.png";
import tailwind from "../../assets/tailwind.png";
import aws from "../../assets/aws.png";
import bootstrap from "../../assets/bootstrap.png";
import mongodb from "../../assets/mongodb.png";
import mysql from "../../assets/mysql.png";
import node from "../../assets/node.png";
import react from "../../assets/react.png";
function About() {
    const darkMode = useSelector((state) => state.darkMode);
    const techs = [
        {
            id: 1,
            src: java,
            title: "Java",
            style: "shadow-blue-400",
            
        },
        {
            id: 2,
            src: js2,
            title: "JavaScript",
            style: "shadow-yellow-400",
        },
        {
            id: 3,
            src: react,
            title: "React",
            style: "shadow-blue-400",
        },
        {
            id: 4,
            src: html,
            title: "HTML",
            style: "shadow-orange-400",
            
        },
        {
            id: 5,
            src: css,
            title: "CSS",
            style: "shadow-blue-400",
            
        },
        {
            id: 6,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
            
        },
        {
            id: 7,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400",
        },
        {
            id: 8,
            src: bootstrap,
            title: "Bootstrap",
            style: "shadow-purple-400",
        },
        {
            id: 9,
            src: mongodb,
            title: "MongoDB",
            style: "shadow-green-400",
        },
        {
            id: 10,
            src: aws,
            title: "Aws",
            style: "shadow-orange-400",
        },
        {
            id: 11,
            src: mysql,
            title: "MySql",
            style: "shadow-teal-400",
        },
        {
            id: 12,
            src: node,
            title: "Node",
            style: "shadow-green-400",
        }
    ];
    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="p-4 text- md:text-md text-black dark:text-white">
                <section id="about">
                    <h1 className="text-3xl font-bold border-b-4 border-teal-400 inline p-1 ">About</h1>
                    <div className="grid grid-cols-2 space-x-3 mt-6">
                        <div name="left-section" className="leading-8 shadow-md shadow-white rounded-xl p-2 text-justify">
                        <span className="text-teal-500 font-bold text-xl">Hi ! My name is Md Ashif Reza.</span> I graduated from Indian Institute of Information Technology, Bhagalpur with a Bachelor of Technology in Computer Science.
                        I am aspiring fullstack Developer. I have experience with JAVA, React, NodeJs, ExpressJs, sql, mongoDb and Aws. I build a web application in React with latest powerfull designing tools Tailwind CSS. I connect my frontend application to backend with web application framework  ExpressJs and for storing data from application NoSQL database mongoDB.
                        </div>
                        <div name="right-section" className="shadow-md shadow-white rounded-xl p-2 text-justify">
                        <h1 className='text-teal-500 font-bold mb-1 text-xl'> Education:</h1>
                            <div className="flex">
                                
                                <div className="bg-teal-600 h-6 w-6 rounded-full border-4 border-white m-1">
                                </div>
                                <div>
                                    <h1 className="mt-1 ml-2">Full Stack Web Development with Web3</h1>
                                    <h1 className="mt-1 ml-2 text-sm text-gray-400">AlmaBetter in Collab with polygon</h1>
                                    <h1 className="mt-1 ml-2 text-sm text-gray-400">May 2022 - present</h1>
                                    <h1 className="mt-1 ml-2 text-sm text-gray-400">CGPA 8.0</h1>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="bg-teal-600 h-6 w-6 rounded-full border-4 border-white m-1">
                                </div>
                                <div>
                                    <h1 className="mt-1 ml-2">BTech in Computer Science</h1>
                                    <h1 className="mt-1 ml-2 text-sm text-gray-400">Indian Institute of Information Technology</h1>
                                    <h1 className="mt-1 ml-2 text-sm text-gray-400">Aug 2017 - Nov 2021</h1>
                                    <h1 className="mt-1 ml-2 text-sm text-gray-400">CGPA 6.96</h1>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="bg-teal-600 h-6 w-6 rounded-full border-4 border-white m-1">
                                </div>
                                <div>
                                    <h1 className="mt-1 ml-2">High School </h1>
                                    <h1 className="mt-1 ml-2 text-sm text-gray-400">Woodbine Modern School</h1>
                                    <h1 className="mt-1 ml-2 text-sm text-gray-400">Aug 2013 - Nov 2015</h1>
                                    <h1 className="mt-1 ml-2 text-sm text-gray-400">CGPA 8.1</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="mt-6">
                            <p className="text-3xl font-bold border-b-4 border-teal-400 p-1 inline">
                                Skill
                            </p>
                            <p className="py-4">These are the technologies I've worked with</p>
                            </div>
                    </div>
                    <p className="flex space-x-2 h-30">
                        {techs.map(({ id, src, title, style }) => (
                            <div
                            key={id}
                            className={`shadow-md hover:scale-110 duration-500 py-2 rounded-xl p-0.5 ${style}`}
                            >
                            <img src={src} alt="" className="w-20 mx-auto py-0.1" />
                            <p className="mt-4 text-center justify-center ">{title}</p>
                            </div>
                        ))}
                    </p>
                </section>
            </div>
        </div>
    );
}
export default About;
