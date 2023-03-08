import React, { useState } from "react";
import "./filterButton.scss";
const FilterButton = ({
  filter,
  setFilter,
  title,
  action,
  active,
  setActive,
}) => {
  const handleFilter = () => {
    setActive(title);
  };
  return (
    <div
      onClick={() => {
        handleFilter();
      }}
      className={`filter_wrapper ${active === title ? "filter_active" : ""}`}
    >
      {title}
    </div>
  );
};

export default FilterButton;
