import React from "react";
import PropTypes from "prop-types";
import "../styles/searchresults.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results</p>
  } else {
    return (
      <div className="all-images">
        {results.map((image, index) => (
        <img className="card-image" src={image} alt="spaceImage" key={index} />
        ))}
      </div>
    )
  };
};

export default SearchResults;

SearchResults.propTypes = {
  results: PropTypes.array.isRequired
}
