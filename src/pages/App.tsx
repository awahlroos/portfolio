import Landing from "../components/Landing";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import "../styles/App.css";

function App() {
  return (
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
  );
}

export default App;
