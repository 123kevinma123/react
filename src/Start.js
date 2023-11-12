import { useEffect, useState} from "react";

import "./Start.css";

const MainContent = () => {
    return (
        <div className = "main_content">
            <h1>KEVIN</h1>  
            <h2>MA</h2>
        </div>
    );
};
  
// Create a component for the button with the click redirection
const Button = () => {
    const pageRedirect = () => {
        window.location = "loading.html";
    };
  
    return (
        <div className = "sub_content">
            <a href = "loading.html" className = "button" onClick = {pageRedirect}>
                Press Any Key to Start
            </a>
        </div>
    );
};
  
  // Create the main App component incorporating the above components
  const Start = () => {
    return (
        <div className = "stars">
            <div className = "rotating_stars" />
            <MainContent />
            <Button />
        </div>
    );
  };
  
  export default Start;