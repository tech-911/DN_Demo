import React, { useEffect, useState } from "react";
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
  id,
  setCatid,
}) => {
  useEffect(() => {
    setFilter([...data1, ...data2, ...data3]);
  }, [data1, data2, data3]);

  const handleFilter = () => {
    setActive(title);
    setCatid(id);
    if (action === "name") {
      if (title === "All") {
        setData1(data.filter((value) => value.rp));
      } else {
        setData1(data.filter((value) => value.rp.includes(title)));
      }
    } else if (action === "language") {
      if (title === "All") {
        setData2(data.filter((value) => value.lang));
      } else {
        setData2(data.filter((value) => value.lang === title));
      }
    } else if (action === "alphabet") {
      if (title === "Hot") {
        setData3(data.filter((value) => value.title));
      } else {
        setData3(
          data.filter((value) => value.title[0].toLocaleUpperCase() === title)
        );
      }
    } else if (action === "categories") {
      if (title === "All") {
        setData3(data.filter((value) => value?.cats || value?.categories));
      } else {
        setData3(
          data.filter(
            (value) =>
              value?.cats?.includes(title) || value?.categories?.includes(title)
          )
        );
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
