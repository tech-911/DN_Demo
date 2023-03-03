import React from "react";
import "./search.scss";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="search_wrapper">
      <FiSearch className="search_icon" />
      <input type="text" className="search_input" placeholder="Search" />
    </div>
  );
};

export default Search;
