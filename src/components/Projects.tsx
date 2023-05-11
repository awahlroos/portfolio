import React from "react";
import projectData from "../data/projectData.json";
import Project from "./Project";

export default function Projects() {
  return (
    <div className="top-container">
      <h2>Tidigare projekt</h2>
      {projectData.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          shortDesc={project.shortDesc}
          tags={project.tags}
          images={project.images}
        />
      ))}
    </div>
  );
}
