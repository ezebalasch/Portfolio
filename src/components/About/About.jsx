import "./About.css";
import { Fade } from "react-awesome-reveal";
import { workExperience } from "./../data/workExperience";
import { studentTrayectory } from "./../data/studentTrayectory";
import { FaLink } from "react-icons/fa6";
import Presentation from "./Presentation/Presentation";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <div className="about">
      <Presentation />
      <div className="timeline-education">
        <div className="study-header">Education</div>
        <Fade direction="left" cascade triggerOnce={true} reset={true}>
          {studentTrayectory &&
            studentTrayectory.map((study, index) => (
              <div key={index} className={`study`}>
                <div className="study-cols">
                  <div className="col-one">
                    {study.title}
                    <div className="col-one-descrip">{study.company}</div>
                  </div>
                  <div className="col-two">
                    {study.img && (
                      <a href={study.link} target="_blank" exp>
                        <img
                          className="study-img"
                          src={study.img}
                          alt={study.title}
                        />
                      </a>
                    )}
                  </div>
                  <div className="col-three">{study.date}</div>
                </div>
              </div>
            ))}
        </Fade>
      </div>
      <div className="timeline-education">
        <div className="study-header experience">workExperience</div>
        <Fade direction="right" cascade triggerOnce={true} reset={true}>
          {workExperience &&
            workExperience.map((work, index) => (
              <div key={index} className={`study`}>
                <div className="study-cols">
                  <div className="col-one">
                    {work.title}
                    <div className="col-one-descrip">
                      {work.company}
                      {work.link !== "" ? (
                        <span>
                          <a
                            target="_blank"
                            className="linksite"
                            href={work.link}
                          >
                            <FaLink />
                          </a>
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="col-two-exp">
                    {work.description && <p>{work.description}</p>}
                  </div>
                  <div className="col-three">{work.date}</div>
                </div>
              </div>
            ))}
        </Fade>
      </div>
      <Skills />
    </div>
  );
};

export default About;
