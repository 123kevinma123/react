import React, { useEffect, useState} from "react";
import Menu from "./Menu.js";
import "./About.css";
import "./Menu.css"


const AboutSubContent = () => {
    return (
        <div className = "aboutSubContent">
            <p className = "title">
                INTRODUCTION
            </p>
            <p className = "about">
                <br/>
                &nbsp;&nbsp;&nbsp;Hey! I'm Kevin Ma, the creator of this website, currently a 
                Junior in Computer Science attending Purdue University. In my free
                time, I hang out with friends, play the violin, and code side projects such as this website.
            </p>
            <p className = "title">
                <br/>
                THIS WEBSITE
            </p>
            <p className = "about">
                <br/>
                &nbsp;&nbsp;&nbsp;I love the retro-esque feeling of 8 bit games, particularly
                Space Invaders. I'm also a big fan of Star Wars. This led to the space themed 
                website you see now.
                <br/>
                <br/>
            </p>
            <p className = "title">
                SOCIALS
            </p>
            <p className = "about">
                <br/>
                <a href = "https://www.linkedin.com/in/kevinma2003/" className = "social"> LinkedIn </a>
                <a href = "https://github.com/123kevinma123" className = "social"> GitHub </a>
            </p>
        </div>
    );
};
const About = () => {
    const [isBack, setIsBack] = useState(false);

    return (
        <>
            {isBack ? <Menu /> : (
                <div className = "aboutMain">
                    <div className = "aboutContent">
                        <h3>ABOUT</h3>
                    </div>
                    <AboutSubContent />
                    <li className = "navbar_item" onClick = {() => setIsBack(true)}>
                        <span className = "menu_button">&nbsp;BACK&nbsp;</span>
                    </li>
                </div>
            )}
        </>
    );
};

export default About;