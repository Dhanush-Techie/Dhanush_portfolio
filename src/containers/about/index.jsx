import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./style.scss"
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
const jobSummary = "I’m a passionate Full Stack Developer with expertise in building scalable, efficient, and secure web applications. With a strong foundation in both front-end and back-end technologies, I specialize in creating seamless user experiences and robust server-side logic.Proficient in React.js, Node.js, JavaScript, and MongoDB, I enjoy working on complex projects that require innovative problem-solving. My experience spans across developing dynamic web apps, optimizing databases, and implementing cybersecurity best practices to ensure data integrity and security.I thrive in collaborative environments and love tackling challenges that push the boundaries of modern web development. Let’s build something great together";

const personalDetails = [
    {
        label: "Name",
        value: "Dhanush"
    },
    {
        label: "Name",
        value: "Dhanush"
    },
    {
        label: "Age",
        value: "21"
    },
    {
        label: "Address",
        value: "Coimbatore,Tamilnadu,India"
    },
    {
        label: "Email",
        value: "dhanushtechieofficial@gmail.com"
    },
    {
        label: "NContact No",
        value: "+91 6379728721"
    }
];
const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalwrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(-900px)",
                        }}
                        end={{
                            transform: "translateX(0px)",
                        }}>
                        <h3>
                            Full Stack Developer
                        </h3>
                        <p>{jobSummary}</p>
                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(500px)",
                        }}
                        end={{
                            transform: "translateX(0px)",
                        }}>
                        <h3 className="personalInformationHeaderText">
                            Personal Information
                        </h3>
                        <ul>
                            {
                                personalDetails.map((item, key) => (
                                    <li key={key} >
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicewrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(600px)",
                        }}
                        end={{
                            transform: "translateX(0px)",
                        }}>
                        <div className="about__content__servicewrapper__inner">
                            <div>
                                <FaDev color="var(--yellow-theme-main-color)" size={60} />
                            </div>
                            <div>
                                <DiApple color="var(--yellow-theme-main-color)" size={60} />
                            </div>
                            <div>
                                <DiAndroid color="var(--yellow-theme-main-color)" size={60} />
                            </div>
                            <div>
                                <FaDatabase color="var(--yellow-theme-main-color)" size={60} />
                            </div>
                        </div>
                    </Animate>

                </div>

            </div>
        </section>
    );
};
export default About;