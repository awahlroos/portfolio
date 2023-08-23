import React, { useRef } from "react";
import Landing from "../components/Landing";
import About from "../components/About";
import Projects from "../components/Projects";
import "../styles/App.css";
import Footer from "../components/Footer";

export default function Home() {
  const innerRef = useRef<HTMLDivElement>();

  const handleClick = () => {
    innerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Landing handleClick={handleClick} />
      <div className="home-top-container">
        <About innerRef={innerRef} />
        <Projects />
      </div>
      <Footer />
    </>
  );
}
