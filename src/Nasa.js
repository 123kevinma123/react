import React, { useEffect, useState} from "react";

import "./Menu.css";
import "./Nasa.css";
import Menu from "./Menu.js";
import SearchIcon from "./Search.svg";
const API_URL = "https://api.nasa.gov/planetary/apod?api_key=ul34ocWDAsmvuT3LajI9fqX4drjb1Yu3TBtol5xR";


const Nasa = () => {
    const [isBack, setIsBack] = useState(false);
    const [apod, setApod] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const temp = "2000-3-20";

    const searchAPOD = async (date) => {
        const response = await fetch(`${API_URL}&date=${date}`);
        const data = await response.json();
        console.log(data);
        setApod(data);
    }

    return (
        <>
            {isBack ? <Menu /> : (
                <div className = "nasaMain">
                    <div className = "nasaContent">
                        <h3>APOD</h3>
                    </div>

                    <div className = "search">
                        <input
                        value = {searchTerm}
                        onChange = {(e) => {setSearchTerm(e.target.value)}}
                        />
                        <img
                        src = {SearchIcon}
                        onClick = {() => searchAPOD(searchTerm)}
                        />
                    </div>
                    <div className = "temp">
                        <img src = {apod.url} alt = "temp" />
                    </div>
                    <li className = "navbar_item" onClick = {() => setIsBack(true)}>
                        <span className = "menu_button">&nbsp;BACK&nbsp;</span>
                    </li>
                </div>
            )}
        </>
    );
};

export default Nasa;