import React from "react";
import styles from "./style.module.css";
import useWebAnimations, { fadeIn } from "@wellyshen/use-web-animations";
export default Projects;

function Projects() {
  const { ref } = useWebAnimations({ ...fadeIn });

  return <div ref={ref}>Projects Page</div>;
}
