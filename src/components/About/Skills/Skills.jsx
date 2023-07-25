import { FaJava, FaReact, FaBootstrap } from "react-icons/fa6";
import {
  SiJavascript,
  SiSpring,
  SiVite,
  SiMongodb,
  SiMysql,
  SiThymeleaf,
  SiGithub,
  SiChakraui,
} from "react-icons/si";
import "./Skills.css";
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  return (
    <div className="timeline-education">
      <div className="study-header skill">Skills</div>
      <Fade direction="left" cascade triggerOnce={true} reset={true}>
        <div className="study icons">
          <div className="display-icons">
            <div className="title-icons">Backend</div>
            <div className="icon-container">
              <FaJava />
              <SiJavascript />
              <SiSpring />
              <SiMongodb />
              <SiMysql />
              <SiThymeleaf />
            </div>
          </div>
          <div className="display-icons">
            <div className="title-icons">Frontend</div>
            <div className="icon-container">
              <FaReact id="react" />
              <SiVite id="vite" />
              <FaBootstrap id="bootstrap" />
              <SiChakraui id="chakra" />
            </div>
          </div>
          <div className="display-icons">
            <div className="title-icons">Tools</div>
            <div className="icon-container">
              <SiGithub id="github" />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Skills;
