import { Link } from "react-router-dom";

import TextLogo from "../logos/TextLogo";

const Footer = () => {
    return (
        <footer className="primary-footer padding-block-700 bg-neutral-900 text-neutral-100">

            <div className="container bg-neutral-900 text-neutral-100">

                <div className="even-columns">

                    <div className="primary-footer-logos">
                        <TextLogo />
                    </div>

                    <div className="primary-footer-nav">
                        <nav className="footer-nav">
                            <ul className="flow" aria-label="Footer" role="list">
                                <li><Link to="/about">Tietoja sovelluksesta</Link></li>
                            </ul>
                        </nav>
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