import React, { useState } from "react";
import "./lecturers.scss";
import Container from "../../components/container/Container";
import FilterButton from "../../components/filterButton/FilterButton";

const Lecturers = () => {
  const [filter, setFilter] = useState();
  const [active, setActive] = useState("");
  return (
    <Container>
      <div className="lecturers_wrapper">
        <div className="lecturers_filter">
          <FilterButton
            filter={filter}
            setFilter={setFilter}
            active={active}
            setActive={setActive}
            title="All"
            action="all"
          />
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
