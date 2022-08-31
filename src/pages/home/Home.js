import React from "react";
import styles from "./Home.module.css";
import image from "../images/logo.jpg";
import Scrimba from "../images/Scrimba.jpg";
import Fcc from "../images/fcc.png";
import flowers from "../images/flowers.webp";
function Home() {
  return (
    <div>
      <main className={styles.container}>
        <h1 className={styles.name}>Luke Smith</h1>
      </main>
      <body>
        <section className={styles.certificateContainer}>
          <img alt="" src={Scrimba} className={styles.Scrimba} />
          <img alt="" src={Fcc} className={styles.Fcc} />
        </section>
        <section className={styles.bioBody}>
          <div className={styles.whoIAm}>
            <p className={styles.infoCard}>
              Self-motivated, outgoing high school graduate, launching an IT career. Seeking
              to leverage small business experience and front-end development coursework to
              succeed in an IT position. Adept at problem-solving, teamwork, and self-study.
              </p>
          </div>
        </section>
      </body>
    </div>
  );
}

export default Home;