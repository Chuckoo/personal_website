import { projects } from "../portfolio";
import React, { useState } from "react";
import ProjectContainer from "../components/ProjectContainer/ProjectContainer";
import uniqid from "uniqid";
import "./Pages.css";

function Page() {
  const [data, setData] = useState(projects);

  const [query, setQuery] = useState("");

  const search_parameters = Object.keys(Object.assign({}, ...data));

  // function search(data) {
  //   return data.filter((data) =>
  //     search_parameters.some((parameter) =>
  //       data[parameter].toString().toLowerCase().includes(query)
  //     )
  //   );
  // }

  function search(data) {
    return data.filter((dataObj) =>
      dataObj.stack.toString().toLowerCase().includes(query.toLowerCase())
    );
  }

  return (
    <div className="projects__page">
      <div className="input__box">
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects"
        />
        <h1>hays</h1>
      </div>
      <div className="projects__grid">
        {search(data).map((dataObj) => (
          <ProjectContainer key={uniqid()} project={dataObj} />
        ))}
      </div>
    </div>
  );
}

export default Page;
