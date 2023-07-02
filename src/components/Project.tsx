import "../styles/Project.css";

interface Props {
  title: string;
  shortDesc: string;
  tags: Array<string>;
  images: Array<string>;
}

export default function Project({ title, shortDesc, tags, images }: Props) {
  return (
    <div id="top-container">
      <div id="project-container">
        <div className="text-container">
          <div>
            <h2 className="title-text">{title}</h2>
            <p className="description-text">{shortDesc}</p>
          </div>
          <div>
            <h4 style={{ display: "inline" }}>#</h4>
            <p style={{ display: "inline" }}>
              {tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="image-container">
          <img id="project-image" src={images[0]} />
        </div>
        <div className="button-container">
          <button id="circle-button"></button>
        </div>
        <div></div>
      </div>
    </div>
  );
}
