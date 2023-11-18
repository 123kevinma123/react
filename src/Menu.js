import React, { useEffect} from "react";

import "./Start.css";
//import "./Menu.css";
import MainContent from "./MainContent.js";
import Footer from "./Footer.js";

const SubContent = () => {
    const buttonStyle = { listStyle: 'none' };

    return (
        <p>
        <li className = "navbar_item" style = {buttonStyle}>
            <a href = "about.html" className = "button1">&nbsp;ABOUT&nbsp;</a>
        </li>
        <li className = "navbar_item" style = {buttonStyle}>
            <a href="resume.html" className = "button1">&nbsp;RESUME&nbsp;</a>
        </li>
        <li className = "navbar_item" style = {buttonStyle}>
            <a href = "index.html" className = "button1">&nbsp;TITLE SCREEN&nbsp;</a>
        </li>
        </p>
    );
};

const Menu = () => {
    return (
    <>
        <MainContent />
        <SubContent />
        <Footer />
    </>
    );
};
export default Menu;