import React from 'react'
import styles from "./Home.module.css"
import image from "../images/logo.jpg"
import Scrimba from "../images/Scrimba.jpg"
import Fcc from "../images/fcc.png"
import flowers from "../images/flowers.webp"
function Home() {
  return (
    <div>
      <main className={styles.container} >
        <header className={styles.header}>
              <img className={styles.logo} src={image} alt=""/>
            <div className={styles.textContainer}>
              <p className={styles.introduction}>My name is Luke Smith, I am a junior level Frontend wed developer looking forward to working with you. My abilities are HTML, CSS, Javascript, and a host of other tools to put it all together.
              </p>
              <h1 className={styles.name}>Luke Smith</h1>
            </div>
        </header>
        </main>
        <body>
            <section className={styles.certificateContainer}>
              <img alt="" src={Scrimba} className={styles.Scrimba}/>
              <img alt="" src={Fcc} className={styles.Fcc}/>
            </section>
            <section className={styles.bioBody}>
              <p className={styles.bioText}>
                <span className={styles.FccName}>FreeCodeCamp</span> and <span className={styles.ScrimbaName}>Scrimba</span>.
                <br/>
                &ensp;FreeCodeCamps' course goes through everything concerning HTML, elements and tags alike, to responsive CSS.
                FreeCodeCamp's course is long with out about, but it is worth it.
               <br/>
                &ensp;Then there was Scrimba's course with their great teachers but even greater community.
                This course goes through everything from 
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>APIs</li>
                  <li>Git</li>
                  <li>React</li>
                </ul>
                With these skills I am now looking for my first tech job, whatever it might be, IT support, wordpress developer, or frontend developer.

              </p>
              <img className={styles.image} src={flowers} alt="" />
            </section>
        </body>
    </div>
  )
}

export default Home