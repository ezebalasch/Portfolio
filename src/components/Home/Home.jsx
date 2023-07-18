import "./Home.css";
import { Fade } from "react-awesome-reveal";
import perfil from "./../../assets/perfil.png";

const Home = () => {
  return (
    <>
      <div className="header-container">
        <Fade direction="down" cascade>
          <div className="header">Hi! I'm Ezequiel Balasch</div>
          <div className="header-subtitle">Full Stack Web Developer</div>
        </Fade>
      </div>
      <div className="profile-container">
        <Fade direction="left" cascade>
          <div className="profile-card">
            <div className="profile-card-description">
              s sint aliquid odit quo beatae illo iure repellat, voluptate at id
              culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsa facilis vel nam cumque, similique reiciendis accusamus quidem
              fugit omnis ea molestias soluta delectus totam at natus? Vitae
              quod laboriosam illo! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Vel fugit facere fuga quidem quaerat ipsam
              blanditiis
            </div>
            <div className="profile-card-img">
              <img
                className="image-profile"
                src={perfil}
                alt="Ezequiel Balasch"
              />
            </div>
          </div>
        </Fade>
        {/* <Fade direction="right" cascade>
          <div className="profile-card">
            <div className="profile-card-description">
              s sint aliquid odit quo beatae illo iure repellat, voluptate at id
              culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsa facilis vel nam cumque, similique reiciendis accusamus quidem
              fugit omnis ea molestias soluta delectus totam at natus? Vitae
              quod laboriosam illo! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Vel fugit facere fuga quidem quaerat ipsam
              blanditiis
            </div>
            <div className="profile-card-img">
              <img
                className="image-profile"
                src={perfil}
                alt="Ezequiel Balasch"
              />
            </div>
          </div>
        </Fade> */}
      </div>
      <div className="about-container">row</div>
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
