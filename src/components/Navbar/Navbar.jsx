import "./Navbar.css";
import { FaBars, FaXmark } from "react-icons/fa6";
import Image from "/logo.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleOnClick = () => {
    setOpen(!open);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo">
          <a className="logo-anchor" href="/">
            <img className="brand" src={Image} alt="Ezequiel Balasch" />
          </a>
        </div>
        <ul className="links">
          {menuItems.map((menuItems, index) => (
            <li key={index}>
              <a
                className={location.pathname === menuItems.href ? "active" : ""}
                href={menuItems.href}
              >
                {menuItems.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#" className="action-btn">
          Download Resume
        </a>
        <button onClick={() => handleOnClick()} className="toggle-btn">
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </div>
      <div className={open ? "dropdown-menu open" : "dropdown-menu"}>
        {menuItems.map((menuItems, index) => (
          <li key={index}>
            <a
              className={location.pathname === menuItems.href ? "active" : ""}
              href={menuItems.href}
            >
              {menuItems.label}
            </a>
          </li>
        ))}
        <a href="#" className="action-btn">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
