import React, { useEffect, useState } from "react";
import styles from "../../Sass/components/projects.module.scss";
import file from "../../Resources/URL.json";
export default Projects;

function Projects() {
  const imgRef = file.imgUrls;
  const headers = {
    Authorization: `Token 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`,
  };
  const [repos, setRepos] = useState([]);
  const [language, setLanguage] = useState([]);
  const [contents, setContents] = useState([]);
  const URL = `https://api.github.com/users/sibteali786/starred`;
  const [loading, setloading] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const FetchURL = async () => {
      const res = await fetch(URL, {
        method: "GET",
        headers: headers,
      });
      const data = await res.json();
      console.log(data);
      setRepos(data);
      var result = {};
      var contents = {};
      //get languages based on repo url
      const languagesRepos = data.map(async (repo) => {
        const res = await fetch(repo.languages_url, {
          method: "GET",
          headers: headers,
        });
        const resCont = await fetch(repo.contents_url.replace("/{+path}", ""), {
          method: "GET",
          headers: headers,
        });
        const data = await res.json();
        const dataCont = await resCont.json();
        result[repo.name] = data;
        contents[repo.name] = dataCont;
      });
      setLanguage(result);
      setContents(contents);
      setloading(false);
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
            <div className={`${styles.projectItemImage}`}>
              {file.url.map(
                (arr, index) => console.log(arr)
                // <picture>
                //   <source srcset={arr}></source>
                //   <img src={require("." + imgRef[index]).default} alt="Repos" />
                // </picture>
              )}
            </div>
            <div className={`${styles.projectItemText}`}>
              {!loading
                ? console.log(contents)
                : repos.map(
                    (repo) => console.log(repo)
                    // <div key={repo.id}>
                    //   <p className={`${styles.projectTags}`}>
                    //     {repo.description}
                    //   </p>
                    //   <h3
                    //     className={`${styles.projectTitle} ${styles.blackText} `}
                    //     style={{ textTransform: "uppercase" }}
                    //   >
                    //     {repo.name}
                    //   </h3>
                    //   <a
                    //     href={repo.url}
                    //     className={`${styles.underlinedText} ${styles.viewButton} `}
                    //   >
                    //     view project
                    //   </a>
                    //   <div className={`${styles.projectTechnologies} `}>
                    //     {!loading ? console.log(language) : <div>No Data</div>}
                    //   </div>
                    // </div>
                  )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
