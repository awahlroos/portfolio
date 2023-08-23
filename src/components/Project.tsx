import { Link } from "react-router-dom";
import "../styles/Project.css";

interface Props {
  id: string;
  title: string;
  shortDesc: string;
  tags: Array<string>;
  coverImage: string;
}

export default function Project({
  id,
  title,
  shortDesc,
  tags,
  coverImage,
}: Props) {
  return (
    <div className="project-top-container">
      <Link to={{ pathname: `/project/${id}` }} className="no-style">
        <div id="project-container">
          <div className="text-container">
            <div>
              <h2 className="title-text">{title}</h2>
              <p className="description-text">{shortDesc}</p>
            </div>
            <div className="display-inline">
              <h4>#</h4>
              <p>
                {tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="image-container">
            <img id="project-image" src={coverImage} />
          </div>
          <div className="button-container">
            <button id="circle-button"></button>
          </div>
        </div>
      </Link>
    </div>
  );
}
