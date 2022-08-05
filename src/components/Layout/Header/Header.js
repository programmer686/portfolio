import React from 'react'
import styles from "./Header.module.css"
import { Link } from "react-router-dom"
function Header() {
  return (
    
        <div className={styles.container}>
        <div>
                <h1 className={styles.logo}>Frontend Dev</h1>
            </div>
        <ul className={styles.linkscontainer}>
            <li><Link to="/" className={styles.links}>Home</Link></li>
            <li><Link to="/html" className={styles.links}>HTML</Link></li>
            <li><Link to="/css" className={styles.links}>CSS</Link></li>
            <li><Link to="/javascript" className={styles.links}>JAVASCRIPT</Link></li>
        </ul>
        </div>
    
  )
}

export default Header