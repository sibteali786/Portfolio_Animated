import React, { useCallback, useEffect, useState } from "react";
import styles from "../../Sass/components/projects.module.scss";
import file from "../../Resources/URL.json";
export default Projects;

function Projects() {
  const username = "sibteali786";
  const password = "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";
  const headers = {
    Authorization: `Basic ${`${username}:${password}`.toString("base64")}`,
  };
  const [repos, setRepos] = useState([]);
  const [language, setLanguage] = useState([]);
  var [contents, setContents] = useState([]);
  const URL = `https://api.github.com/users/sibteali786/starred`;
  const [loading, setLoading] = useState(true);
  const FetchURL = useCallback(async () => {
    var result = {};
    var n = 0;
    setLoading(true);
    const res = await fetch(URL, {
      method: "GET",
      headers: headers,
    });
    const data = await res.json();
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      // eslint-disable-next-line no-loop-func
      // eslint-disable-next-line no-loop-func
      const dataFunc = async (element) => {
        const res = await fetch(element.languages_url, {
          method: "GET",
          headers: headers,
        });
        const resCont = await fetch(
          element.contents_url.replace("/{+path}", "/Images"),
          {
            method: "GET",
            headers: headers,
          }
        );
        const dataRes = await res.json();
        const dataCont = await resCont.json();
        result[element.name] = dataRes;
        for (let i = 0; i < dataCont.length; i++) {
          const element = dataCont[i];
          contents[n] = element.download_url;
          n = n + 1;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        contents = contents.sort();
      };
      dataFunc(element);
    }
    //get languages based on repo url
    setRepos(data);
    setLanguage(result);
    setLoading(false);
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    FetchURL();
  }, [FetchURL]);

  return (
    <div className={`${styles.illuminationTop}  ${styles.illuminationTopLeft}`}>
      <main>
        <section className={`${styles.maxWidth}`}>
          <h1
            className={`${styles.title} ${styles.titleBig} ${styles.textGradient} `}
          >
            Projects
          </h1>
          {!loading
            ? repos.map((repo, index) => (
                <div className={`${styles.projectItem}`}>
                  <div className={`${styles.projectItemImage}`}>
                    <picture>
                      <img
                        src={contents[index]}
                        onClick={() => console.log(contents)}
                        alt="Repos"
                      />
                    </picture>
                  </div>
                  <div className={`${styles.projectItemText}`}>
                    <div key={repo.id}>
                      <p className={`${styles.projectTags}`}>
                        {repo.description}
                      </p>
                      <h3
                        className={`${styles.projectTitle} ${styles.blackText} `}
                        style={{ textTransform: "uppercase" }}
                      >
                        {repo.name}
                      </h3>
                      <a
                        href={repo.url}
                        className={`${styles.underlinedText} ${styles.viewButton} `}
                      >
                        view project
                      </a>
                      <div className={`${styles.projectTechnologies} `}>
                        {/* {!loading ? console.log(language) : <div>No Data</div>} */}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : console.log("Display")}
        </section>
      </main>
    </div>
  );
}
