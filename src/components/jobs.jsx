import React, { useRef, useState } from "react";
import "./jobs.scss";

function jobs(props) {
  const filterItem = [props.role, props.level, ...props.languages];

  // const [filters, setFilters] = useState(props.filter);

  function clickFilter(e) {
    const target = e.target;
    const value = target.dataset.filterValue;

    if (props.filter.includes(value)) {
      return;
    }

    props.setFilter((item) => [...item, value]);
    // setFilters((items) => [...items, value]);
  }

  const items = filterItem.map((item) => {
    return (
      <li className="filter-item" data-filter-value={item} key={item} onClick={clickFilter}>
        {item}
      </li>
    );
  });

  return (
    <li className={`job__item ${props.new ? "new" : ""}`}>
      <div className="job__info--container">
        <img className="company-logo" src={props.logo} alt={`${props.company} logo`} />
        {/* {filter} */}
        <div className="job__position--container">
          <span className="company-name">{props.company}</span>
          {props.new && <span className="new-job">new!</span>}
          {props.featured && <span className="featured-job">featured</span>}

          <h1 className="job-title">{props.position}</h1>

          <p className="more-info">
            <span className="time-posted">{props.postedAt}</span>
            <span className="job-contract">{props.contract}</span>
            <span className="job-location">{props.location}</span>
          </p>
        </div>
      </div>

      <ul className="job__role--container">{items}</ul>
    </li>
  );
}

export default jobs;
// •
