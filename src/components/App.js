import React, { useState } from "react";
import Search from "./Search";
import "../styles/app.css";

function App() {

  const [searchResults, setSearchResults] = useState();

  return (
    <div className="app">
      <img
        className="nasa"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"
         />
      <Search setSearchResults={setSearchResults}/>
    </div>
  );
}

export default App;
