import React, { useEffect } from "react";

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

const Loading = () => {
    useEffect(() => {
        const timeout = setTimeout(() => move(), 500);
        const timeout1 = setTimeout(() => move1(), 2600);

        return () => {
            clearTimeout(timeout);
            clearTimeout(timeout1);
        };
    }, []);

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

export default Loading;