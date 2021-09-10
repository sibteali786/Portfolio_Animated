import React from "react";
import styles from "./style.module.css";
import useWebAnimations, { fadeIn } from "@wellyshen/use-web-animations";
export default Contact;

function Contact() {
  const { ref } = useWebAnimations({ ...fadeIn });

  return <div ref={ref}>Contact Page</div>;
}
