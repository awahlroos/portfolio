import React from "react";
import "../styles/About.css";
import about_me_image from "../images/about_me_image.png";
import interestsData from "../data/interestsData.json";
import Interests from "./Interests";

interface Props {
  innerRef: any;
}

export default function About({ innerRef }: Props) {
  return (
    <div className="top-container component-small-padding-top" ref={innerRef}>
      <div className="about-container">
        <div className="title">
          <h2>Om mig</h2>
        </div>
        <div id="about-me-container">
          <img src={about_me_image} id="about-me-image" alt="Image of me" />
          <p id="about-me-text">
            Jag heter Alex Wahlroos och har precis studerat klart
            civilingenjörsprogrammet interaktion och design vid Umeå
            Universitet. En vanlig beskrivning av detta program är att{" "}
            <b>mötet mellan människa och maskin</b> står i fokus, vilket i
            praktiken innebär att designa och skapa intuitiva och
            användarvänliga gränssnitt och system.{" "}
            <b>Designprocesser, prototyputveckling och implementation</b> är
            centrala delar vilket återkommer löpande genom hela programmet.
            Bredden på programmet innebär att man får en allsidig kunskap hela
            vägen från backend till slutanvändaren, men i denna bredd är det
            några områden som intresserar mig särskilt, nämligen...
          </p>
        </div>

        <div className="interests-container">
          {interestsData.map((interests) => (
            <Interests
              key={interests.title}
              title={interests.title}
              skills={interests.skills}
              icon={interests.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
