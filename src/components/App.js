import React, { useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults"
import DarkMode from "./DarkMode";
import NasaLogo from "../images/nasalogotransparent.png"
import "../styles/app.css";

const App = () => {

  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="app">
      <img
        className="nasa"
        src={NasaLogo}
        alt="nasaLogo"
         />
      <Search setSearchResults={setSearchResults} />
      <DarkMode />
      <SearchResults results={searchResults} />
    </div>
  );
}

export default App;
