import { useParams } from "react-router-dom";
import projectData from "../data/projectData.json";
import "../styles/ProjectPage.css";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectData.find((project) => project.id === id);

  if (!project) {
    return <div>Projektet hittades inte</div>;
  }

  return (
    <div className="home-top-container">
      <div className="spacer" />
      <h1 className="projectpage-title">{project.title}</h1>
      <p className="gray">{project.shortDesc}</p>
      {project.background && [
        <h3>Bakgrund</h3>,
        <p className="paragraph">{project.background}</p>,
      ]}
      {project.idea && [
        <h3>Projektidé</h3>,
        <p className="paragraph">{project.idea}</p>,
      ]}
      {project.process && [
        <h3>Projektgenomförande</h3>,
        <p className="paragraph">{project.process}</p>,
      ]}
      {project.images.length > 0 && [
        <h3>Bilder</h3>,
        project.images.map((image) => {
          <img src={image} />;
        }),
      ]}
    </div>
  );
}
