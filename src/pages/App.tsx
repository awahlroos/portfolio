import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import ProjectPage from "./ProjectPage";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
