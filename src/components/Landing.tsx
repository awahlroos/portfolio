import React from "react";
import landing_image from "../images/landing_image.png";
import "../styles/Landing.css";
import "../styles/App.css";


export default function Landing() {
  return (
    <div id="top-container">
      <div id="landing-text-container">
        <p>Hej, mitt namn är</p>
        <h1 id="landing-text-name">ALEX WAHLROOS</h1>
        <p>
          och jag är civilingenjörsstudent inom <b>interaktion och design</b>.
          Det här är en hemsida för att presentera min portfolio och ett urval
          av arbeten jag gjort under min studietid. Hoppas du hittar något du
          gillar!
        </p>
        <button className="primary-button">Läs mer</button>
      </div>
      <div id="landing-image-container">
        <img id="landing-image" src={landing_image} alt="Alex Wahlroos" />
      </div>
    </div>
  );
}
