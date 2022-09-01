import React from "react";
import styles from "./Projects.module.css";
import data from "./data";
import ProjectCard from "./ProjectCard";
import Scrimba from "../images/Scrimba.jpg";
import Fcc from "../images/fcc.png";
function HTML() {
  const projectCard = data.map((item) => {
    return (
      <ProjectCard
        key={item.key}
        title={item.title}
        link={item.link}
        techUsed={item.techUsed}
        gitHub={item.gitHub}
      />
    );
  });
  return (
    <div>
      <main className={styles.hero}>
        <h1 className={styles.projects}>My Projects</h1>
      </main>
      <section className={styles.certificateContainer}>
          <img alt="" src={Scrimba} className={styles.Scrimba} />
          <img alt="" src={Fcc} className={styles.Fcc} />
        </section>
      <div className={styles.body}>{projectCard}</div>
    </div>
  );
}

export default HTML;
