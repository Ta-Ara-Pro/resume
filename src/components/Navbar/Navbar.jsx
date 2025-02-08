// import React, { useState } from "react";
// import './Navbar.css'
// import logo from '../../assets/logo.svg'
// import underline from '../../assets/nav_underline.svg'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
// import menu_open from '../../assets/menu_open.svg'
// import menu_close from '../../assets/menu_close.svg'
// import { useTranslation } from "react-i18next";

// const Navbar = () => {
//     const [showMenu, setShowMenu] = useState(false);
//     const [ menuOpen, setMenuOpen ] = useState(false);
//     const { t, i18n } = useTranslation();

//     // Navbar styling  =====================
//     // =====================================
    

//     // Translation function ================
//     // =====================================
//     const toggleLang = (lang) => {
//         i18n.changeLanguage(lang);
//         document.documentElement.dir = lang === "fa" ? "rtl" : "ltr"; 
//         setMenuOpen(false);
//     }

//     const toggleMenu = () => {
//         setShowMenu(!showMenu);
//     };

//     return (
//         <div className="navbar">
//             <img src={menu_open} onClick={toggleMenu} alt="" className="navIcon" />
//             <ul className={showMenu ? "nav-menu show" : "nav-menu"}>
//                 <img src={menu_close} onClick={toggleMenu} alt="" 
//                 style={showMenu ? {display:'block',position:'fixed',right:'10%'} : {display:'none'}} />
//                 <li><AnchorLink className='anchor-link' href='/home'>{t("Home")}</AnchorLink></li>
//                 <li><AnchorLink className='anchor-link' offset={50} href='/about'>{t('About Me')}</AnchorLink></li>
//                 <li><AnchorLink className='anchor-link' offset={50} href='/services'>{t("Services")}</AnchorLink></li>
//                 <li><AnchorLink className='anchor-link' offset={50} href='/work'>{t("Portfolio")}</AnchorLink></li>
//                 <li><AnchorLink className='anchor-link' offset={50} href='/contact'>{t("Contact")}</AnchorLink></li>
//                 <li className="lang-selector">
//                     <button onClick={() => setMenuOpen(!menuOpen)} id="menu-button" className="lanBtn">
//                         {t("Change Language")}
//                     </button>
//                     {menuOpen && (
//                         <div className="dropdown-menu">
//                             <div onClick={() => toggleLang('en')}>{t("English")}</div>
//                             <div onClick={() => toggleLang('fa')}>{t("Persian")}</div>
//                         </div>
//                     )}
//                 </li>
//                 </ul>
//         </div>
//     )
// }

// export default Navbar



import React, { useEffect, useState } from "react";
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [ menuOpen, setMenuOpen ] = useState(false);
    const [ isMobile, setIsMobile ] = useState(window.innerWidth <= 768)
    const { t, i18n } = useTranslation();

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

    return (
        <div className="navbar">
            {isMobile && <img src={menu_open} onClick={()=>toggleMenu()} alt="" className={`${navIcon}`} />}
          

            <ul className={isMobile ? `${navMenuMob} ${showMenu ? "show" : ""}` : "nav-menu"}>
                {/* <img src={menu_close} onClick={toggleMenu} alt="" 
                style={showMenu ? {display:'block',position:'fixed',right:'10%'} : {display:'none'}} /> */}
                <li><AnchorLink className='anchor-link' href='/home'>{t("Home")}</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='/about'>{t('About Me')}</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='/services'>{t("Services")}</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='/work'>{t("Portfolio")}</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='/contact'>{t("Contact")}</AnchorLink></li>
                <li className="lang-selector">
                    <button onClick={() => setMenuOpen(!menuOpen)} id="menu-button" className="lanBtn">
                        {t("Change Language")}
                    </button>
                    {/* {menuOpen && ( */}
                        <div className={`dropdown-menu ${menuOpen ? 'show' : "" }`}>
                            <div onClick={() => toggleLang('en')}>{t("English")}</div>
                            <div onClick={() => toggleLang('fa')}>{t("Persian")}</div>
                        </div>
                    {/* )} */}
                </li>
                </ul>
        </div>
    )
}

export default Navbar
