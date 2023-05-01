import { useState } from "react";
import Landing from "../components/Landing";
import Project from "../components/Project";
import "../styles/App.css";
import projectData from "../data/projectData.json";

function App() {
  return (
    <div className="App">
      <div className="home-top-container">
        <Landing />
        {/*<Project {...projectData} />*/}
      </div>
    </div>
  );
}

export default App;
