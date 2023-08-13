import "../styles/App.css";
import ProjectPage from "./ProjectPage";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

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
