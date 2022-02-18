import React, { useEffect, useState } from "react";
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
  const FetchURL = async () => {
    var arr = [];
    var result = {};
    var n = 0;
    try {
      setLoading(true);
      const res = await fetch(URL, {
        method: "GET",
        headers: headers,
      });
      const data = await res.json();
      //get languages based on repo url
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
        const dataRes = await res.json();
        const dataCont = await resCont.json();
        console.log("dataCont", dataCont);
        result[repo.name] = dataRes;
        dataCont.map((data) => {
          contents[n] = data.download_url;
          console.log(contents);
          n = n + 1;
        });
        contents = contents.sort();
        // console.log("result", arr);
      });
      setRepos(data);
      console.log("repos", repos);
      // setContents(arr);
      console.log("contents", contents);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLanguage(result);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    FetchURL();
    console.log("contents", contents);
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
              {!loading
                ? file.url.map(
                    (arr, index) => (
                      <picture>
                        <img src={contents[index]} alt="Repos" />
                      </picture>
                    )
                    // console.log(contents[index])
                  )
                : console.log("Nothing")}
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
