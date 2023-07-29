import "./Projects.css";
import { useEffect, useState } from "react";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import Card from "./Card/Card";
import { Skeleton } from "@mui/material";

const Projects = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const refCollection = collection(db, "projects");

    getDocs(refCollection).then((snapshot) => {
      const sortedDocs = snapshot.docs.sort((a, b) => b.id.localeCompare(a.id));

      setList(
        sortedDocs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="projects">
      <div className="contact-header">Projects</div>
      <div className="card-container">
        {!list.length &&
          Array.from({ length: 6 }).map((index) => (
            <div key={index}>
              <Skeleton variant="rectangular" width={448} height={273} />
              <Skeleton width="100%" />
            </div>
          ))}
        {list && list.map((card) => <Card key={card.id} {...card} />)}
      </div>
    </div>
  );
};

export default Projects;
