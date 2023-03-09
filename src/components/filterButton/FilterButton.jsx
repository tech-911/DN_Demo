import React, { useState } from "react";
import "./filterButton.scss";
const FilterButton = ({
  filter,
  setFilter,
  data1,
  setData1,
  data2,
  setData2,
  data3,
  setData3,
  title,
  action,
  active,
  setActive,
  data,
}) => {
  const handleFilter = () => {
    setActive(title);
    if (action === "name") {
      if (title === "All") {
        setData1(data.filter((value) => value.rp));
        setFilter([...data1, ...data2, ...data3]);
        console.log(filter);
      } else {
        setData1(data.filter((value) => value.rp === title));
        setFilter([...data1, ...data2, ...data3]);
        console.log(filter);
      }
    } else if (action === "language") {
      if (title === "All") {
        setData2(data.filter((value) => value.lang));
        setFilter([...data1, ...data2, ...data3]);
        console.log(filter);
      } else {
        setData2(data.filter((value) => value.lang === title));
        setFilter([...data1, ...data2, ...data3]);
        console.log(filter);
      }
    } else if (action === "alphabet") {
      if (title === "Hot") {
        setData3(data.filter((value) => value.title));
        setFilter([...data1, ...data2, ...data3]);
        console.log(filter);
      } else {
        setData3(
          data.filter((value) => value.title[0].toLocaleUpperCase() === title)
        );
        setFilter([...data1, ...data2, ...data3]);
        console.log(filter);
      }
    }
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
