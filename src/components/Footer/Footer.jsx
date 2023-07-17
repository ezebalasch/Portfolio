import "./Footer.css";
import { FaLinkedinIn, FaGithub, FaYoutube, FaEnvelope } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <div className="footer-container">
      <Fade direction="up" cascade>
        <div className="table-footer">
          <div className="first-column">
            <span>Ezequiel Balasch</span>
            <div className="first-column-description">
              A Full Stack Web Developer building the Frontend of Websites and
              Web Applications that leads to the success of the overall product
            </div>
          </div>
          <div className="second-column">
            <div className="second-column-title">Social</div>
            <div className="second-column-icons">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ezequiel-balasch-0bb4881b5/"
              >
                <FaLinkedinIn />
              </a>
              <a target="_blank" href="mailto:ezebalasch@gmail.com">
                <FaEnvelope />
              </a>
              <a target="_blank" href="https://github.com/ezebalasch">
                <FaGithub />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/@ezequielbalasch7268"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </Fade>
      <div className="bottom-data">© Copyright 2023</div>
    </div>
  );
};

export default Footer;
