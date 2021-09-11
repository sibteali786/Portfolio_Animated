import React from "react";
import styles from "../../Sass/components/about.module.scss";
import useWebAnimations, { fadeIn } from "@wellyshen/use-web-animations";
export default About;

function About() {
  const { ref } = useWebAnimations({ ...fadeIn });
  return <div ref={ref}>About Page</div>;
}
