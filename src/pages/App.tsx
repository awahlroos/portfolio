import Landing from "../components/Landing";
import Projects from "../components/Projects";
import About from "../components/About";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="home-top-container">
        <Landing />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
