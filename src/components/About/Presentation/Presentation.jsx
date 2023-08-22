import { Fade } from "react-awesome-reveal";
import photo from "./../../../assets/fotoperfil.png";

import "./Presentation.css";

const Presentation = () => {
  return (
    <>
      <div className="about-title">I'm Ezequiel.</div>
      <div className="about-columns">
        <Fade
          className="fade"
          direction="left"
          cascade
          triggerOnce={true}
          reset={true}
        >
          <div className="about-col-one">
            <img
              className="about-img"
              src={photo}
              alt="Ezequiel Balasch Profile Image"
            />
          </div>
        </Fade>
        <div className="about-col-two">
          <p className="about-first">
            👋 Greetings! I'm Ezequiel Balasch, an enthusiastic Full Stack
            Programmer hailing from{" "}
            <span className="lighter"> Mendoza, Argentina.</span>
          </p>
          <p className="about-second">
            Presently, I am actively seeking engaging opportunities as a Full
            Stack Programmer, where I can leverage my talents, continue my
            learning journey, and contribute to cutting-edge software
            development.
          </p>
          <p className="about-third">
            Let's connect and explore how we can create a brighter tomorrow
            together! 🚀
          </p>
        </div>
      </div>
    </>
  );
};

export default Presentation;
