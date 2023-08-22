import "./ProfileCard.css";
import perfil from "./../../../assets/fotoperfil.png";

const ProfileCard = () => {
  return (
    <div className="profile-card-container">
      <div className="profile-card">
        <div className="profile-card-img">
          <img className="image-profile" src={perfil} alt="Ezequiel Balasch" />
        </div>
        <div className="profile-card-description">
          I live in Mendoza, Argentina.I am an enthusiastic Full Stack
          Programmer with experience in Java, JavaScript, React, Thymeleaf and
          Spring Boot. I also have a solid track record as a programming teacher
          at the primary and secondary levels, which has allowed me to develop
          exceptional communication and teamwork skills. My passion for
          programming motivates me to continue growing and learning in this
          industry. I have an advanced level of English, which allows me to
          interact effectively in international environments.
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
