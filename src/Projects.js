import React, { useEffect, useState} from "react";
import "./Menu.css";
import "./Resume.css";
import Menu from "./Menu";
import resumeImage from './image.png';

const Projects = () => {
    const [isBack, setIsBack] = useState(false);
    return (
        <>
        {isBack ? <Menu /> : (
            <div>
                <div className = "resumeContent">
                    <h3>Projects</h3>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    Under construction
                </div>
                <div className = "sub_content">  
                    <li className = "navbar_item" onClick = {() => setIsBack(true)}>
                        <span className = "menu_button">&nbsp;BACK&nbsp;</span>
                    </li>
                </div>
            </div>
        )}
    </>
    )
  }
  export default Projects;