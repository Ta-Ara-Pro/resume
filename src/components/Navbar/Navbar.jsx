import React, { useEffect, useState } from "react";
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [ menuOpen, setMenuOpen ] = useState(false);
    const [ isMobile, setIsMobile ] = useState(window.innerWidth <= 768)
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    // Function to check screen size  ======
    // =====================================
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        if (window.innerWidth > 768) {
            setIsMobile(false); 
        }
      };
    // Add event listener on mount, remove on unmount  ======
    // ======================================================
      useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, [window.innerWidth]);

    // Translation function ================
    // =====================================
    const toggleLang = (lang) => {
        i18n.changeLanguage(lang);
        document.documentElement.dir = lang === "fa" ? "rtl" : "ltr"; 
        setMenuOpen(false);
    }

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const navIcon = document.documentElement.dir === "rtl" ? "fa-navIcon" : "en-navIcon"
    const navMenuMob = document.documentElement.dir === "rtl" ? "fa-nav_menu_mob" : "en-nav_menu_mob"

     // Function to handle navigation and scrolling ==============
     // ==========================================================
     const handleNavigation = (hash) => {
        if (location.pathname !== "/") {
            // Navigate to the main route first
            navigate("/", { replace: true });
            // Wait for the navigation to complete, then scroll to the section
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 10); // Adjust the delay as needed
        } else {
            // If already on the main route, scroll to the section
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };
    return (
        <div className="navbar">
            {isMobile && <img src={menu_open} onClick={()=>toggleMenu()} alt="" className={`${navIcon}`} />}
          

            <ul className={isMobile ? `${navMenuMob} ${showMenu ? "show" : ""}` : "nav-menu"}>
            <li>
            <button
                        className='nav-item'
                        onClick={() => handleNavigation("#home")}
                    >
                        {t("Home")}
                        </button>
                </li>
                <li>
                    <button
                        className='nav-item'
                        onClick={() => handleNavigation("#about")}
                    >
                        {t('About Me')}
                    </button>
                </li>
                <li>
                    <button
                        className='nav-item'
                        onClick={() => handleNavigation("#services")}
                    >
                        {t("Services")}
                    </button>
                </li>
                <li>
                    <button
                        className='nav-item'
                        onClick={() => handleNavigation("#work")}
                    >
                        {t("Portfolio")}
                    </button>
                </li>
                <li>
                    <button
                        className='nav-item'
                        onClick={() => handleNavigation("#contact")}
                    >
                        {t("Contact")}
                    </button>
                </li>
                <li className="lang-selector">
                    <button onClick={() => setMenuOpen(!menuOpen)} id="menu-button" className="lanBtn">
                        {t("Change Language")}
                    </button>
                        <div className={`dropdown-menu ${menuOpen ? 'show' : "" }`}>
                            <div onClick={() => toggleLang('en')}>{t("English")}</div>
                            <div onClick={() => toggleLang('fa')}>{t("Persian")}</div>
                        </div>
                </li>
                </ul>
        </div>
    )
}

export default Navbar
