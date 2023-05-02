import { useState } from "react";
import Landing from "../components/Landing";
import Project from "../components/Project";
import About from "../components/About";
import "../styles/App.css";
import projectData from "../data/projectData.json";

function App() {
  return (
    <div className="App">
      <div className="home-top-container">
        <About />
        {/*<Landing />*/}
        {/*{projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            shortDesc={project.shortDesc}
            tags={project.tags}
            images={project.images}
          />
        ))}*/}
      </div>
    </div>
  );
}

export default App;
