import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className={styles.container}>
      <div>
        <Link to="/">
          <h1 className={styles.logo}>Frontend Dev</h1>
        </Link>
      </div>
      <ul className={styles.linkscontainer}>
        <li>
          <Link to="/" className={styles.links}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className={styles.links}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/css" className={styles.links}>
            Space
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;