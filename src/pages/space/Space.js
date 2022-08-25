import React, { useEffect } from 'react'
import styles from "./Space.module.css"
function Css() {
  useEffect(() => {
    alert("This is the Desktop Verions, mobile version coming soon!")
  },[])
  return (
      <div className={styles.body}>
        <iframe title="space" className={styles.spaceWebsite} src="https://space-vert-gamma.vercel.app/"></iframe>
        <div className={styles.cardInfo}>
          <p className={styles.techUsed}>HTML, CSS, REACT, NEXT.JS</p>
          <a rel="noreferrer" href="https://github.com/programmer686/space" target="_blank"><i className='fa fa-github fa-3x '></i></a>
          <p className={styles.shoutOut}>This design was made by the <a className={styles.frontendMenot} href="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3/hub/space-tourism-multipage-website-wXiLPXmCV3">Frontend Mentor</a></p>
        </div> 
      </div>
  )
}

export default Css