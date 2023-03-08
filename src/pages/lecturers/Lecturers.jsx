import React, { useState } from "react";
import "./lecturers.scss";
import Container from "../../components/container/Container";
import FilterButton from "../../components/filterButton/FilterButton";
import { lecturers, language, alphabet } from "./data";

const Lecturers = () => {
  const [filter, setFilter] = useState();
  const [active, setActive] = useState("");
  return (
    <Container>
      <div className="lecturers_wrapper">
        <div className="lecturers_filter">
          <div className="lecturers_filter_name">
            {lecturers.map(({ lecturer, id }, idx) => {
              <FilterButton
                filter={filter}
                setFilter={setFilter}
                active={active}
                setActive={setActive}
                title="All"
                action=""
              />;
            })}
          </div>
          <div className="lecturers_filter_language"></div>
          <div className="lecturers_filter_alphabet"></div>

          <FilterButton
            filter={filter}
            setFilter={setFilter}
            active={active}
            setActive={setActive}
            title="efi"
            action="efi"
          />
        </div>
      </div>
    </Container>
  );
};

export default Lecturers;
