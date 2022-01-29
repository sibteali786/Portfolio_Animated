import React from "react";
import styles from "../../Sass/components/projects.module.scss";
export default Projects;

function Projects() {
  return (
    <div className={`${styles.illuminationTop}  ${styles.illuminationTopLeft}`}>
      <main>
        <section className={`${styles.maxWidth}`}>
          <h1
            className={`${styles.title} ${styles.titleBig} ${styles.textGradient} `}
          >
            Projects
          </h1>
        </section>
      </main>
    </div>
  );
}
