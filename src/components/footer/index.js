import TextLogo from "../logos/TextLogo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="primary-footer padding-block-700 bg-neutral-900 text-neutral-100">

            <div className="container bg-neutral-900 text-neutral-100">

                <div className="even-columns">

                    <div className="primary-footer-logos">
                        <h3>HELSINKI CITY BIKES</h3>

                        <ul className="social-list" role="list">
                            <li>
                                <a href="https://www.instagram.com/raimohaikari/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon className="social-icon" icon={faCheckSquare} />
                                </a>
                            </li>
                            <li>
                                <a  href="https://github.com/RaimoHaikari" target="_blank"  rel="noreferrer">
                                    <FontAwesomeIcon className="social-icon" icon={faCoffee} />
                                </a>
                            </li>
                        </ul>
                        
                    </div>

                    <div className="copy-right-container">
                        <p>Raimo Haikari © {new Date().getFullYear()}</p>
                    </div>
                </div>
            
            </div>
            
        </footer>
    );
};

export default Footer;