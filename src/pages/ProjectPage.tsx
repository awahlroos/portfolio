import { useParams } from "react-router-dom";
import projectData from "../data/projectData.json";
import "../styles/ProjectPage.css";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectData.find((project) => project.id === id);

  if (!project) {
    return <p>Projektet hittades inte</p>;
  }

  return (
    <>
      <div
        className="project-page-cover"
        style={{
          backgroundImage: `url(/images/${project.id}_large_cover.jpg)`,
        }}
      >
        <div className="home-top-container">
          <h1 className="projectpage-title">{project.title}</h1>
          <p>{project.shortDesc}</p>
        </div>
      </div>
      <div className="home-top-container">
        {project.background && [
          <h3 style={{ marginTop: "10vh" }}>Bakgrund</h3>,
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
        {project.images &&
          project.images.length > 0 && [
            <h3>Bilder</h3>,
            project.images.map((image) => {
              <img src={image} />;
            }),
          ]}
      </div>
    </>
  );
}
