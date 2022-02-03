import React, { useEffect, useState } from "react";
import styles from "../../Sass/components/projects.module.scss";
export default Projects;

function Projects() {
  const [repos, setRepos] = useState([]);
  const [language, setLanguage] = useState({});
  const URL = `https://api.github.com/users/sibteali786/starred`;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const FetchURL = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      setRepos(data);
      //get languages based on repo url
      const languagesRepos = data.map(async (repo) => {
        const res = await fetch(repo.languages_url);
        const data = await res.json();
        console.log(data);
      });
      // const fullName = data.map((repo) => repo.full_name);
      // languagesRepos.forEach(async (lang) => {
      //   console.log(data);
      // });
      const languagesURL = data[0].languages_url;
      const resLanguage = await fetch(languagesURL);
      const dataLanguage = await resLanguage.json();
      console.log(dataLanguage);
      // setLanguage(dataLanguage);
      // console.log("languages: ", data[0].languages_url);
      // const fetchData = data.language_url;
    };
    FetchURL();
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
            <div className={`${styles.projectItemText}`}>
              {repos.map((repo) => (
                <div key={repo.id}>
                  <p>{repo.description}</p>
                  <h3>{repo.full_name}</h3>
                  <a href={repo.url}>view project</a>
                  <div>{}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
