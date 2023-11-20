import React from "react";
import "./Menu.css"

const Resume = () => {
    return (
    <div>
      <div class = "resume_content">
          <img src = "resume cropped.png" alt = "Resume Image" class = "center"/>
      </div>
      <div class = "sub_content">
          <p>    
              <li class = "navbar_item" style = "list-style: none;">
                  <a href = "Resume Fall 2023" download = "Kevin_Ma_Resume" class = "button">&nbspDOWNLOAD&nbsp</a>
              </li>
              <li class = "navbar_item" style = "list-style: none;">
                  <a href = "menu.html" class = "button">&nbspBACK&nbsp</a>
              </li>
          </p>
      </div>
      </div>
    )
  }
  export default Resume;