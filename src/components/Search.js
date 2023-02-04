import React, { useState } from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";

function Search() {
  const [value, setValue] = useState();

  return (
    <>
    <form className="search-form">
    <input
     className="search-input"
     type="text"
     onChange={(e) => setValue(e.target.value)}
    />
     <button className="button" type="submit">Search</button>
    </form>
    </>
  );  
};

export default Search;