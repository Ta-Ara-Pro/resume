import React, { useState } from "react";
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return(
        <div className="navbar">
            {/* <img src={logo} alt="" /> */}
            <img src={menu_open} onClick={toggleMenu} alt="" className="nav-mob-open"/>
            <ul className={showMenu ? "nav-menu show" : "nav-menu"}>
                <img src={menu_close} onClick={toggleMenu} alt="" className="nav-mob-close" />
                <li><AnchorLink className='anchor-link' href='/home'>Home</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='/about'>About Me</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='/services'>Services</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='/work'>Portfolio</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='/contact'>Contact</AnchorLink></li>
            </ul>
            
        </div>
    )
}

export default Navbar
