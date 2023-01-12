import { Link } from "react-router-dom";

import Sitelogo from "../logos/Sitelogo";

const Header = () => {

    return (
        <header className="primary-header">

            <div className="container">

                <div  className="nav-wrapper">

                    <Link to="/">
                        <Sitelogo />
                    </Link>

                    <nav className="primary-navigation">
                        <ul role="list" aria-label="Primary" className="nav-list" id="primary-navigation">
                            <li>
                                <Link to="/stations">Asemat</Link>
                            </li>
                            <li>
                                <Link to="/stations/1">Bööle</Link>
                            </li>
                        </ul>
                    </nav>
                
                </div>

            </div>

        </header>
    );

};

export default Header;