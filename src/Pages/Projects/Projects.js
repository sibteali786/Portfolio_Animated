import React, { useEffect, useState } from "react";
import styles from "../../Sass/components/projects.module.scss";
import file from "../../Resources/URL.json";
export default Projects;

function Projects() {
  const imgRef = file.imgUrls;
  const username = "sibteali786";
  const password = "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";
  const headers = {
    Authorization: `Basic ${`${username}:${password}`.toString("base64")}`,
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
      setRepos(data);
      var result = {};
      //get languages based on repo url
      const arr = [];
      var n = 0;
      data.map(async (repo) => {
        const res = await fetch(repo.languages_url, {
          method: "GET",
          headers: headers,
        });
        const resCont = await fetch(
          repo.contents_url.replace("/{+path}", "/Images"),
          {
            method: "GET",
            headers: headers,
          }
        );
        const data = await res.json();
        const dataCont = await resCont.json();
        result[repo.name] = data;
        dataCont.map((data) => {
          arr[n] = data.download_url;
          n = n + 1;
        });
      });
      setContents(arr.sort());
      setLanguage(result);
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
              {file.url.map((arr, index) => (
                <picture>
                  <source
                    type="image/png"
                    data-srcset={arr}
                    srcSet={arr}
                    sizes="512px"
                  />
                  <img src={contents[index]} alt="Repos" />
                </picture>
              ))}
            </div>
            <div className={`${styles.projectItemText}`}>
              {repos.map((repo) => (
                <div key={repo.id}>
                  <p className={`${styles.projectTags}`}>{repo.description}</p>
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
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
