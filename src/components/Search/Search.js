import React from "react";
import "./Search.css";

function Search(props) {
  return (
    <input
      className="Search"
      type="search"
      placeholder="Search"
      onChange={props.find}
    />
  );
}

export default Search;
