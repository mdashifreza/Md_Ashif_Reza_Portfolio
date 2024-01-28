import { useSelector } from "react-redux";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js2 from "../../assets/js2.png";
import github from "../../assets/github.png";
import tailwind from "../../assets/tailwind.png";
import aws from "../../assets/aws.png";
import mongodb from "../../assets/mongodb.png";
import mysql from "../../assets/mysql.png";
import node from "../../assets/node.png";
import react from "../../assets/react.png";
import docker from "../../assets/docker.png";
import websocket from "../../assets/websocket.png";
import reactnative from "../../assets/reactnative.png";

function About() {
    const darkMode = useSelector((state) => state.darkMode);
    const techs = [
        {
            id: 1,
            src: docker,
            title: "Docker",
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
            src: websocket,
            title: "websocket",
            style: "shadow-gray-400",
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
        },
        {
            id: 13,
            src: reactnative,
            title: "React Native",
            style: "shadow-green-400",
        },
    ];
    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="p-4 text- md:text-md text-black dark:text-white">
                <section id="/">
                        <h1 className="text-3xl font-bold border-b-4 border-teal-400 p-1 inline">Tech Stack:</h1>
                    <div className="flex justify-between flex-wrap space-x-2 h-30 mt-6">
                        {techs?.map(({ id, src, title, style }) => (
                            <div
                                key={id}
                                className={`shadow-md hover:scale-110 duration-500 py-2 rounded-xl p-0.5 ${style}`}
                            >
                                <img src={src} alt="icon" className="w-20 mx-auto py-0.1" />
                                <p className="mt-4 text-center justify-center ">{title}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
export default About;
