import React from "react";
import './Hero.css'
import profile_image from '../../assets/mypro.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
    return (
        <div id="home" className="Hero">
            <img src={profile_image} alt="" />
            <h1>I'm <span>TA_Ara</span>, frontend developer based in Iran.</h1>
            <p>I am the dude who wants to act effictive in a simple manner</p>
            <div className="hero-action">
                <div className="hero-connet"><AnchorLink className='anchor-link'offset={50} href='#contact' >Connect With Me</AnchorLink></div>
                {/* <div className="hero-resume">My Resume</div> */}
            </div>

        </div>
    )
}

export default Hero