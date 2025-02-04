import React from "react";
import './Hero.css'
import profile_image from '../../assets/mypro.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useTranslation } from "react-i18next";
const Hero = () => {
    const { t, i18n } = useTranslation()
    return (
       <div id="home" className="Hero">
    <img src={profile_image} alt="" />
    <h1>{t("I'm")} <span>TA_Ara</span>, {t("frontend developer based in Iran.")}</h1>
    <p>{t("I am the dude who wants to act effective in a simple manner")}</p>
    <div className="hero-action">
        <div className="hero-connect">
            <AnchorLink className='anchor-link' offset={50} href='#contact'>
                {t("Connect With Me")}
            </AnchorLink>
        </div>
        {/* <div className="hero-resume">{t("My Resume")}</div> */}
    </div>
</div>

    )
}

export default Hero