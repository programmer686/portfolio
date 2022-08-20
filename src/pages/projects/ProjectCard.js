import React from 'react'
import styles from "./Projects.module.css"
function ProjectCard(props) {
  return (
    <div className={styles.projectCardBody}>
        <iframe title={props.title} src={props.link} className={styles.projectLink}></iframe>
        <p className={styles.techUsed}>{props.techUsed}</p>
    </div>
  )
}

export default ProjectCard