import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
function Header() {
  const [opening, setOpening] = useState("none")
  const handleOpen = () => {
    setOpening(prev => prev === "flex" ? "none" : "flex")
  }
  return (
    <div className={styles.container}>
      <div>
        <Link to="/">
          <h1 className={styles.logo}>Frontend Dev</h1>
          
        </Link>
      </div>
      <div className={styles.humburgerMenuContainer}>
        <button className={styles.hamburgerMenu} onClick={handleOpen}>
          <div className={styles.humburgerMenuStick}></div>
          <div className={styles.humburgerMenuStick}></div>
          <div className={styles.humburgerMenuStick}></div>
        </button>
        <ul className={styles.linkscontainer} style={{display: opening}}>
          <li>
            <Link to="/" className={styles.links} onClick={() => setOpening("none")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className={styles.links} onClick={() => setOpening("none")}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/css" className={styles.links} onClick={() => setOpening("none")}>
              Experience
            </Link>
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default Header;