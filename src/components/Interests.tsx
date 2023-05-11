import React from "react";
import "../styles/Interests.css";
import interestsData from "../data/interestsData.json";

interface Props {
  title: string;
  skills: Array<string>;
  icon: string;
}

export default function Interests({ title, skills, icon }: Props) {
  return (
    <div className="interest-container">
      <img src={icon}></img>
      <h4>{title}</h4>
      {skills.map((skill) => (
        <p className="skill">+ {skill}</p>
      ))}
    </div>
  );
}
