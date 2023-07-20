import "./Home.css";
import { Fade } from "react-awesome-reveal";
import Dropdown from "./Dropdown/Dropdown";
import ProfileCard from "./ProfileCard/ProfileCard";

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
        <Fade direction="up" duration={800} triggerOnce={true} reset={true}>
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

      <div className="home">
        Home Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repellendus, omnis assumenda. Consequuntur magni odio cumque quae nobis
        facilis sint aliquid odit quo beatae illo iure repellat, voluptate at id
        culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
        facilis vel nam cumque, similique reiciendis accusamus quidem fugit
        omnis ea molestias soluta delectus totam at natus? Vitae quod laboriosam
        illo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
        fugit facere fuga quidem quaerat ipsam blanditiis veniam nulla,
        cupiditate recusandae, non sequi officiis, molestiae rem illum
        accusantium sint? Eum, aliquid. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Eius quod labore quis voluptatibus odit aliquam
        incidunt distinctio repudiandae? Nulla minus cupiditate sunt dolore
        voluptatibus adipisci consequuntur dolores consectetur eius architecto.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui molestiae
        cupiditate eveniet quis porro exercitationem, ullam magni dolores.
        Consequatur corrupti exercitationem dolorum quod. Repellendus
        consequatur, voluptatum nisi quibusdam cupiditate perferendis.
      </div>
    </>
  );
};

export default Home;
