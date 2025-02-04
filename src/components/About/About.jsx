import React from "react";
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/my-about.jpg';
import { useTranslation } from "react-i18next";

const About = () => {
    const { t, i18n } = useTranslation();
    return (
        <div id="about" className="about">
        <div className="about-title">
            <h1>{t("About Me")}</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>{t("I am an enthusiast Frontend Developer. I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.")}</p>
                    <p>{t("My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.")}</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{ width: '50%' }} />
                    </div>
                    <div className="about-skill">
                        <p>React JS</p>
                        <hr style={{ width: '70%' }} />
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p>
                        <hr style={{ width: '60%' }} />
                    </div>
                    <div className="about-skill">
                        <p>NEXT JS</p>
                        <hr style={{ width: '50%' }} />
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievments">
            <div className="about-achievment">
                <h1>3+</h1>
                <p>{t("YEARS OF EXPERIENCE")}</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>10+</h1>
                <p>{t("PROJECTS COMPLETED")}</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>3+</h1>
                <p>{t("HAPPY CLIENTS")}</p>
            </div>
        </div>
    </div>
    
    );
}

export default About;
