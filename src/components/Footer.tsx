import "../styles/Footer.css";
import footerImage from "../images/footer-image.webp";
import mailIcon from "../assets/mail-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import githubIcon from "../assets/github-icon.svg";

export default function Footer() {
  return (
    <div className="top-footer-container outer-footer-container component-padding-top">
      <div className="outer-footer-container">
        <div className="inner-footer-container">
          <div className="flex-container">
            <div className="left-flex">
              <h2 className="dark-background-text">Det var allt!</h2>
              <p className="dark-background-text">
                Här finns jag om du undrar något
              </p>
              <div className="contact-wrapper">
                <div className="contact-container">
                  <img src={mailIcon} className="contact-icon" alt="Mail" />
                  <a
                    href="mailto:alex.wahlroos@hotmail.com"
                    className="contact-text"
                  >
                    alex.wahlroos@hotmail.com
                  </a>
                </div>
                <div className="contact-container">
                  <img
                    src={linkedinIcon}
                    className="contact-icon"
                    alt="LinkedIn"
                  />
                  <a
                    href="https://www.linkedin.com/in/alexwahlroos"
                    target="_blank"
                    className="contact-text"
                  >
                    linkedin.com/in/alexwahlroos
                  </a>
                </div>
                <div className="contact-container">
                  <img src={githubIcon} className="contact-icon" alt="GitHub" />
                  <a
                    href="https://github.com/awahlroos"
                    target="_blank"
                    className="contact-text"
                  >
                    github.com/awahlroos
                  </a>
                </div>
              </div>
            </div>
            <div className="right-flex">
              <img
                className="footer-image"
                src={footerImage}
                alt="Image of me"
              ></img>
            </div>
          </div>
          <small className="watermark-text">Portfolio - Alex Wahlroos</small>
        </div>
      </div>
    </div>
  );
}
