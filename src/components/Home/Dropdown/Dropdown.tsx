import React, { useState } from "react";
import "./Dropdown.css";
import { FaAngleDown, FaAngleUp, FaLink } from "react-icons/fa6";
import { workExperience } from "./../../data/workExperience";

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
                  <FaLink />
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
