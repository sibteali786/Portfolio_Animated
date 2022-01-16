import React from 'react'
import styles from "../../Sass/components/footer.module.scss";
import { ReactComponent as ReactLogo } from "../../Resources/logo_2.svg";
function Footer(){



    return (
        <div className = {`${styles.footer}`}>
            <ReactLogo className={`logo`} />
            <div>
            <h6>
                Services
            </h6>
            <p>
                Web Design 
            </p>
            <p>
                MERN Stack Web Development 
            </p>
            <p>
                Serverless  
            </p>
            </div>
            <div>
            <h6>
                Contact
            </h6>
                <a href="">Sibteali786@gmail.com</a>
                <a href="">ssibteali.ce41ceme@ce.ceme.edu.pk</a>
            </div>
            
        </div>
    )
}

export default Footer;