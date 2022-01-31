import React, { useEffect, useState } from "react";
import styles from "../../Sass/components/projects.module.scss";
export default Projects;

function Projects() {
  const [user, setUser] = useState([]);
  const URL = `https://api.github.com/users/sibteali786/repos`;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setUser(data);
  }, []);
  return (
    <div className={`${styles.illuminationTop}  ${styles.illuminationTopLeft}`}>
      <main>
        <section className={`${styles.maxWidth}`}>
          <h1
            className={`${styles.title} ${styles.titleBig} ${styles.textGradient} `}
          >
            Projects
          </h1>
          <div className={`${styles.projectItem}`}>
            <div className={`${styles.projectItemImage}`}></div>
            <div className={`${styles.projectItemText}`}></div>
          </div>
        </section>
      </main>
    </div>
  );
}
