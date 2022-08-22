import React from 'react'
import styles from "./Home.module.css"
import image from "../images/logo.jpg"
import Scrimba from "../images/Scrimba.jpg"
import Fcc from "../images/fcc.png"
import Flowers from "../images/flowers.webp"
function Home() {
  return (
    <div>
      <main className={styles.container} >
        <header className={styles.header}>
            <div>
              <img className={styles.logo} src={image} alt=""/>
            </div>
            <div className={styles.textContainer}>
              <p className={styles.introduction}>
              My name is Luke Smith, I am a junior level Frontend wed developer looking forward to working with you.
              My abilities are HTML, CSS, Javascript, and a host of other tools to put it all together.
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
            <section className={styles.bioContainer}>
              <p className={styles.bioText}>
                I wrote my first "Hello World" in HTML, and soon after
                I was looping my way through data, conditionally rendered  "You Win" or "You lose", and played a game of Blackjack.
                I had and have a lot to learn, and that is one of the things that I love about programming.
                There is always some new framework, library, or technology to learn.
                And that has taught me I have a lot left to learn, but thankfully not as much since I started.
              </p>
              <img className={styles.flowers} src={Flowers} alt=""/>
            </section>
           
        </body>
    </div>
  )
}

export default Home