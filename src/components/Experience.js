import { useSelector } from "react-redux";
const Experience = () => {
    const darkMode = useSelector((state) => state.darkMode);
    const experiences = [
        {
            title: 'Software Developer',
            company: 'CityTech Innovations Pvt. Ltd. (Dakoo)',
            duration: '06/2023 - 12/2023',
            skills: 'React Native, AWS, Async storage, OTP Login, DynamoDB, AWS API Gateway, S3',
            details: [
                'Collaborated on the development of "Dakoo The SuperApp" a dynamic hyperlocal e-commerce portal, enhancing my proficiency in React and React Native.',
                'Designed and deployed AWS Lambda function product and store APIs using AWS API Gateway, while integrating diverse React Native modules including navigation and animations.',
                'Enhanced user experience by implementing a location-based store display and implemented a comprehensive global search feature and selective menu filtering for restaurants and products.'
            ],
        },
        {
            title: 'Web Development Trainee',
            company: 'AlmaBetter',
            duration: '06/2022 - 03/2023',
            skills: 'MERN, Search Engine Optimization, DSA, Monitoring, Teamwork, Business Communication',
            details: [
                'Developed practical skills in front-end development, proficiently utilizing back-end programming languages and tools like Node.js. Experienced in working with databases, including MongoDB.',
                'Created and optimized web applications, utilizing front-end library like ReactJS and back-end frameworks like ExpressJS.',
                'Learned about best practices, including user authentication, data encryption and Jwt, to develop and deploy high-quality and secure web applications.',
                'Secured a place in the top 5% of students in the cohort of 100 students, and worked as an SME.'
            ],
        },
    ];

    return (
        <section className={darkMode ? "dark" : ""}>
            <div className="p-4">
                <section id="experience" className="dark:text-white text-md md:text-xl flex justify-center mt-10">
                    <div>
                        <div className="text-3xl font-bold border-b-4 border-teal-400 p-1 inline">Experience</div>
                        {experiences.map((experience, index) => (
                            <div key={index} className=" mt-5">
                                <h1 className="text-3xl font-bold inline">{experience.title}</h1>
                                <h1 className="text-teal-500 font-bold">{experience.company}</h1>
                                <h1>{experience.duration}</h1>
                                <h1>Skills: {experience.skills}</h1>
                                <ul className="list-disc ml-6">
                                    {experience.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Experience;