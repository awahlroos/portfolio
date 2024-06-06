import landing_image from "../images/landing_image.webp";
import "../styles/Landing.css";

interface Props {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Project({ handleClick }: Props) {
  return (
    <div id="top-container">
      <div className="outer-landing-container">
        <div className="inner-landing-container">
          <div id="landing-text-container">
            <p className="drop-in fade-in">Hej, mitt namn är</p>
            <h1 className="drop-in-2 fade-in" id="landing-text-name">
              ALEX WAHLROOS
            </h1>
            <p className="drop-in-3 fade-in">
              och jag är nyexaminerad civilingenjör inom{" "}
              <b>interaktion och design</b>. Det här är en hemsida för att
              presentera min portfolio och ett urval av arbeten jag gjort under
              min studietid. Hoppas du hittar något du gillar!
            </p>
            <div className="full-width">
              <button
                className="primary-button drop-in-4 fade-in"
                onClick={handleClick}
              >
                Läs mer
              </button>
            </div>
          </div>
          <div id="landing-image-container">
            <img
              id="landing-image"
              className="drop-in fade-in"
              src={landing_image}
              alt="Alex Wahlroos"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
