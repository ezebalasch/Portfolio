import "./Home.css";
import { Fade } from "react-awesome-reveal";
import Dropdown from "./Dropdown/Dropdown";
import ProfileCard from "./ProfileCard/ProfileCard";
import Contact from "../Contact/Contact";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import Card from "../Projects/Card/Card";
import { Skeleton } from "@mui/material";

const Home = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const refCollection = collection(db, "projects");

    const querySortedDesc = query(
      refCollection,
      orderBy("number", "asc"),
      limit(3)
    );

    getDocs(querySortedDesc).then((snapshot) => {
      setList(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  }, []);

  return (
    <>
      <div className="header-container">
        <Fade direction="down" cascade triggerOnce={true} reset={true}>
          <h1 className="header">Hi! I'm Ezequiel Balasch</h1>
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
      <div className="projects-container">
        <div className="project-col-one">
          {!list.length &&
            Array.from({ length: 3 }).map((index) => (
              <div key={index}>
                <Skeleton
                  className="skeleton"
                  variant="rectangular"
                  height={250}
                />
                <Skeleton width="100%" />
              </div>
            ))}
          {list && list.map((card) => <Card key={card.id} {...card} />)}
        </div>
        <div className="project-col-two">
          <a href="/projects" className="input-button">
            View More
          </a>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default Home;
