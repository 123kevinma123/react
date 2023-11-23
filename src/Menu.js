import React, { useEffect, useState} from "react";

import "./Start.css";
import "./Menu.css";
import MainContent from "./MainContent.js";
import Footer from "./Footer.js";
import Start from "./Start.js";
import Resume from "./Resume.js";
import About from "./About.js";

const TitleScreen = () => {
  return (
    <Start />
  );
};

const MenuContent = () => {
    const [selectedSection, setSelectedSection] = useState("");

    const handleSectionChange = (section) => {
        setSelectedSection(section);
    };

    return (
        <>
            {selectedSection === "" && (
                <>
                    <div className = "menu_content">
                        <h1>KEVIN</h1>  
                        <h2>MA</h2>
                    </div>
                    <ul>
                        <li className = "navbar_item" onClick = {() => handleSectionChange("about")}>
                            <span className = "menu_button">&nbsp;ABOUT&nbsp;</span>
                        </li>
                        <li className = "navbar_item" onClick = {() => handleSectionChange("resume")}>
                            <span className = "menu_button">&nbsp;RESUME&nbsp;</span>
                        </li>
                        <li className = "navbar_item" onClick = {() => handleSectionChange("titleScreen")}>
                            <span className = "menu_button">&nbsp;TITLE SCREEN&nbsp;</span>
                        </li>
                    </ul>
                    <Footer />
                </>
            )}
            {selectedSection === "about" && <About />}
            {selectedSection === "resume" && <Resume />}
            {selectedSection === "titleScreen" && <TitleScreen />}
        </>
    );
};
const Menu = () => {
    return (
        <MenuContent />
    );
};
export default Menu;