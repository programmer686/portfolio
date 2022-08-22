import React from 'react'
import styles from "./Projects.module.css"
function ProjectCard(props) {
  return (
    <div className={styles.projectCardBody}>
      <head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'/>               
      </head>
        <iframe title={props.title} src={props.link} className={styles.projectLink}></iframe>
        <div className={styles.cardInfo}>
          <p className={styles.techUsed}>{props.techUsed}</p>
          <a rel="noreferrer" href={props.gitHub} target="_blank"><i className='fa fa-github fa-3x '></i></a>
        </div>    
    </div>
  )
}

export default ProjectCard