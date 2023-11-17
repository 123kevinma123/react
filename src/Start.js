import React, { useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

import "./Start.css";
import Loading from "./Loading";

const MainContent = () => {
    return (
        <div className = "main_content">
            <h1>KEVIN</h1>  
            <h2>MA</h2>
        </div>
    );
};
  
const Button = ( {onClick} ) => {
    return (
        <div className = "sub_content">
            <div className = "button" onClick = {onClick}>
                Click to Continue!
            </div>
        </div>
    );
};

const Temp = () => {
    return (
        <div className = "main_content">
            <h1>BOB</h1>  
            <h2>BUILDER</h2>
        </div>
    );
};
  
const Start = () => {
    const [IsClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
        setIsClicked(true);
    }

    return (
        <div className = "stars">
            <div className = "rotating_stars" />
            {IsClicked ? <Loading /> : (
                <>
                    <MainContent />
                    <Button onClick = {handleButtonClick} />
                </>
            )}
        </div>
    );
  };
  
  export default Start;