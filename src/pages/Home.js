import React from 'react'
import styles from "./Home.module.css"
import image from "./images/logo.jpg"
import scrimba from "./images/Scrimba.jpg"
function Home() {
  return (
    <div>
      <main className={styles.container} >
        <header className={styles.header}>
            <div>
              <img className={styles.logo} src={image} alt=""/>
              <h1>Luke Smith</h1>
            </div>
          <p className={styles.introduction}>Lorem ipsum dolor sit amet. Vel dolorem, Lorem ipsum dolor sit amet. Vel dolorem  , Lorem ipsum dolor sit amet. Vel dolorem    </p>
        </header>
        </main>
        <body>
            <div className={styles.certificateContainer}>
              <img className={styles.certificate} src={scrimba} alt=""/>
              <img className={styles.certificate} src={scrimba} alt=""/>
              <img className={styles.certificate} src={scrimba} alt=""/>
            </div>
           <div className={styles.bio}>
              <p className={styles.biotext}>Lorem ipsum dolor sit amet. Vel dolorem, Lorem ipsum dolor sit amet. Vel dolorem  , Lorem ipsum dolor sit amet. Vel dolorem   Lorem ipsum dolor sit amet. Vel dolorem, Lorem ipsum dolor sit amet. Vel dolorem  , Lorem ipsum dolor sit amet. Vel dolorem   Lorem ipsum dolor sit amet. Vel dolorem, Lorem ipsum dolor sit amet. Vel dolorem  , Lorem ipsum dolor sit amet. Vel dolorem   Lorem ipsum dolor sit amet. Vel dolorem, Lorem ipsum dolor sit amet. Vel dolorem  , Lorem ipsum dolor sit amet. Vel dolorem   Lorem ipsum dolor sit amet. Vel dolorem, Lorem ipsum dolor sit amet. Vel dolorem  , Lorem ipsum dolor sit amet. Vel dolorem   Lorem ipsum dolor sit amet. Vel dolorem, Lorem ipsum dolor sit amet. Vel dolorem  , Lorem ipsum dolor sit amet. Vel dolorem   </p>
           </div>
        </body>
    </div>
  )
}

export default Home