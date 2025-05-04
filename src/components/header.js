import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const Header = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 700);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 700);

      // Reset sidebar state when switching screen sizes
      if (window.innerWidth > 700) {
        setShowSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/Homepage" className="logo-link">Amresh</Link>{" "}
        </div>
        {isScreenSmall && (
          <div className="menu-bars" onClick={toggleSidebar}>
            <FaIcons.FaBars />
          </div>
        )}

        {/* Navbar List for Large Screens */}
        {!isScreenSmall && (
          <ul className="navbar-list">
            <li>
              <Link to="/Homepage" onClick={toggleSidebar}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Projects" onClick={toggleSidebar}>
              Projects
              </Link>
            </li>
            <li>
              <Link to="/Resume" onClick={toggleSidebar}>
                Resume
              </Link>
            </li>
            <li>
              <a
                href="mailto:amreshbkp0111@gmail.com"
                target="_blank"
                onClick={toggleSidebar}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/icons8-gmail.svg`}
                  alt="Gmail"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/amresh1kumar"
                target="_blank"
                onClick={toggleSidebar}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/icons8-github.svg`}
                  alt="GitHub"
                />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/amresh1kumar"
                target="_blank"
                onClick={toggleSidebar}
              >
                <img src={`${process.env.PUBLIC_URL}/icons8-x.svg`} alt="X" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/amresh1kumar/"
                target="_blank"
                onClick={toggleSidebar}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/icons8-linkedin%20(2).svg`}
                  alt="LinkedIn"
                />
              </a>
            </li>
          </ul>
        )}

        {/* Sidebar for Small Screens */}
        {isScreenSmall && (
          <nav className={showSidebar ? "nav-menu active" : "nav-menu"}>
            {/* Close Button */}
            <div className="close-button">
              <AiIcons.AiOutlineClose onClick={toggleSidebar} />
            </div>

            <ul className="nav-menu-items">
              <li className="nav-item-1">
                <Link to="/Homepage" onClick={toggleSidebar}>
                  Home
                </Link>
              </li>
              <li className="nav-item-2">
                <Link to="/Projects" onClick={toggleSidebar}>
                  Projects
                </Link>
              </li>
              <li className="nav-item-3">
                <Link to="/Resume" onClick={toggleSidebar}>
                  Resume
                </Link>
              </li>
              <li className="nav-item-4">
                <a
                  href="mailto:amreshbkp0111@gmail.com"
                  onClick={toggleSidebar}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/icons8-gmail.svg`}
                    alt="Gmail"
                  />
                </a>
              </li>
              <li className="nav-item-5">
                <a
                  href="https://github.com/amresh1kumar"
                  target="new"
                  onClick={toggleSidebar}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/icons8-github.svg`}
                    alt="GitHub"
                  />
                </a>
              </li>
              <li className="nav-item-6">
                <a
                  href="https://x.com/amresh1kumar"
                  target="new"
                  onClick={toggleSidebar}
                >
                  <img src={`${process.env.PUBLIC_URL}/icons8-x.svg`} alt="X" />
                </a>
              </li>
              <li className="nav-item-7">
                <a
                  href="https://www.linkedin.com/in/amresh1kumar/"
                  target="new"
                  onClick={toggleSidebar}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/icons8-linkedin%20(2).svg`}
                    alt="LinkedIn"
                  />
                </a>
              </li>
            </ul>
          </nav>
        )}
      </nav>
    </header>
  );
};

export default Header;
