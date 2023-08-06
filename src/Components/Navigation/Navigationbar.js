import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigationbar.css";
const Navigationbar = () => {
  const [show, setShow] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [width, setWidth] = useState(0);
  const checkScreen = () => {
    const w = window.innerWidth;

    setWidth(w);
    if (w > 800) {
      setShow(true);
    }
  };

  useEffect(() => {
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // const checkMenu = () => {
  //     if(show===false)
  //         return true
  //     else
  //         return false
  // }

  // const checkCross = () => {
  //     if(show===true)
  //         return true
  //     else
  //         return false
  // }
  return (
    <nav className="Navigation-bar">
      <div className="Nav-items">
        <div className="myname">
          <ul>
            <li>
              <Link to="/">Savitri Khyadad</Link>
            </li>
          </ul>
        </div>
        <div className="menu-items">
          <img
            src={`${process.env.PUBLIC_URL}/x_black.svg`}
            alt="Cross-icon"
            className="menu"
            style={{ opacity: show ? 1 : 0 }}
            onClick={() => {
              setShow(!show);
            }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/menu_black.svg`}
            alt="Menu-icon"
            className="cross"
            style={{ opacity: !show ? 1 : 0 }}
            onClick={() => {
              setShow(!show);
            }}
          />
          <ul style={{ left: show ? "0" : "-100vw" }}>
            <li>
              <Link to="./">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigationbar;
