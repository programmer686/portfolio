import React from "react";
import styles from "./Projects.module.css";
import data from "./data";
import ProjectCard from "./ProjectCard";
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
  return <div className={styles.body}>{projectCard}</div>;
}

export default HTML;
