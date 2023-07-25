import "./Home.css";
import { Fade } from "react-awesome-reveal";
import Dropdown from "./Dropdown/Dropdown";
import ProfileCard from "./ProfileCard/ProfileCard";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <div className="header-container">
        <Fade direction="down" cascade triggerOnce={true} reset={true}>
          <div className="header">Hi! I'm Ezequiel Balasch</div>
          <div className="header-subtitle">Full Stack Web Developer</div>
        </Fade>
      </div>
      <div className="profile-container">
        <Fade
          className="profile-fade"
          direction="up"
          duration={800}
          triggerOnce={true}
          reset={true}
        >
          <ProfileCard />
        </Fade>
      </div>
      <div className="about-container">
        <div className="about-card">
          <div className="about-header">Experience</div>
          <Dropdown />
        </div>
      </div>
      <div className="projects-container">row</div>

      <Contact />
    </>
  );
};

export default Home;
