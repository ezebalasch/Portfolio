import "./Projects.css";
import { projectardos } from "./../data/projectardos";
import { FaGithub, FaLinkedinIn, FaLink, FaYoutube } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className="projects">
      <div className="contact-header">Projects</div>
      <div className="card-container">
        {projectardos &&
          projectardos.map((project, index) => (
            <div key={index} className="card">
              <div className="image-section">
                <img
                  src={project.image}
                  className="project-image"
                  alt={project.name}
                />
                <div className="image-tech-container">
                  <div className="tech-initial">
                    {project.github && (
                      <a
                        target="_blank"
                        href={project.github}
                        className="prj-icon"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.linkedin && (
                      <a
                        target="_blank"
                        href={project.linkedin}
                        className="prj-icon"
                      >
                        <FaLinkedinIn />
                      </a>
                    )}
                    {project.website && (
                      <a
                        target="_blank"
                        href={project.website}
                        className="prj-icon"
                      >
                        <FaLink />
                      </a>
                    )}
                    {project.youtube && (
                      <a
                        target="_blank"
                        href={project.youtube}
                        className="prj-icon"
                      >
                        <FaYoutube />
                      </a>
                    )}
                  </div>
                  <div className="tech-final">
                    {project.technologies.map((technology, index) => (
                      <div key={index} className="txt-icon">
                        {technology}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="project-name">{project.name}</div>
              <div className="description-section">{project.description}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
