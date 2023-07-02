import "../styles/Interests.css";

interface Props {
  title: string;
  skills: Array<string>;
  icon: string;
}

export default function Interests({ title, skills, icon }: Props) {
  return (
    <div className="interest-container">
      <img className="interest-icon" src={icon}></img>
      <h4>{title}</h4>
      {skills.map((skill) => (
        <p key={skill} className="skill">
          + {skill}
        </p>
      ))}
    </div>
  );
}
