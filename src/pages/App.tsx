import Landing from "../components/Landing";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import ProjectPage from "../components/ProjectPage";
import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/project" element={<ProjectPage />} />
      </Routes>

      <div className="App">
        <div className="home-top-container">
          <div className="spacer"></div>

          <Landing />
          <div className="spacer"></div>
          <About />
          <div className="spacer"></div>
          <Projects />
          <div className="spacer"></div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
