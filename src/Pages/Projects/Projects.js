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
                        <figure className={`${styles.technologyBlock}`}>
                          <svg
                            viewBox="0 0 128 128"
                            width="36"
                            height="28"
                            className={`${styles.technologyIcon}`}
                          >
                            <path
                              fill="#FFFFFF"
                              d="M1.408 1.408h125.184v125.185H1.408z"
                            />
                            <path
                              fill="#323330"
                              d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                            />
                          </svg>
                          <figcaption className={`${styles.technologyName}`}>
                            JavaScript
                          </figcaption>
                        </figure>
                        <figure className={`${styles.technologyBlock}`}>
                          <svg viewBox="0 0 128 128" width="40" height="36">
                            <path
                              fill="#FFFFFF"
                              d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336L64 101.607v.001l-.022.019-28.311-7.888L33.75 72h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041-.63-7.131L29.401 23h69.281l-.331 3.862z"
                            />
                          </svg>

                          <figcaption className={`${styles.technologyName}`}>
                            CSS
                          </figcaption>
                        </figure>
                        <figure className={`${styles.technologyBlock}`}>
                          <svg viewBox="0 0 128 128" width="40" height="36">
                            <path
                              fill="#FFFFFF"
                              d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387L118.968 2H9.032zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471-3.233 36.119-.238 2.27L64 102.609v.002l-.034.018-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z"
                            />
                          </svg>

                          <figcaption className={`${styles.technologyName}`}>
                            HTML
                          </figcaption>
                        </figure>
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
