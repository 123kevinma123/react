import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Menu from "./Menu.js";
import Footer from "./Footer.js";

const Text = () => {
    return (
        <h4>
            LOADING...
        </h4>
    );
};

function move() {
    var elem = document.getElementById("bar");
    var width = 0;
    var id = setInterval(frame, 70);
    function frame() {
        if (width >= 30) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + "%";
        }
    }
}

function move1() {
    var width1 = 0;
    var elem1 = document.getElementById("bar1");
    var id1 = setInterval(frame1, 3);
    function frame1() {
        if (width1 >= 70) {
            clearInterval(id1);
        } else {
            width1++;
            elem1.style.width = width1 + "%";
        }
    }
}
const Temp = () => {
    return (
        <div className = "loading_content">
            <div className = "loading_bar">
                <div id = "bar" />
                <div id = "bar1" />
            </div>
            <Text />
        </div>
    );
};

const Loading = () => {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => move(), 500);
        const timeout1 = setTimeout(() => move1(), 2600);
        const timeout2 = setTimeout(() => {setShowMenu(true)}, 4000);

        return () => {
            clearTimeout(timeout);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        };
    }, []);

    return (
        <>
            {showMenu ? <Menu /> :(
                <div className = "loading_content">
                    <div className = "loading_bar">
                        <div id = "bar" />
                        <div id = "bar1" />
                    </div>
                    <Text />
                </div>
            )}
        </>

    );
};

export default Loading;