import React from "react";
import Landing from "../components/Landing";
import About from "../components/About";
import Projects from "../components/Projects";
import "../styles/App.css";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
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
    </>
  );
}
