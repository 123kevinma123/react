import { useEffect } from "react";

import "./App.css";
import SearchIcon from "./Search.svg";


//a2ba2784


const API_URL = " http://www.omdbapi.com/?i=tt3896198&apikey=a2ba2784"

const App = () => {
    const searchMovies = async (title) => {
        const response  = await fetch(` ${API_URL}&s=${title} `);
        const data = await response.json();

        console.log(data.Search);
    }
    useEffect(() =>  {
        searchMovies('Batman');
    }, [])
    return (
        <h1>App</h1>
    );
}
export default App;