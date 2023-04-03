import React, { useState } from "react";
import "./filter.scss";

function filter(props) {
  const filterItem = props.filter;
  const setFilterItem = props.setFilter;

  function removeFilterItem(e) {
    const target = e.target;
    const targetValue = target.dataset.filterRemoveValue;

    const targetindex = filterItem.findIndex((item) => item === targetValue);
    filterItem.splice(targetindex, 1);
    setFilterItem((item) => [...item]);
  }

  function clearFilters() {
    setFilterItem([]);
  }

  const filters = filterItem.map((item) => {
    return (
      <li key={item} className="filter-item" data-filter-remove-value={item} onClick={removeFilterItem}>
        {item}
      </li>
    );
  });

  // console.log(filterItem);

  return (
    <div className="filter">
      <ul className="filter__list">{filters}</ul>
      <div className="filter__clear--container">
        <button className="clear" onClick={clearFilters}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default filter;
