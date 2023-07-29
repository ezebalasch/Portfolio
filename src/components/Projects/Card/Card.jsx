import "./Card.css";
import { FaGithub, FaLinkedinIn, FaLink, FaYoutube } from "react-icons/fa6";

const Card = ({
  github,
  image,
  linkedin,
  name,
  technologies,
  website,
  youtube,
  description,
}) => {
  return (
    <>
      <div className="card">
        <div className="image-section">
          <img src={image} className="project-image" alt={name} />
          <div className="image-tech-container">
            <div className="tech-initial">
              {github && (
                <a target="_blank" href={github} className="prj-icon">
                  <FaGithub />
                </a>
              )}
              {linkedin && (
                <a target="_blank" href={linkedin} className="prj-icon">
                  <FaLinkedinIn />
                </a>
              )}
              {website && (
                <a target="_blank" href={website} className="prj-icon">
                  <FaLink />
                </a>
              )}
              {youtube && (
                <a target="_blank" href={youtube} className="prj-icon">
                  <FaYoutube />
                </a>
              )}
            </div>
            <div className="tech-final">
              {technologies.map((technology, index) => (
                <div key={index} className="txt-icon">
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="project-name">{name}</div>
        <div className="description-section">{description}</div>
      </div>
    </>
  );
};

export default Card;
