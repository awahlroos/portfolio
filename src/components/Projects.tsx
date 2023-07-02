import React, { useState } from "react";
import projectData from "../data/projectData.json";
import Project from "./Project";
import "../styles/Projects.css";

export default function Projects() {
  const [disabledFilters, setDisabledFilters] = useState([""]);
  const [viewAll, setViewAll] = useState(true);
  const filterArray = ["Webbutveckling", "Apputveckling", "Design"];

  const handleFilter = (filter: string) => () => {
    if (filter) {
      if (disabledFilters.includes(filter)) {
        setDisabledFilters((prevArray) => {
          const newArray = [...prevArray];
          const filterIndex = newArray.indexOf(filter);
          if (filterIndex !== -1) {
            newArray.splice(filterIndex, 1);
          }
          return newArray;
        });
      } else {
        setDisabledFilters((prevArray) => [...prevArray, filter]);
        setViewAll(false);
      }
    } else {
      setDisabledFilters([]);
      setViewAll(true);
    }
  };

  return (
    <div>
      <h2>Tidigare projekt</h2>
      <div className="filter-button-container">
        <button
          className={
            viewAll
              ? "filter-button filter-button-active"
              : "filter-button filter-button-inactive"
          }
          onClick={handleFilter("")}
        >
          Alla
        </button>
        {filterArray.map((filter) => (
          <button
            key={filter}
            className={
              disabledFilters.includes(filter)
                ? "filter-button filter-button-active"
                : "filter-button filter-button-inactive"
            }
            onClick={handleFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      {projectData.map((project, index) => {
        const shouldRenderProject = project.tags.some((tag) =>
          disabledFilters.includes(tag)
        );

        if (shouldRenderProject || viewAll) {
          return (
            <Project
              key={index}
              title={project.title}
              shortDesc={project.shortDesc}
              tags={project.tags}
              images={project.images}
            />
          );
        }
      })}
    </div>
  );
}
