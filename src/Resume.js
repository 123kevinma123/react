import React, { useEffect, useState} from "react";
import "./Menu.css";
import "./Resume.css";
import Menu from "./Menu";
import resumeImage from './image.png';

const Resume = () => {
    const [isBack, setIsBack] = useState(false);
    return (
        <>
        {isBack ? <Menu /> : (
            <div>
                <div className = "resumeContent">
                    <h3>Resume</h3>
                </div>
                <div className = "resumeSubcontent">
                    <img src = {resumeImage} alt = "Resume Image" class = "resumeImage"/>
                </div>
                <div className = "sub_content">  
                    <li className = "navbar_item">
                    <a href="path/to/Resume2024.pdf" download="Resume2024.pdf" className="menu_button">&nbsp;DOWNLOAD&nbsp;</a>
                    </li>
                    <li className = "navbar_item" onClick = {() => setIsBack(true)}>
                        <span className = "menu_button">&nbsp;BACK&nbsp;</span>
                    </li>
                </div>
            </div>
        )}
    </>
    )
  }
  export default Resume;