import React, { useEffect, useState } from "react";
import "./Dropdown.css";
import { FaAngleDown, FaAngleUp, FaLink } from "react-icons/fa6";

const workExperience = [
  {
    title: "Programming Teacher",
    company: "Queen Mary College",
    date: "02/2023 – present",
    link: "",
    description:
      "Carry out monitoring and continuous evaluation of the teaching and learning process. Prepare and update teaching materials. Participate in training and training activities.",
  },
  {
    title: "Web Developer Freelance",
    company: "Buena Seguridad",
    date: "12/2022 – 01/2023",
    link: "https://www.buenaseguridad.com.ar/",
    description:
      "Development of an application using Javascript and React. Design and construction of an attractive and functional user interface. Adaptable to mobile devices.",
  },
  {
    title: "Programming Teacher",
    company: "Newton School",
    date: "05/2022 – 02/2023",
    link: "",
    description:
      "Plan and design the study program of the subject. Prepare and teach theoretical and practical classes. Conduct tutorials and assist students in their doubts and queries.",
  },
];

const DropdownItem = ({ work }) => {
  const [opened, setOpened] = useState(false);
  const handleOnClick = () => {
    setOpened(!opened);
  };
  return (
    <>
      <button onClick={handleOnClick} className="dropdown-experience">
        {work.title} {opened ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      <div className={`dropdown-content ${opened ? "opened" : ""}`}>
        <div className="dropdown-opened-card">
          <div className="dropdown-opened-card-company">
            {work.company}
            {work.link !== "" ? (
              <span>
                <a target="_blank" className="linksite" href={work.link}>
                  <FaLink />{" "}
                </a>
              </span>
            ) : (
              ""
            )}

            <div className="dropdown-opened-card-description">
              {work.description}
            </div>
          </div>
          <div className="dropdown-opened-card-date">{work.date}</div>
        </div>
      </div>
    </>
  );
};

const Dropdown = () => {
  return (
    <div className="about-experience-content">
      {workExperience.map((work, index) => (
        <DropdownItem key={index} work={work} />
      ))}
    </div>
  );
};

export default Dropdown;
