import React, { useState, useEffect, useRef } from "react";
import "./App.scss";

import Filter from "./components/filter";
import Jobs from "./components/jobs";

function App() {
  const [dataJobs, setDataJobs] = useState([]);
  const [filter, setFilter] = useState([]);

  const fetchJobs = async () => {
    const response = await fetch("./data.json");
    const data = await response.json();
    setDataJobs(data);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  function filterFunc(dataJobs) {
    const tags = [dataJobs.role, dataJobs.level, ...dataJobs.tools, ...dataJobs.languages];

    if (filter.length === 0) return tags;

    return filter.every((item) => tags.includes(item));
  }

  const filteredJobs = dataJobs.filter(filterFunc);

  const job = filteredJobs.map((item) => {
    return <Jobs key={item.id} {...item} filter={filter} setFilter={setFilter} />;
  });

  return (
    <div className="App">
      <header className="header"></header>
      <main>
        <div className="filter__container">
          {/*  */}
          {filter.length !== 0 && <Filter filter={filter} setFilter={setFilter} />}
        </div>

        <div className="jobs__container">
          <ul className="job__list">{job}</ul>
        </div>
      </main>
    </div>
  );
}

export default App;
